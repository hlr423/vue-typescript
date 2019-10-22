<template>
    <div>
        <el-container >
            <el-aside width="200px;" style="height:80vh;margin-right: 25px">
                <el-card class="box-card" >
                    <div slot="header" class="clearfix" style="width: 200px;">
                        <span>我的标签</span>
                    </div>
                    <div v-for="o in 4" :key="o" class="text item">
                        <router-link to="/login1" style="text-decoration: none; color: #383838;"> {{'列表内容 (' + o +')'}}</router-link>
                    </div>
                </el-card>
                <el-card class="box-card"  style="margin-top: 40px">
                    <div slot="header" class="clearfix" style="width: 200px;">
                        <span>我的标签</span>
                        <!--                                <span>随笔档案</span>-->
                    </div>
                    <div v-for="o in 4" :key="o" class="text item">
                        <router-link to="/test" style="text-decoration: none; color: #383838;"> {{'列表内容 (' + o +')'}}</router-link>
                    </div>
                </el-card>
                <div style="width: 240px;">
                    <el-calendar v-model="value">
                    </el-calendar>
                </div>
            </el-aside>
            <el-main style="padding: 0;overflow-y: auto" >
                <router-view/>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "contentPage",
        data(){
            return{
                value: new Date()
            }
        }
    }
</script>

<style scoped>

</style>
