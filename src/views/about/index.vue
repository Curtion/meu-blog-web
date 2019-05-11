<template>
    <el-container>
        <el-main>
            <div class="info">
                <el-card shadow="never">
                    <template slot="header">
                        关于我
                    </template>
                     <el-checkbox label="姓名：Curtion/野草" name="type"></el-checkbox>
                     <br>
                     <el-checkbox label="联系：curtion#126.com" name="type"></el-checkbox>
                     <br>
                     <el-checkbox label="介绍：一个前端小小切图的" name="type"></el-checkbox>
                </el-card>
            </div>
        </el-main>
    </el-container>
</template>
<script>
export default {
    data() {
        return {
            
        }
    }
}
</script>
