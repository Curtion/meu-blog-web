import marked from 'marked';
import 'highlight.js/styles/an-old-hope.css';//这个样式有多种类型可选择


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


let install = function(Vue){
    if (install.installed) return;
    Vue.directive('marked',{
      bind:function(el,binding,vnode){
        el.innerHTML = marked(el.innerText);
      }
    })
}

export default install;