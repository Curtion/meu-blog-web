<template>
    <div class="msg">
        <div style="margin:5px 0;;width: 100%;height: 0;border: 1px solid #eee;"></div>
        <el-card style="margin-bottom: 10px;" shadow="hover" v-for="item in msglist" :key="item.id">
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
    props: ['postInfo'],
    data() {
        return {
            msglist: ''
        }
    },
    methods: {
        getMsg: function(id) {
            axios.get(config.ajaxUrl + 'comments/lists/' + id).then((res) => {
                this.msglist = res.data.info.data;
            })
        }
    },
    watch: {
        postInfo: function(value) {
            if(value !== undefined) {
                this.getMsg(this.postInfo.id)
            }
        }
    }
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
</style>
