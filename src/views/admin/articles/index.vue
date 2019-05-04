<template>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%"
    v-loading="loading"
    @selection-change="change">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      prop="title"
      label="标题">
    </el-table-column>
    <el-table-column
      prop="kind"
      label="分类"
      width="350px">
    </el-table-column>
    <el-table-column
      prop="time"
      label="发表时间"
      width="350px">
    </el-table-column>
    <el-table-column
    label="操作"
    width="240px">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import axios from "axios";
import config from '@/config.js'
import dayjs from 'dayjs'
export default {
    data() {
        return {
            loading: true,
            tableData: []
        }
    },
    methods: {
        change: function(val) {
            // console.log(val) // 数组，包含了选中的行
        },
        getPostList: function(limit, page) {
            return new Promise(async (resolve, reject) => {
                let res = (await axios.get(config.ajaxUrl + "articles/lists/?limit=" + limit + "&page=" + page)).data;
                resolve(res)
                this.loading = false
            })
        },
        handleEdit: function(index, row) {
            console.log(index, row)
        },
        handleDelete: function(index, row) {
            console.log(index, row)
        }
    },
    created() {
        this.getPostList(10000, 1).then(res => {
            let data = res.info.data
            data.forEach((element, index) => {
                data[index].time = dayjs(data[index].time*1000).format('YYYY年MM月DD日 HH:mm:ss')
            });
            this.tableData = data
        })
    }
}
</script>