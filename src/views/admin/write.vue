<template>
    <div class="write">
        <div class="center">
            <el-form label-width="40px">
                <el-form-item label="标题">
                    <el-input placeholder="请输入文章标题"></el-input>
                </el-form-item>
                <el-form-item label="正文">
                    <mark-down @on-save="save" theme="GitHub"/>
                </el-form-item>
                <el-form-item class="inline" label="分类">
                    <el-select v-model="value" multiple placeholder="请选择文章分类">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item class="inline ml" label="标签">
                    <el-select v-model="value" multiple placeholder="请选择文章标签">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">立即发布</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import MarkDown from 'vue-meditor'
export default {
    components: {
        MarkDown
    },
    data() {
        return {
            options: [
                {
                    value: '选项1',
                    label: '黄金糕'
                },
                {
                    value: '选项2',
                    label: '黄金糕s'
                }
            ],
            value: ''
        }
    },  
    methods: {
        save: function(value) {
        }
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
