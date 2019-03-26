<template>
    <div class="aside">
        <el-card class="box-card" shadow="never">
            <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
            </div>
        </el-card>
        <el-card class="box-card" shadow="never">
            <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
            </div>
        </el-card>
        <el-card class="box-card" shadow="never">
            <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
            </div>
        </el-card>
        <el-card class="box-card" shadow="never">
            <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
            </div>
        </el-card>
    </div>
</template>

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
