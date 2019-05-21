<template>
    <div class="box">
        <div class="edit" v-if="editView">
            <el-card class="box-card" shadow="never">
                <div class="write">
                    <div class="center">
                        <el-form label-width="40px">
                            <el-form-item label="标题">
                                <el-input placeholder="请输入文章标题" v-model="Form.title"></el-input>
                            </el-form-item>
                            <el-form-item label="正文">
                                <mark-down @on-save="save" :interval="5000" theme="GitHub" :initialValue="Form.content"/>
                            </el-form-item>
                            <el-form-item class="inline" label="分类">
                                <el-select v-model="Form.kind" placeholder="请选择文章分类">
                                    <el-option
                                    v-for="item in kindLists"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.id">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item class="inline ml" label="标签">
                                <el-select v-model="Form.tag" multiple style="width: 400px;" placeholder="请选择文章标签">
                                    <el-option
                                    v-for="item in tagLists"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.id">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="put()">立即修改</el-button>
                                <el-button type="success" @click="changeView()">返回文章列表</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </el-card>
        </div>
        <el-card class="box-card" shadow="never" v-if="listView">
            <el-table
                :data="tableData"
                stripe
                style="width: 100%"
                v-loading="loading"
                @selection-change="change">
                <el-table-column
                type="selection">
                </el-table-column>
                <el-table-column
                prop="title"
                label="标题">
                </el-table-column>
                <el-table-column
                prop="kindname"
                label="分类"
                width="100px">
                </el-table-column>
                <el-table-column
                prop="time"
                label="发表时间"
                width="200px">
                </el-table-column>
                <el-table-column
                label="操作"
                width="200px">
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
        </el-card>
    </div>
</template>

<script>
import axios from "axios";
import MarkDown from 'vue-meditor'
import config from '@/config.js'
import dayjs from 'dayjs'
export default {
    components: {
        MarkDown
    },
    data() {
        return {
            loading: true,
            tableData: [],
            Form: {
                id: '',
                title: '',
                content: '',
                kind: '',
                tag: []
            },
            kindLists: [],
            tagLists: [],
            editView: false,
            listView: true
        }
    },
    methods: {
        change: function(val) {
            // console.log(val) // 数组，包含了选中的行
        },
        put: function () {
            axios({
                url: config.ajaxUrl + 'articles/updata/',
                method: 'put',
                data: {
                    id: this.Form.id,
                    title: this.Form.title,
                    content: this.Form.content,
                    tag: this.Form.tag.join(),
                    kind: this.Form.kind
                },
                headers: {'authorization': localStorage.getItem('token')},
            }).then(res => {
                this.Form.id = ''
                this.Form.title = ''
                this.Form.content = ''
                this.Form.kind = ''
                this.Form.tag = []
                this.$message({
                    type: 'success',
                    message: res.data.msg
                });
            })
        },
        getPostList: function(limit, page) {
            return new Promise(async (resolve, reject) => {
                let res = (await axios.get(config.ajaxUrl + "articles/lists/?limit=" + limit + "&page=" + page)).data;
                let data = res.info.data
                data.forEach((element, index) => {
                    data[index].time = dayjs(data[index].time*1000).format('YYYY年MM月DD日 HH:mm:ss')
                });
                this.tableData = data
                this.loading = false
            })
        },
        handleEdit: async function(index, row) {
            let res = (await axios.get(config.ajaxUrl + "articles/lists/" + row.id)).data.info.data
            this.Form.id = row.id
            this.Form.title = res.title
            this.Form.content = res.content
            this.Form.kind = res.kind
            let tagArr = res.tag.split(',')
            tagArr = tagArr.map(item => {
                return Number(item)
            })
            this.Form.tag = tagArr
            this.editView = true
            this.listView = false
        },
        handleDelete: function(index, row) {
            this.$confirm('此操作将永久删除该文章', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                axios({
                    url: config.ajaxUrl + 'articles/delete/?id=' + row.id,
                    method: 'delete',
                    headers: {'authorization': localStorage.getItem('token')},
                }).then(res => {
                    this.getPostList(10000, 1)
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
        save: function(value) {
            this.Form.content = value.markdownValue
        },
        getKinds: async function() {
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
        },
        getTags: async function() {
            let data = (await axios.get(config.ajaxUrl + "tags/lists/")).data.info.data;
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
            this.tagLists = data
        },
        changeView: function () {
            this.getPostList(10000, 1)
            this.editView = false
            this.listView = true
        }
    },
    created() {
        this.getPostList(10000, 1)
        this.getKinds()
        this.getTags()
    }
}
</script>

<style scoped>
.write {
    display: flex;
    justify-content: center;
}
.center >>> {
    width: 100%;
}
.inline >>> {
    display: inline-block;
}
.ml >>> {
    margin-left: 50px;
}
</style>
