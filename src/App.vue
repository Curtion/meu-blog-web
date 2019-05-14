<template>
    <div id="app" v-if="main">
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
    },
    data() {
        return {
            main: true,
            imgsrc: 'bg1.jpg'
        }
    },
    created() {
        if(this.$route.path.indexOf('admin') !== -1){
            this.main = false;
        }
    }
};
</script>
<style>
    body {
        margin: 0px;
        background-color: #EEEEEE;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url(./assets/background.jpg);
    }
    @media screen and (max-width:1300px) and (min-width:1024px){
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
    @media screen and (min-width:1300px){
        .home{
            width:1300px;
            margin:0 auto;
            position: relative;
        }
    }
</style>
