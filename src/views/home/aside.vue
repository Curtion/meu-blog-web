<template>
    <div class="aside">
        <el-card class="box-card" shadow="never">
            <el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column
                prop="date"
                label="日期"
                width="90"
                align="center">
                </el-table-column>
                <el-table-column
                prop="schedule"
                label="进度"
                width="90"
                align="center">
                </el-table-column>
                <el-table-column
                prop="info"
                label="说明"
                align="center">
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script>
export default {
    data(){
        return{
            tableData: [{
                date: '03-27',
                schedule: '完成',
                info: '完成主界面设计'
            }]
        }
    }
}
</script>


<style scoped>
    .text {
        font-size: 14px;
    }

    .item {
        padding: 18px 0;
    }

    .aside {
        margin-left: 5px;
    }

    .box-card {
        margin-bottom: 5px;
    }
</style>
