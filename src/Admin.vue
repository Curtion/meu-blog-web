<template>
  <div class="admin" v-if="main">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'admin',
  data() {
    return {
      main: false
    }
  },
  created() {
    if(this.$route.path.indexOf('admin') !== -1){
      this.main = true;
    }
  },
}
</script>
