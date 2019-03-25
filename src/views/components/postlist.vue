<template>
    <div class="post-list">
        <el-card v-for="item in list" :key="item.id" class="box-card">
            <div slot="header" class="clearfix">
                <span>{{item.title}}</span>
            </div>
            <div class="text item">
                {{item.content}}
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
        this.list = data.info.data
        this.msg = data.msg
    }
}
</script>

<style scoped>
    .box-card {
        margin-bottom: 5px;
    }
</style>
