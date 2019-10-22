import {Test} from '@/components';
import {Component, Vue } from 'vue-property-decorator';
import {LoginData} from '@/types/views/login.interface';
@Component({ // 引入子组件
    components: {
        Test,
    },
})
export default class About extends Vue {
     public data: LoginData = {
        pageName: '11',
         pageSex: '女',
    };
}


