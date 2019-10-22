import {Component, Vue, Watch} from 'vue-property-decorator';
import { quillEditor } from 'vue-quill-editor'; // 调用编辑器
import { addText } from '@/types';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

@Component({
    components: {
        quillEditor,
    },
})
export default class Page1 extends Vue {
    public data: addText = {
        content: 'string',
        editorOption: {},
        textTitle: '无标题文档',
        tags: [
            { name: '标签一', type: '' },
            { name: '标签二', type: 'success' },
            { name: '标签三', type: 'info' },
            { name: '标签四', type: 'warning' },
            { name: '标签五', type: 'danger' },
        ],
        inputVisible: false,
        inputValue: '',
    };
    public onEditorReady(editor) { // 准备编辑器
        console.log(editor);
    }
    public onEditorBlur(val) {
        console.log(val)
    }// 失去焦点事件
    public onEditorFocus(val) {
        console.log(val);
    }// 获得焦点事件
    public onEditorChange(val) {
        console.log(val);
    }// 内容改变事件
    public textTitleFocus() {
       if ( this.data.textTitle === '无标题文档') {
           this.data.textTitle = '';
       }
    }
    public textTitleBlur(val) {
       if ( this.data.textTitle === '') {
           this.data.textTitle = '无标题文档';
       }
        console.log(this.data.textTitle);
    }
    // 标签事件
   public handleClose(tag) {
        // @ts-ignore
       this.data.tags.splice(this.data.tags.indexOf(tag), 1);
    }
    @Watch('showInput')
   public showInput() {
        this.data.inputVisible = true;
        // this.$nextTick(()=> {
        //     // this.$refs.saveTagInput.$refs.input.focus();
        // });
    }
   public handleInputConfirm() {
        let inputValue = this.data.inputValue;
        if (inputValue) {
            // @ts-ignore
            this.data.tags.push({ name: inputValue, type: 'success' });
        }
        this.data.inputVisible = false;
        this.data.inputValue = '';
    }
    @Watch('$route')
    public add(to: any, from: any){
        console.log(to);
    }
}

