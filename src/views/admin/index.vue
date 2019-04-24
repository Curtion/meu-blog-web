<template>
  <div class="index">
    <el-container>
      <el-aside width="200px">
        <el-menu
          :default-active="defaultID"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :router="true">
          <el-menu-item index="write" :route="{path: '/admin/write'}">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">撰写文章</span>
          </el-menu-item>
          <el-menu-item index="articleAdmin" :route="{path: '/admin/articleAdmin'}">
            <i class="el-icon-document"></i>
            <span slot="title">文章管理</span>
          </el-menu-item>
          <el-menu-item index="messageAdmin" :route="{path: '/admin/messageAdmin'}">
            <i class="el-icon-message"></i>
            <span slot="title">留言管理</span>
          </el-menu-item>
          <el-menu-item index="tags" :route="{path: '/admin/tags'}">
            <i class="el-icon-tickets"></i>
            <span slot="title">标签管理</span>
          </el-menu-item>
          <el-menu-item index="kindAdmin" :route="{path: '/admin/kinds'}">
            <i class="el-icon-menu"></i>
            <span slot="title">分类管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultID: 'write'
    }
  },
  created() {
    let user = localStorage.getItem('user')
    if(user === null) {
      window.location.href = '/login'
      return
    }
    if(this.$route.path === '/admin' || this.$route.path === '/admin/') {
      this.$router.push('/admin/write')
      return
    }
    this.defaultID = this.$route.path.match(/\/admin\/(.*)/)[1];
  },
}
</script>
<style scoped>
.el-aside, .el-menu {
  height: 100vh;
}

.el-main {
  height: 100vh;
}
</style>
