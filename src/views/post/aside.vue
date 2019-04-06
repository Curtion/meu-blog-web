<template>
    <div class="aside">
        <el-card class="box-card" shadow="never">
            <div slot="header" class="clearfix">文章目录</div>
            <div class="toc" v-html="toc?toc:'<span style=\'color: rgba(0, 0, 0, 0.5)\'>本篇文章没有目录</span>'"></div>
        </el-card>
    </div>
</template>

<script>
export default {
    props:['toc'],
    data(){
        return{

        }
    }
}
</script>


<style scoped>
    .aside {
        margin-left: 5px;
        position: sticky;
        top: 0;
    }
</style>
