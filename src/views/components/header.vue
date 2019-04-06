<template>
    <div class="header-meu">
        <el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true">
            <el-menu-item index="1" :route="{path: '/'}">首页</el-menu-item>
            <el-menu-item index="2" :route="{path: '/archive'}">归档</el-menu-item>
            <el-menu-item index="3" :route="{path: '/tags'}">标签</el-menu-item>
            <el-menu-item index="4" :route="{path: '/messages'}">留言</el-menu-item>
            <el-submenu index="5">
                <template slot="title">关于</template>
                <el-menu-item index="5-1" :route="{path: '/works'}">作品</el-menu-item>
                <el-menu-item index="5-2" :route="{path: '/books'}">书籍</el-menu-item>
                <el-menu-item index="5-3" :route="{path: '/movie'}">电影</el-menu-item>
                <el-menu-item index="5-4" :route="{path: '/music'}">音乐</el-menu-item>
                <el-submenu index="5-5">
                <template slot="title">About Me</template>
                <el-menu-item index="5-5-1" :route="{path: '/about-me'}">关于我</el-menu-item>
                <el-menu-item index="5-5-1" :route="{path: '/resume'}">简历</el-menu-item>
                <el-menu-item index="5-5-2" :route="{path: '/coffee'}">打赏</el-menu-item>
                </el-submenu>
            </el-submenu>
        </el-menu>
    </div>
</template>
<script>
export default {
    name: 'headerMeu',
    data:() => {
        return {
            webSiteName: "竹影流浪"
        }
    },
    methods: {
        handleSelect(key, handle) {
            // console.log(key);
        }
    }
}
</script>
