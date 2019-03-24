<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>
<style>
    body {
        margin: 0px;
    }
    @media screen and (max-width:1200px) and (min-width:1024px){
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
    @media screen and (min-width:1200px){
        .home{
            width:1200px;
            margin:0 auto;
            position: relative;
        }
    }
</style>
