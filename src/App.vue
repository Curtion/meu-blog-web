<template>
    <div class="app">
        <div class="home" type="flex" justify="center">
            <el-container>
                <el-header>
                    <header-meu></header-meu>
                </el-header>
            </el-container>
            <router-view></router-view>
        </div>
        <el-container>
            <el-footer>
                <footer-meu></footer-meu>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
import header from '@/views/components/header.vue'
import footer from '@/views/components/footer.vue'
export default {
    name: "app",
    components: {
        headerMeu: header,
        footerMeu: footer
    }
};
</script>
<style>
    body {
        margin: 0px;
        background-color: #EEEEEE;
    }
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
</style>
