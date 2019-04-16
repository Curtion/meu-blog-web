<template>
    <div class="tag">
        <el-tooltip class="item" effect="dark" :content="'共' + item.count + '篇文章'" placement="bottom" v-for="(item, index) in tags" :key="index">
            <el-button class="itemTags" :type="random()" size="small" plain>
                {{item.name}}
            </el-button>
        </el-tooltip>
    </div>
</template>

<script>
import axios from 'axios'
import config from '@/config.js'
export default {
    name: 'tags',
    data() {
        return {
            loading: {},
            tags: [],
            tagStyle: ['danger', 'primary', 'success', 'info', 'warning'],
        }
    },
    methods: {
        getTags: function() {
            return new Promise(async (resolve, reject) => {
                let res = (await axios.get(config.ajaxUrl + 'tags/lists')).data;
                resolve(res);
            })
        },
        random: function() {
            return this.tagStyle[Math.floor(Math.random()*this.tagStyle.length)]
        }
    },
    created() {
        this.loading = this.$loading({
            lock: true,
            text: '数据加载中......',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.8)'
        });
        this.getTags().then(res => {
            this.tags = res.info.data
        })
        this.loading.close();
    }
}
</script>
<style scoped>
.tag {
    padding: 0 20px;
}
.itemTags {
    margin: 10px;
}
</style>
