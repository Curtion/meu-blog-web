<template>
    <div class="msg">
        <el-row :gutter="24">
            <el-col :span="8"><el-input v-model="form.user" placeholder="用户名*"></el-input></el-col>
            <el-col :span="8"><el-input v-model="form.email" placeholder="邮箱"></el-input></el-col>
            <el-col :span="8"><el-input v-model="form.email" placeholder="主页"></el-input></el-col>
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
            <el-button type="info">提交评论</el-button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                user: '',
                email: ''
            }
        }
    },
    methods: {
    }
}
</script>

<style scoped>
.subbtn {
    display: flex;
    justify-content: flex-end;
}
</style>
