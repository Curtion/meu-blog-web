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
        this.getTags().then(res => {
            this.tags = res.info.data
        })
    }
}
</script>