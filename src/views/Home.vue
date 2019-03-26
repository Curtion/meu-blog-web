<template>
  <div id="body">
    <div class="home" type="flex" justify="center">
        <el-container>
            <el-header>
                <header-meu></header-meu>
            </el-header>
            <el-main>
                <el-row>
                    <el-col :span="16">
                        <main-post-list></main-post-list>
                    </el-col>
                    <el-col :span="8">
                        <aside-view></aside-view>
                    </el-col>
                </el-row>
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
import aside from './components/aside.vue'
export default {
    name: 'home',
    components: {
        headerMeu: header,
        footerMeu:footer,
        mainPostList:postList,
        asideView: aside
    }
};
</script>
