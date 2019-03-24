<template>
  <div id="body">
    <div class="home" type="flex" justify="center">
        <el-container>
            <el-header class="header">
                <header-meu></header-meu>
            </el-header>
            <el-main class="main">内容</el-main>
        </el-container>
    </div>
    <el-container>
        <el-footer class="footer">底部导航</el-footer>
    </el-container>
  </div>
</template>
<script>
import header from './components/header.vue'
export default {
    name: 'home',
    components: {
        headerMeu: header
    }
};
</script>

<style scoped>
    @media screen and (max-width:1200px) and (min-width:1024px){
        .home{
            width:1024px;
            margin:0 auto;
            position: relative;
        }
    }
    @media screen and (max-width:1024px){
        .home{
            width:960px;
            margin:0 auto;
            position: relative;
        }
    }
    @media screen and (min-width:1200px){
        .home{
            width:1200px;
            margin:0 auto;
            position: relative;
        }
    }
    .header {
        border-bottom: 1px solid #dcdfe6;
    }
    .footer {
        border-top: 1px solid #dcdfe6;
    }
</style>
