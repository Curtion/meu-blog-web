<template>
    <div class="login">
        <div class="login_form">
            <el-form ref="form" :model="form" :rules="rules" label-width="80px">
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pwd">
                    <el-input type="password" v-model="form.pwd"></el-input>
                </el-form-item>
                <el-form-item style="display: flex;justify-content: center;">
                    <el-button type="primary" @click="login">立即登陆</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import config from '@/config.js'
export default {
    data() {
        return {
            form: {
                name: '',
                pwd: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                pwd: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        login: function() {
            if(this.form.name !== '' && this.form.pwd !== ''){
                this.loginAjax().then((res) => {
                    if(res.status !== '0'){
                        this.$message({
                            message: res.msg,
                            type: 'error'
                        })
                    } else {
                        this.$message({
                            message: res.msg,
                            type: 'success'
                        })
                        localStorage.setItem('user', res.info.user)
                        localStorage.setItem('token', res.info.token)
                        window.location.href = '/admin/write'
                    }
                })
            } else {
                this.$message({
                    message: '用户名或者密码不能为空',
                    type: 'warning'
                })
            }
        },
        loginAjax: function() {
            return new Promise(async (resolve, reject) => {
                let res = (await axios({
                    method: 'post',
                    url: config.ajaxUrl + 'user/login',
                    headers : {
                        "Content-Type":'application/json;charset=utf-8'
                    },
                    data: {
                        user: this.form.name,
                        password: this.form.pwd
                    }
                })).data
                resolve(res)
            })
        }
    },
}
</script>
<style scoped>
.login {
    display: flex;
    justify-content: center;
    padding: 50px 0;
}
.login_form {
    width: 600px;
}
</style>

