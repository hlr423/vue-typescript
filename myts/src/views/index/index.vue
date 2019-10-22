<template>
    <div style="margin: 20px">
        <div style="text-align: left;margin-bottom: 20px">
            <el-select v-model="data.selectValue" filterable placeholder="请选择" @change="changeSelect"  @clear="changeSelect" clearable>
                <el-option
                        v-for="item in data.status"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
        </div>
        <el-table
                :data="data.data.content"
                border
                style="width: 100%;text-align: center">

            <el-table-column
                    prop="id"
                    label="编号"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="username"
                    label="姓名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="projectName"
                    label="分支">
            </el-table-column>
            <el-table-column
                    prop="branchName"
                    label="服务名">
            </el-table-column>
            <el-table-column
                    prop="status"
                    label="状态">
            </el-table-column>
            <el-table-column
                    prop="createdTime"
                    label="日期"
                    width="180">
            </el-table-column>
        </el-table>
        <div style="margin-top: 40px">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="data.current"
                    :page-sizes="[5, 10, 20, 30]"
                    :page-size="data.Page"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="data.data.totalCount">
            </el-pagination>
        </div>
        <div style="margin-top: 20px;border: 1px solid royalblue">
            <el-checkbox  type="checkbox" :checked="data.checked" @change="change">报备</el-checkbox>
            <el-input v-model="data.myName" placeholder="请输入内容" style="width: 30%;margin-top: 10px"></el-input>
            <p>{{data.msg}}</p>
            <test :myName="data.myName" @bindSend="propMsg"  style="margin-top: 20px"/>
        </div>
    </div>
</template>

<script lang="ts" src="./index.ts">
    export default {
        name: 'index',
    };
</script>

<style scoped>

</style>
