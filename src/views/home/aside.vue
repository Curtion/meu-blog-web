<template>
    <div class="aside">
        <el-card class="box-card" shadow="never">
            <div slot="header" class="clearfix">标签云</div>
            <el-tag v-for="item in tags" :type="random()" class="tag">{{item}}</el-tag>
        </el-card>
        <el-card class="box-card" shadow="never">
            <div slot="header" class="clearfix">友情链接</div>
            <ul class="links">
                <li><a href="http://mxsky.cn/" target="__blank">小天地</a></li>
                <li><a href="https://mhcf.net" target="_blank">梦幻辰风</a></li>
                <li><a href="https://996.icu" target="_blank">996.ICU</a></li>
            </ul>
        </el-card>
    </div>
</template>

<script>
export default {
    data(){
        return{
            tagStyle: ['', 'success', 'info', 'warning', 'danger'],
            tags: ['代码', '毕业设计', '生活', '硬件']
        }
    },
    methods: {
        random: function() {
            return this.tagStyle[Math.floor(Math.random()*this.tagStyle.length)]
        }
    }
}
</script>


<style scoped>
    .text {
        font-size: 14px;
    }

    .item {
        padding: 18px 0;
    }

    .aside {
        margin-left: 5px;
    }

    .box-card {
        margin-bottom: 5px;
    }
    .tag {
        margin-right: 10px;
        margin-bottom: 10px;
    }
    .links {
        list-style: none;
        padding-left: 0px;
    }
    .links a:active, .links a:hover{
        color: #ccc;
        text-decoration: underline;
    }
    .links a {
        color: rgba(153, 105, 105, 0.664);
        text-decoration: none;
    }
    .link li:hover {
        background-color: rgb(230, 178, 178);
    }
</style>
