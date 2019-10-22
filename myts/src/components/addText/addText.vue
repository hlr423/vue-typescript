<template>
    <div>
        <div>
            <el-input
                    class="title"
                    placeholder="请输入内容"
                    v-model="data.textTitle"
                    @focus="textTitleFocus($event)"
                    @blur="textTitleBlur($event)"
                    clearable>
            </el-input>

        </div>
        <div style="text-align: left;margin: 5px auto">
            <el-tag
                    :key="tag.name"
                    v-for="tag in data.tags"
                    closable
                    :type="tag.type"
                    :disable-transitions="false"
                    @close="handleClose(tag)">
                {{tag.name}}
            </el-tag>
            <el-input
                    class="input-new-tag"
                    v-if="data.inputVisible"
                    v-model="data.inputValue"
                    ref="saveTagInput"
                    size="small"
                    @keyup.enter.native="handleInputConfirm"
                    @blur="handleInputConfirm"
            >
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 添加标签</el-button>
        </div>
        <div style="height: 55vh">
            <quillEditor
                    class="quill"
                    v-model="data.content"
                    ref="myQuillEditor"
                    :options="data.editorOption"
                    @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                    @change="onEditorChange($event)">

            </quillEditor>
        </div>
        <div style="margin-top: 80px">
            <el-button type="primary" plain>存入草稿箱</el-button>
            <el-button type="success" plain>发布文章</el-button>
        </div>
    </div>
</template>

<script lang="ts" src="./addText.ts">
    export default {
        name: "addText"
    }
</script>

<style scoped lang="scss">
    .quill{
        height: 55vh;
    }
    .el-tag + .el-tag {
        margin-left: 10px;
    }
    .button-new-tag {
        margin-left: 10px;
        height: 32px;
        line-height: 30px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .input-new-tag {
        width: 90px;
        margin-left: 10px;
        vertical-align: bottom;
    }
</style>
