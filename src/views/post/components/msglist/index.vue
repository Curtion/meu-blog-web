<template>
    <div class="msg" v-loading="loading">
        <div style="margin:5px 0;;width: 100%;height: 0;border: 1px solid #eee;"></div>
        <el-card class="msgList" shadow="hover" v-for="item in msglist" :key="item.id">
            <div slot="header" class="msgtitle">
                <span class="name">称呼：{{item.name}}</span>
                <span class="time">时间：{{item.time}}</span>
            </div>
            <span class="body">{{item.post}}</span>
        </el-card>
    </div>
</template>
<script>
import axios from 'axios'
import config from '@/config.js'
export default {
    data() {
        return {
            msglist: '',
            loading: true
        }
    },
    methods: {
        getMsg: function(id) {
            axios.get(config.ajaxUrl + 'comments/lists/' + id).then((res) => {
                this.msglist = res.data.info.data;
                this.loading = false;
            })
        }
    },
    created() {
        if(this.$route.params.id !== undefined){
            this.getMsg(this.$route.params.id);
        }
    },
}
</script>

<style scoped>
.subbtn {
    display: flex;
    justify-content: flex-end;
}
.msgtitle {
    display: flex;
    justify-content: space-between;
}
.msgList {
    margin-bottom: 10px;
    background-color: #f7f7f7;
}
</style>
