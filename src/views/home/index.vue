<template>
  <div id="body">
    <el-container>
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
</template>
<script>
import postList from './postlist.vue'
import aside from './aside.vue'
export default {
    name: 'home',
    components: {
        mainPostList: postList,
        asideView: aside
    }
};
</script>
