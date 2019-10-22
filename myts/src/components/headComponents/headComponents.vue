<template>
    <div style="display: flex;justify-content: space-around;background-color: #f05151">
        <div >
            <el-menu :default-active="activeIndex"
                     class="el-menu-demo"
                     mode="horizontal"
                     @select="handleSelect"
                     background-color="#f05151"
                     active-text-color="#ffd04b"
                     text-color="#fff"
            >
                <el-menu-item index="1"><router-link to="/contentPage" style="text-decoration: none; color: #ebeef5;">Home</router-link></el-menu-item>
                <el-menu-item index="11"><router-link to="/articleList" style="text-decoration: none; color: #ebeef5;">list</router-link></el-menu-item>
                <el-submenu index="2">
                    <template slot="title">BB</template>
                    <el-menu-item index="2-1">BB1</el-menu-item>
                    <el-menu-item index="2-2">BB2</el-menu-item>
                    <el-menu-item index="2-3">BB3</el-menu-item>
                    <el-submenu index="2-4">
                        <template slot="title">CC</template>
                        <el-menu-item index="2-4-1">CC1</el-menu-item>
                        <el-menu-item index="2-4-2">CC2</el-menu-item>
                        <el-menu-item index="2-4-3">CC3</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="3" >  <router-link to="/index" style="text-decoration: none; color: #ebeef5;">Home</router-link></el-menu-item>
                <el-menu-item index="4">EE</el-menu-item>
            </el-menu>
        </div>
        <div style="line-height: 60px">
<!--            <router-link to="/addText" style="text-decoration: none; color: #ebeef5;"> <el-button style="background-color: #ffd216;border: #ffd216" icon="el-icon-edit" circle></el-button></router-link>-->
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
             <el-button style="background-color: #ffd216;border: #ffd216" icon="el-icon-edit" circle></el-button>
              </span>
                <el-dropdown-menu slot="dropdown">
                    <router-link to="/addText" style="text-decoration: none; color: #ebeef5;"><el-dropdown-item icon="el-icon-plus">AA</el-dropdown-item></router-link>
                    <router-link to="/contentPage" style="text-decoration: none; color: #ebeef5;"><el-dropdown-item icon="el-icon-plus">BB</el-dropdown-item></router-link>
                    <router-link to="/addText" style="text-decoration: none; color: #ebeef5;"><el-dropdown-item icon="el-icon-plus">CC</el-dropdown-item></router-link>
                </el-dropdown-menu>
            </el-dropdown>
        </div>

    </div>
</template>

<script>
    export default {
        name: "headComponents",
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
