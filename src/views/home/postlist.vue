<template>
    <div class="post-list">
        <el-card v-for="item in resList" :key="item.id" class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
                <div class="title">
                    <a v-html="item.title" @click="url(item.id)"></a>
                </div>
            </div>
            <div class="text item">
                <span>{{summary(item.content)}}</span>
                <hr>
                <div class="bottom">
                    <div class="time">{{getDate(item.time*1000)}}</div>
                    <div class="msgnum">评论：{{item.msgnum}}</div>
                </div>
            </div>
        </el-card>
        <el-pagination
        background
        layout="prev, pager, next"
        :total="totalCount"
        :page-size="ajaxPar.limit"
        :current-page="page"
        @current-change="chagePage"
        class="flex-center">
        </el-pagination>
    </div>
</template>

<script>
import axios from "axios";
import { constants } from 'fs';
import config from '@/config.js'
export default {
    name: 'postlist',
    data: () => {
        return {
            totalCount: 0,
            count: 0,
            page: 0,
            resList: [],
            loading: {},
            ajaxPar: {
                limit: 10,
                page: 1
            }
        }
    },
    created: function() {
        this.getPostList(this.ajaxPar.limit, this.ajaxPar.page).then(res => {
            this.resList = res.info.data;
            this.totalCount = res.info.totalCount;
            this.count = res.info.count;
            this.page = res.info.page;
        });
    },
    methods: {
        summary: function(data) {
            return data.replace(/[^\u4e00-\u9fa5\.，,。？“”]/g, "").substring(0, 150);
        },
        url: function(data) {
            this.$router.push(`/articles/${data}`)
        },
        getDate(timeData) {
            let d = new Date(timeData);
            let min = d.getMinutes()>=10?d.getMinutes():'0' + d.getMinutes();
            let sec = d.getSeconds()>=10?d.getSeconds():'0' + d.getSeconds();
            let es = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + min + ':' + sec;
            return es;
        },
        getPostList(limit, page) {
            return new Promise(async (resolve, reject) => {
                this.loading = this.$loading({
                    lock: true,
                    text: '数据加载中......',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.8)'
                });
                let res = (await axios.get(config.ajaxUrl + "articles/lists/?limit=" + limit + "&page=" + page)).data;
                resolve(res)
                this.loading.close();
            })
        },
        chagePage(index) {
            this.ajaxPar.page = index;
            this.getPostList(this.ajaxPar.limit, this.ajaxPar.page).then(res => {
                this.resList = res.info.data;
                this.totalCount = res.info.totalCount;
                this.count = res.info.count;
                this.page = res.info.page;
            });
        }
    }
}
</script>

<style scoped>
    .box-card {
        margin-bottom: 5px;
    }
    .title a{
        text-decoration: none;
        color: #0088CC;
        font-size:24px;
    }
    .title a:visited{
        color: #0088CC;
        text-decoration: none;
        font-size:22px;
    }
    .title a:hover {
        cursor:pointer;
        color:rgba(207, 49, 49, 0.8);
        font-size:24px;
    }
    .bottom {
        font-size: 12px;
        color: rgba(44, 39, 39, 0.8);
        display: flex;
        justify-content: space-between;
    }
    hr {
        border: none;
        border-bottom: 1px solid #DaDaDa;
        height: 1px;
        transform: scaleY(0.5);
        transform-origin:0 0;
    }
    .flex-center {
        display: flex;
        justify-content: center;
    }
</style>
