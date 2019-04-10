<template>
    <div class="msg">
        <el-row :gutter="24">
            <el-col :span="8"><el-input v-model="form.user" placeholder="称呼*"></el-input></el-col>
            <el-col :span="8"><el-input v-model="form.email" placeholder="邮箱"></el-input></el-col>
            <el-col :span="8"><el-input v-model="form.url" placeholder="主页"></el-input></el-col>
        </el-row>
        <div style="margin: 10px 0;"></div>
        <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4}"
        placeholder="请输入内容"
        v-model="form.content">
        </el-input>
        <div style="margin: 20px 0;"></div>
        <div class="subbtn">
            <el-button type="info" @click="upmsg">提交评论</el-button>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import config from '@/config.js'
export default {
    props: ['postInfo'],
    data() {
        return {
            form: {
                user: '',
                email: '',
                url: '',
                content: ''
            }
        }
    },
    methods: {
        upmsg: function() {
            if(this.form.user === ''){
                this.$message.error('请输入您的称呼!')
                return;
            }
            if(this.form.content === ''){
                this.$message.error('请输入评论内容!')
                return;
            }
            axios.post(config.ajaxUrl + 'comments/add',{
                cid: this.postInfo.id,
                name: this.form.user,
                post: this.form.content,
                parent: 0,
                email: this.form.email,
                url: this.form.url
            }).then((res) => {
                if(res.data.status === '0'){
                    this.$message.success('提交评论成功');
                }
            })
        }
    }
}
</script>

<style scoped>
.subbtn {
    display: flex;
    justify-content: flex-end;
}
</style>
