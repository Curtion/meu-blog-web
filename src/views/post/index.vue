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
                            <span v-html="content" class="markdown-body"></span>
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
import marked from 'marked'
import 'highlight.js/styles/darkula.css'
import '@/assets/markdown.css'
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value;
  }
});
export default {
    name: 'post',
    data() {
        return {
            id: this.$route.params.id,
            post: {},
            content: '',
            loading: {}
        }
    },
    created: function() {
        this.loading = this.$loading({
            lock: true,
            text: '数据加载中......',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.8)'
        });
        this.ajax();
        this.loading.close();
    },
    methods:{
        ajax: async function() {
            this.post = (await axios.get(config.ajaxUrl + "articles/lists/" + this.id)).data.info.data;
            this.content = marked(this.post.content.replace('<!--markdown-->', '')).replace(/<pre>/g, '<pre class="hljs">')
        }
    },
    components: {
        asideRight: aside
    }
}
</script>

<style>
</style>
