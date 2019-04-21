<template>
    <div id="post" v-if="show">
        <el-container>
            <el-main>
                <el-row>
                    <el-col :span="16">
                        <el-card class="box-card">
                            <div slot="header" class="clearfix">
                                <h1 v-html="post.title"></h1>
                                <hr>
                                <div class="title-info">
                                    <span class="time"><i class="el-icon-date"></i> {{getDate(post.time*1000)}}</span>
                                    <span class="author"><i class="el-icon-edit-outline"></i> {{post.name}}</span>
                                    <span class="kind"><i class="el-icon-menu"></i> {{post.kind}}</span>
                                </div>
                            </div>
                            <span v-html="content" class="markdown-body"></span>
                        </el-card>
                        <el-card class="box-card msg">
                            <messages></messages>
                            <msg-list></msg-list>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <aside-right
                        :toc="toc">
                        </aside-right>
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
import messages from './components/messages/index.vue'
import msgList from './components/msglist/index.vue'
import tocObj from './js/marked.toc.js'
let markRenderer = new marked.Renderer()
markRenderer.heading = (text, level) => {
    let anchor = tocObj.add(text, level);
    return `<a id=${anchor} class="anchor-fix"></a><h${level}>${text}</h${level}>\n`;
}
marked.setOptions({
    renderer: markRenderer,
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
            loading: {},
            toc: '',
            show: false
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
    },
    methods:{
        ajax: async function() {
            this.post = (await axios.get(config.ajaxUrl + "articles/lists/" + this.id)).data.info.data;
            this.content = marked(this.post.content.replace('<!--markdown-->', '')).replace(/<pre>/g, '<pre class="hljs">')
            this.toc = tocObj.toHTML();
            this.loading.close();
        },
        getDate(timeData) {
            let d = new Date(timeData);
            let min = d.getMinutes()>=10?d.getMinutes():'0' + d.getMinutes();
            let sec = d.getSeconds()>=10?d.getSeconds():'0' + d.getSeconds();
            let es = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + min + ':' + sec;
            return es;
      },
    },
    watch: {
        post: function (value) {
            if(value.id !== undefined){
                this.show = true;
            }
        }
    },
    components: {
        asideRight: aside,
        messages: messages,
        msgList: msgList
    }
}
</script>

<style scoped>
    .title-info {
        display: flex;
        justify-content: center;
    }
    .title-info span {
        margin-right: 20px;
    }
    hr {
        border: none;
        border-bottom: 1px solid #555;
        height: 1px;
        transform: scaleY(0.5);
        transform-origin:0 0;
    }
    .msg {
        margin-top: 5px;
    }
</style>

