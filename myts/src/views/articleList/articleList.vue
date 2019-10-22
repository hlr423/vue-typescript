<template>
    <div>
        <el-row>
            <el-col >
                <el-card shadow="hover" >
                    <router-link to="/addText" style="text-decoration: none; color: #383838;">
                    <div style="display: flex;justify-content: space-between;cursor: pointer">
                        <div>
                            <img src="../../assets/logo.png" alt="">
                        </div>
                        <div>
                            <div style="text-align: left;margin-left: 5%">
                               <p style="font-size: 24px">Nulla facilisis nisl vitvolutpat placerat. Pellent habitant morbi tristique .</p>
                                <p>Aliquam a neque tortor. Donec iaculis auctor turpis. Eporttitor tristique mattis. Vestibulum pretium eleifend risus, scelerisque neque rhoncus in.</p>
                                <div>
                                    <el-button>read More</el-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </router-link>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "articleList"
    }
</script>

<style scoped>

</style>
