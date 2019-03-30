<template>
    <div id="post">
        <el-container>
            <el-main>
                <el-row>
                    <el-col :span="16">
                        <el-card class="box-card">
                            <div slot="header" class="clearfix">
                                <span v-html="post.title"></span>
                            </div>
                            {{post.content}}
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <aside-right></aside-right>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import aside from './aside.vue'
import axios from 'axios'
import config from '@/config.js'
export default {
    name: 'post',
    data() {
        return {
            id: this.$route.params.id,
            post: {},
            msg: ""
        }
    },
    created: async function() {
        let data = (await axios.get(config.ajaxUrl + "articles/lists/" + this.id)).data;
        this.post = data.info.data;
        this.msg = data.msg;
    },
    components: {
        asideRight: aside
    }
}
</script>
