<template>
  <div class="home">
    <el-container>
      <el-aside class="aside" width="300px">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" style="height:100vh;" :collapse="isCollapse">
            <el-submenu index="1">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
                </template>
                <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
        </el-menu>
        <i class="el-icon-menu menu"></i>
      </el-aside>
      <el-aside class="aside2" width="300px">侧边栏</el-aside>
      <el-container>
        <el-header class="header">头部导航</el-header>
        <el-main class="main">内容</el-main>
        <el-footer class="footer">底部导航</el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
    data() {
        return {
            isCollapse: false
        }
    }
}
</script>

<style scoped>
    .menu {
        position: absolute;
        right: 0px;
        top: 0px;
        font-size: 32px;
    }
    .aside {
        position: relative;
        height: 100vh;
    }
    .aside2 {
        height: 100vh;
        background-color: #AAA;
    }
    .header {
        background-color: #EEE;
    }
    .main {
        background-color: green;
    }
    .footer {
        background-color: #D11;
    }
</style>
