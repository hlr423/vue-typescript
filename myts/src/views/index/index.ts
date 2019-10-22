import {Component, Vue, Watch, Model, Emit} from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { IndexData } from '@/types/views/index.interface';
import { Test } from '@/components' ;  // 在component中必须将组件暴露出来，通过index.ts 的export导出来成为全局可以使用组件
@Component({
    components: {
        Test,  // 这里注册组件，在.vue中直接引入使用
    },
})
export default class About extends Vue {
    @Action public GET_DATA_ASYN;
    @Action public GET_DATA_ASYN_DATA;
   public data: IndexData = {
        pageName: 'index',
       Page: 5,
       current: 1,
       data: [],
       status: [
           {value: 1, label: '1'},
           {value: 2, label: '2'},
           {value: 3, label: '3'},
           {value: 4, label: '4'},
           ],
       selectValue: '',
       myName: '我是父组件哦',
       msg: '',
    };
    // @model 作用是什么？？？？？？？？？？用在组件之间的----父组件中使用 v-model="checked" 子组件
    @Model('change', {
        type: Boolean ,
    })  public checked!: boolean;
    @Emit('change')
    public change(e: MouseEvent) {
        // console.log(e);
    }
    // ====================================
    // @Watch('watch')
    public   handleSizeChange(val) {
       this.data.current = 1;
       this.data.Page = val;
       this.initData();
    }
    public handleCurrentChange(val) {
       this.data.current = val;
       this.initData();
    }
    public initData() {
    this.GET_DATA_ASYN_DATA({status: this.data.selectValue, pageNumber: this.data.current, pageSize: this.data.Page})
    .then((res) => {
            this.data.data = res;
        });
    }
   public changeSelect(val) {
        this.data.selectValue = val;
        this.initData();
    }
    public propMsg(msg: string) {
        this.data.msg = msg;
    }

    public created() {
        this.initData();
    }
   public activated() {
      //
    }
   public mounted() {
        //
    }
    // 初始化函数
   //  public init() {
   //      console.log('dddddddd22');
   // }
}
