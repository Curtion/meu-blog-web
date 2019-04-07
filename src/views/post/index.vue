<template>
    <div id="post">
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
const tocObj = { 
  add: function(text, level) {
    let anchor = `toc${level}${++this.index}`;
    this.toc.push({ anchor: anchor, level: level, text: text });
    return anchor;
  },
  // 使用堆栈的方式处理嵌套的ul,li，level即ul的嵌套层次，1是最外层
  // <ul>
  //   <li></li>
  //   <ul>
  //     <li></li>
  //   </ul>
  //   <li></li>
  // </ul>
  toHTML: function() {
    let levelStack = [];
    let result = '';
    const addStartUL = () => { result += '<ul>'; };
    const addEndUL = () => { result += '</ul>\n'; };
    const addLI = (anchor, text) => { result += '<li><a href="#'+anchor+'">'+text+'<a></li>\n'; };

    this.toc.forEach(function (item) {
      let levelIndex = levelStack.indexOf(item.level);
      // 没有找到相应level的ul标签，则将li放入新增的ul中
      if (levelIndex === -1) {
        levelStack.unshift(item.level);
        addStartUL();
        addLI(item.anchor, item.text);
      } // 找到了相应level的ul标签，并且在栈顶的位置则直接将li放在此ul下
      else if (levelIndex === 0) {
        addLI(item.anchor, item.text);
      } // 找到了相应level的ul标签，但是不在栈顶位置，需要将之前的所有level出栈并且打上闭合标签，最后新增li
      else {
        while (levelIndex--) {
          levelStack.shift();
          addEndUL();
        }
        addLI(item.anchor, item.text);
      }
    });
    // 如果栈中还有level，全部出栈打上闭合标签
    while(levelStack.length) {
      levelStack.shift();
      addEndUL();
    }
    // 清理先前数据供下次使用
    this.toc = [];
    this.index = 0;
    return result;
  },
  toc: [], 
  index: 0
};
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
            toc: ''
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
            this.toc = tocObj.toHTML();
        },
        getDate(timeData) {
            let d = new Date(timeData);
            let min = d.getMinutes()>=10?d.getMinutes():'0' + d.getMinutes();
            let sec = d.getSeconds()>=10?d.getSeconds():'0' + d.getSeconds();
            let es = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + min + ':' + sec;
            return es;
      },
    },
    components: {
        asideRight: aside
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
</style>

