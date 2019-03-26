<template>
    <div class="footer">
        <a href="http://www.miitbeian.gov.cn/">蜀ICP备15026623号-1</a>
        <br>
        © 2014-2019 竹影流浪.All Rights Reserved. Powered by meu-blog.
    </div>
</template>

<script>
export default {
    name: 'footerMeu'
}
</script>

<style scoped>
    .footer{
        text-align: center;
        font-size: 12px;
        color:rgba(138, 116, 116, 0.8);
        border-top: 1px solid #e6e6e6;
    }
    .footer a, .footer a:visited{
        text-decoration: none;
        color:rgba(138, 116, 116, 0.8);
    }
    .footer a:hover {
        color:rgba(207, 49, 49, 0.8);
    }
</style>
