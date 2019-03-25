<template>
    <div class="post-list">
        <el-card v-for="item in list" :key="item.id" class="box-card">
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
import axios from "axios"
import { constants } from 'fs';
export default {
    name: 'postlist',
    data: () => {
        return {
            list: {},
            msg: ""
        }
    },
    created: async function() {
        let data = (await axios.get("http://127.0.0.1/articles/lists/?limit=10&page=1")).data;
        this.list = data.info.data;
        this.msg = data.msg;
    },
    methods: {
        summary: function(data) {
            return data.replace(/[^\u4e00-\u9fa5\.，,。？“”]/g, "").substring(0, 200);
        },
        url: function(data) {
            return `/articles/lists/${data}`
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
        color: rgba(0, 0, 0, 0.7);
        font-size:24px;
    }
    .title a:visited{
        color: rgba(0, 0, 0, 0.7);
        text-decoration: none;
        font-size:24px;
    }
    .title a:hover {
        color:rgba(207, 49, 49, 0.8);
        font-size:24px;
    }
</style>
