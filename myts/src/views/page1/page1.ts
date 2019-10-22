import {Component, Vue, Watch} from 'vue-property-decorator';
import {PageData, IndexData} from '@/types';
import { HeadComponents , Test, contentPage} from '@/components';
@Component({
    components: {
        HeadComponents,
        contentPage,
        Test,
    },
})
export default class Page1 extends Vue {
    public data: PageData = {
        id: 1,
        name: '黄利蓉',
        sex: '女',
        date: '2019-9-27',
        student: [
            {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
        }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
        }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
        }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
        }],
    };
}

