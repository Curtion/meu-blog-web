<template>
    <el-card class="box-card" shadow="never">
        <el-button type="success" style="margin-bottom: 10px;" @click="add">添加分类</el-button>
            <el-table
            border
            :data="kindLists"
            v-loading="loading"
            style="width: 100%">
            <el-table-column
            prop="id"
            align="center"
            label="ID">
            </el-table-column>
            <el-table-column
            prop="name"
            align="center"
            label="分类名称">
            </el-table-column>
            <el-table-column
            prop="time"
            align="center"
            label="创建时间">
            </el-table-column>
            <el-table-column
            align="center"
            label="操作">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-card>
</template>

<script>
import axios from 'axios'
import config from '@/config.js'
import dayjs from 'dayjs'
export default {
  data() {
    return {
        kindLists: [],
        loading: true
    }
  },
  methods: {
    ajax: async function() {
        let data = (await axios.get(config.ajaxUrl + "kinds/lists/")).data.info.data;
        data.forEach((element, index) => {
            data[index].time = dayjs(data[index].time*1000).format('YYYY年MM月DD日 HH:mm:ss')
        });
        data.sort((x, y) => { //对结果排序
            if(x.id < y.id) {
                return -1
            }
            if(x.id > y.id) {
                return 1
            }
        })
        this.kindLists = data
        this.loading = false
    },
    add: function() {
        this.$prompt('请输入分类名称', '添加分类', {
            confirmButtonText: '添加',
            cancelButtonText: '取消',
            inputPattern: /^[\s\S]*.*[^\s][\s\S]*$/,
            inputErrorMessage: '名称不能为空'
        }).then(async ({ value }) => {
            axios({
                url: config.ajaxUrl + 'kinds/add/',
                method: 'post',
                data: {
                    name: value,
                    parent: 0
                },
                headers: {'authorization': localStorage.getItem('token')},
            }).then(res => {
                this.ajax()
                this.$message({
                    type: 'success',
                    message: res.data.msg
                });
            })
        }).catch((res) => {
            this.$message({
                type: 'info',
                message: res
            });
        });
    },
    handleDelete: function(row) {
        this.$confirm('此操作将永久删除该标签', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(() => {
            axios({
                url: config.ajaxUrl + 'kinds/delete/?id=' + row.id,
                method: 'delete',
                headers: {'authorization': localStorage.getItem('token')},
            }).then(res => {
                this.ajax()
                this.$message({
                    type: 'success',
                    message: res.data.msg
                });
            })
        }).catch((res) => {
            this.$message({
                type: 'info',
                message: res
            });          
        });
    }
  },
  created() {
      this.ajax()
  },
}
</script>
