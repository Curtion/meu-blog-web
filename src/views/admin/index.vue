<template>
  <div class="index">
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="1"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">撰写文章</span>
          </el-menu-item>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-more-outline"></i>
              <span>管理</span>
            </template>
              <el-menu-item index="3-1">文章管理</el-menu-item>
              <el-menu-item index="3-2">留言管理</el-menu-item>
              <el-menu-item index="3-3">标签管理</el-menu-item>
              <el-menu-item index="3-4">分类管理</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>主内容</el-main>
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
