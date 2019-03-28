<template>
    <div class="post">
        <el-container>
            <el-main>
                <el-row>
                    <el-col :span="16">
                        {{id}}
                    </el-col>
                    <el-col :span="8">
                        <aside-right></aside-right>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import aside from './aside.vue'
export default {
    name: 'post',
    data() {
        return {
            id: this.$route.params.id
        }
    },
    components: {
        asideRight: aside
    }
}
</script>
