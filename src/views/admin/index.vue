<template>
  <div class="index">
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="1"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :router="true">
          <el-menu-item index="1" :route="{path: '/admin/index'}">
            <i class="el-icon-menu"></i>
            <span slot="title">概况</span>
          </el-menu-item>
          <el-menu-item index="2" :route="{path: '/admin/write'}">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">撰写文章</span>
          </el-menu-item>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-more-outline"></i>
              <span>管理</span>
            </template>
              <el-menu-item index="3-1" :route="{path: '/admin/articleAdmin'}">文章管理</el-menu-item>
              <el-menu-item index="3-2" :route="{path: '/admin/messageAdmin'}">留言管理</el-menu-item>
              <el-menu-item index="3-3" :route="{path: '/admin/tagAdmin'}">标签管理</el-menu-item>
              <el-menu-item index="3-4" :route="{path: '/admin/kindAdmin'}">分类管理</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
.el-aside, .el-menu {
  height: 100vh;
}

.el-main {
  height: 100vh;
}
</style>
