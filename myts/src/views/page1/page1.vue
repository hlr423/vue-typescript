<template>
    <div>
<!--        <HeadComponents></HeadComponents>-->
<!--        <div>-->
<!--            <p>{{data.id}}</p>-->
<!--            <p>{{data.name}}</p>-->
<!--            <p>{{data.sex}}</p>-->
<!--            <p>{{data.date}}</p>-->
<!--        </div>-->
        <el-container>
            <el-header style="padding: 0">
                <div style="background-color: black">
                    <HeadComponents></HeadComponents>
                </div>
            </el-header>
            <el-main style="margin: auto 100px">
<!--                <contentPage></contentPage>-->
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script lang="ts" src="./page1.ts">
    export default {
        name: "page1"
    }
</script>

<style scoped>
    .headerTop{
        height: 60px;
        line-height: 60px;
       text-align: right;
        background-color: rgba(192, 192, 192, 0.2);
        padding-right: 20px;

    }
</style>
