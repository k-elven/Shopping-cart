<template>
    <div class="count-box">
        <button class="minus" @click="numjia">+</button>
        <input type="text" class="inp" :value="value" @change="inputnum">
        <button class="add" @click="numjian">-</button>
    </div>
</template>

<script>
import { Toast } from 'vant';


export default {
    props:{
        value:{
            type:Number,
            default:1
        }
    },
    methods:{
        numjia(){
            this.$emit('input',this.value+1)
        },
        numjian(){
            if(this.value <= 1){
                Toast('不能再减少了！！！')
                return
            }
            this.$emit('input',this.value-1)
        },
        inputnum(e){
            const num = +e.target.value
            if(isNaN(num) || num < 1){
                e.target.value = this.value
                return
            }
            this.$emit('input',num)
        }
    }
}
</script>

<style lang="less" scoped>
.count-box {
    width: 100px;
    display: flex;
    .add, .minus{
        width: 30px;
        height: 30px;
        outline: none;
        border: none;
        background-color: #efefef;
    }
    .inp{
        width: 40px;
        height: 30px;
        outline: none;
        border:none;
        margin: 0 5px;
        background-color: #efefef;
    }
}
</style>