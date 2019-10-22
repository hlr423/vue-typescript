<template>
    <div style="border: 1px solid red;width: 50%;margin-left: 25%">
        <p>我是一个子组件test</p>
        <p>子组件：{{myName}}</p>
<!--        <el-input  placeholder="请输入内容" style="width: 20%"></el-input>-->
        <div>
            <el-button type="primary" @click="propMsg">点击给父组件发送数据</el-button>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Emit} from 'vue-property-decorator'
    @Component
    export  default class childText extends Vue{
        msg:string = '子组件的msg数据';
    @Prop({
        type: String, // 父组件传递给子组件的数据类型
        required: false, // 是否必填
        default: ' ', // 默认值， 如果传入的是 Object，则要 default: ()=>({}) 参数为函数
        // validator: (value) => {    // 验证函数，判断myName是否满足条件。否则报错哦* * * *
        //     console.log(value);
        //     return [
        //         '我是父组件哦',
        //         'Settled'
        //     ].indexOf(value) !== -1
        // }
    }) myName!: string;  //--（最后跟的是变量名:类型，可以写多个，有几个写几个）
   // @Prop(String) propA:string;

        // bindSend 为父组件引用子组件上 绑定的事件名称
        @Emit('bindSend') send(msg: string){
            console.log(msg)
        }; // send 处理给父组件传值的逻辑

        propMsg(){
            this.msg = '子组件的msg数据,被传给了父组件';
            this.send(this.msg)
        }
    }
</script>

<style scoped>

</style>
