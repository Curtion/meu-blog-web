<template>
    <el-card class="box-card" shadow="never">
        <div class="write">
            <div class="center">
                <el-form label-width="40px">
                    <el-form-item label="标题">
                        <el-input placeholder="请输入文章标题" v-model="Form.title"></el-input>
                    </el-form-item>
                    <el-form-item label="正文">
                        <mark-down @on-save="save" :interval="5000" theme="GitHub"/>
                    </el-form-item>
                    <el-form-item class="inline" label="分类">
                        <el-select v-model="Form.kind" placeholder="请选择文章分类">
                            <el-option
                            v-for="item in kindLists"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item class="inline ml" label="标签">
                        <el-select v-model="Form.tag" multiple style="width: 400px;" placeholder="请选择文章标签">
                            <el-option
                            v-for="item in tagLists"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="add()">立即发布</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </el-card>
</template>

<script>
import MarkDown from 'vue-meditor'
import axios from 'axios'
import config from '@/config.js'
import dayjs from 'dayjs'
export default {
    components: {
        MarkDown
    },
    data() {
        return {
            kindLists: [],
            tagLists: [],
            Form: {
                title: '',
                content: '',
                kind: '',
                tag: []
            }
        }
    },  
    methods: {
        save: function(value) {
            this.Form.content = value.markdownValue
        },
        getKinds: async function() {
            let data = (await axios.get(config.ajaxUrl + "kinds/lists/")).data.info.data;
            data.forEach((element, index) => {
                data[index].time = dayjs(data[index].time*1000).format('YYYY年MM月DD日 HH:mm:ss')
            });
            data.sort((x, y) => { //对结果排序
                if(x.id < y.id) {
                    return -1
                }
                if(x.id > y.id) {
                    return 1
                }
            })
            this.kindLists = data
        },
        getTags: async function() {
            let data = (await axios.get(config.ajaxUrl + "tags/lists/")).data.info.data;
            data.forEach((element, index) => {
                data[index].time = dayjs(data[index].time*1000).format('YYYY年MM月DD日 HH:mm:ss')
            });
            data.sort((x, y) => { //对结果排序
                if(x.id < y.id) {
                    return -1
                }
                if(x.id > y.id) {
                    return 1
                }
            })
            this.tagLists = data
        },
        add: function() {
            axios({
                url: config.ajaxUrl + 'articles/add/',
                method: 'post',
                data: {
                    title: this.Form.title,
                    content: this.Form.content,
                    tag: this.Form.tag.join(),
                    kind: this.Form.kind
                },
                headers: {'authorization': localStorage.getItem('token')},
            }).then(res => {
                this.Form.title = ''
                this.Form.content = ''
                this.Form.kind = ''
                this.Form.tag = []
                this.$message({
                    type: 'success',
                    message: res.data.msg
                });
            })
        }
    },
    created() {
        this.getKinds()
        this.getTags()
    },
}
</script>
<style scoped>
.write {
    display: flex;
    justify-content: center;
}
.center >>> {
    width: 100%;
}
.inline >>> {
    display: inline-block;
}
.ml >>> {
    margin-left: 50px;
}
</style>
