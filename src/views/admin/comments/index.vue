<template>
    <div class="comments">
        <el-card shadow="never" v-for="(item, index) in data" :key="index">
            <div class="box">
                <div class="left">
                    <span>{{item.name}}发表至：<a :href="'/articles/' + item.cid" target="__blank" v-html="item.title"></a></span>
                    <span>{{item.time}}</span>
                    <span class="post">{{item.post}}</span>
                </div>
                <div class="right">
                    <el-button type="warning" @click="handleDelete(item.id)">删除</el-button>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
import axios from 'axios'
import config from '@/config.js'
export default {
    data() {
        return {
            data: [],
            loading: {}
        }
    },
    methods: {
        getComments: function() {
            axios.get(config.ajaxUrl + "comments/lists").then(res => {
                this.data = res.data.info.data
                this.loading.close();
            })
        },
        handleDelete: function(id) {
            this.$confirm('此操作将永久删除该留言', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                axios({
                    url: config.ajaxUrl + 'comments/delete/?id=' + id,
                    method: 'delete',
                    headers: {'authorization': localStorage.getItem('token')},
                }).then(res => {
                    this.getComments()
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
        this.loading = this.$loading({
            lock: true,
            text: '数据加载中......',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.8)'
        });
        this.getComments()
    },
}
</script>

<style scoped>
.box {
    display: flex;
    justify-content: space-between;
}
.left {
    display: flex;
    flex-direction: column;
}
.post {
    line-height: 40px;
    margin-left: 20px;
}
</style>
