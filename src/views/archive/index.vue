<template>
  <div id="archive">
    <el-container>
        <el-main>
            <el-row>
                <div class="box">
                    <el-timeline class="archive">
                        <el-timeline-item
                        v-for="(activity, index) in blogList"
                        :key="index"
                        :type="type[index].type"
                        >
                        <span class="list">
                            <span 
                            class="archiveClick"
                            @click="showList(index)">
                                {{blogList[index].year + '-' + blogList[index].month + ' (' + blogList[index].list.length + ')'}}
                            </span>
                            <el-timeline class="archiveList archive">
                                <transition-group name="bloglist">
                                    <template>
                                        <el-timeline-item
                                            v-for="(activityList, indexlist) in blogList[index].list"
                                            :key="indexlist"
                                            v-show="show[index].show"
                                            >
                                            <span 
                                            class="archiveClickList" 
                                            v-html="activityList.title"
                                            @click="getpost(activityList.id)">
                                            </span>
                                        </el-timeline-item>
                                    </template>
                                </transition-group>
                            </el-timeline>
                        </span>
                        </el-timeline-item>
                    </el-timeline>
                </div>
            </el-row>
        </el-main>
    </el-container>
  </div>
</template>
<script>
import axios from 'axios'
import config from '@/config.js'
export default {
    name: 'archive',
    data() {
        return {
            blogList: [],
            loading: {},
            type: [],
            show: []
        };
    },
    methods: {
        getArchive: function() {
            return new Promise(async (resolve, reject) => {
                let res = (await axios.get(config.ajaxUrl + "archive/lists")).data;
                resolve(res);
            })
        },
        showList: function(index) {
            this.type.forEach((element, index) => {
                element.type = '';
            });
            this.show[index].show = !this.show[index].show;
            this.type[index].type = 'success'
        },
        getpost: function(id) {
            this.$router.push(`/articles/${id}`)
        }
    },
    created() {
        this.loading = this.$loading({
            lock: true,
            text: '数据加载中......',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.8)'
        });
        this.getArchive().then(res => {
            this.blogList = res.info.data.reverse();
            for (let i in res.info.data){
                this.show.push({
                    show: false
                })
                this.type.push({
                    type: ''
                })
            }
            this.loading.close();
        })
    },
};
</script>

<style scoped>
.archive {
    padding: 0px 20px;
}
.box {
    display: flex;
    flex-direction: column;
}
.archiveClick:hover, .archiveClickList:hover {
    cursor: pointer;
    text-decoration: underline;
}
.archiveList li:last-child{
    padding: 0px;
}
.archiveList li:first-child{
    padding-top: 20px;
}
.bloglist-enter-active, .bloglist-leave-active {
    transition: opacity .5s;
}
.bloglist-enter, .bloglist-leave-to {
    opacity: 0;
}	
</style>
