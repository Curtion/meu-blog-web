<template>
    <div class="post-list">
        <el-card v-for="item in list" :key="item.id" class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
                <div class="title">
                    <a v-html="item.title" :href="url(item.id)"></a>
                </div>
            </div>
            <div class="text item">
                <span>{{summary(item.content)}}</span>
            </div>
        </el-card>
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
            list: {},
            msg: "",
            loading: {}
        }
    },
    created: async function() {
        this.loading = this.$loading({
            lock: true,
            text: '数据加载中......',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.8)'
        });
        let data = (await axios.get(config.ajaxUrl + "articles/lists/?limit=10&page=1")).data;
        this.list = data.info.data;
        this.msg = data.msg;
    },
    methods: {
        summary: function(data) {
            return data.replace(/[^\u4e00-\u9fa5\.，,。？“”]/g, "").substring(0, 150);
        },
        url: function(data) {
            this.loading.close();
            return `/articles/${data}`
        }
    }
}
</script>

<style scoped>
    .box-card {
        margin-bottom: 5px;
    }
    .title a:link{
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
        color:rgba(207, 49, 49, 0.8);
        font-size:24px;
    }
</style>
