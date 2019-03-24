<template>
  <div id="body">
    <div class="home" type="flex" justify="center">
        <el-container>
            <el-header>
                <header-meu></header-meu>
            </el-header>
            <el-main>
                <main-post-list></main-post-list>
            </el-main>
        </el-container>
    </div>
    <el-container>
        <el-footer>
            <footer-meu></footer-meu>
        </el-footer>
    </el-container>
  </div>
</template>
<script>
import header from './components/header.vue'
import footer from './components/footer.vue'
import postList from './components/postlist.vue'
export default {
    name: 'home',
    components: {
        headerMeu: header,
        footerMeu:footer,
        mainPostList:postList
    }
};
</script>
