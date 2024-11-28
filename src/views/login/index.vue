<template>
  <div class="login">
    <van-nav-bar title="会员登录" left-arrow @click-left="$router.go(-1)" />

    <div class="container">
      <div class="title">
        <h3>手机号登录</h3>
        <p>未注册的手机号登录后将自动注册</p>
      </div>

      <div class="form">
        <div class="form-item">
          <input class="inp" v-model="mobile" maxlength="11" placeholder="请输入手机号码" type="text">
        </div>
        <div class="form-item">
          <input class="inp" v-model="code" maxlength="5" placeholder="请输入图形验证码" type="text">
          <img v-if="picurl" :src="picurl" @click="getpiccode" alt="">
        </div>
        <div class="form-item">
          <input class="inp" placeholder="请输入短信验证码" type="text" v-model="msgcode">
          <button @click="btncode">{{ second === Totalsecond ? '获取验证码' : second + '秒后重新发送' }}</button>
        </div>
      </div>

      <div class="login-btn" @click="login">登录</div>
    </div>
  </div>
</template>

<script>
import {getPicCode,getmsgcode,codelogin} from '@/api/API-login'
import { Toast } from 'vant'
export default {
  name: 'LoGin',
  data(){
    return {
      picurl:'',
      pickey:'',
      Totalsecond:5,
      second:5,
      timer:null,  //定时器ID
      mobile:'',
      code:'',
      msgcode:''
    }
  },
  methods:{
    async getpiccode(){
      const { data : {base64,key}} = await getPicCode()
      this.picurl = base64,
      this.pickey = key
    },
    //获取短信验证码
    async btncode(){
      if (!this.validFn()) {
        return
      }
      Toast('验证码已发送！')
      if(!this.timer && this.second === this.Totalsecond){
        await getmsgcode(this.picurl,this.pickey,this.mobile)       
        this.timer = setInterval(() => {
          this.second--
          if(this.second < 0){
            clearInterval(this.timer)
            this.timer = null,
            this.second = this.Totalsecond
          }
        }, 1000)
      }
    },
    //手机号和验证码输入判断
    validFn () {
    if (!/^1[3-9]\d{9}$/.test(this.mobile)) {
      this.$toast('请输入正确的手机号')
      return false
    }
    if (!/^\w{4}$/.test(this.code)) {
      this.$toast('请输入正确的图形验证码')
      return false
    }
      return true
    },
    //登录
    async login(){
      if (!this.validFn()) {
      return
    }
    if (!/^\d{6}$/.test(this.msgcode)) {
      this.$toast('请输入正确的手机验证码')
      return
    }
      const res = await codelogin(this.mobile,this.msgcode)
      this.$store.commit('user/setuserInfo',res.data)
      // console.log(res)
      const Url = this.$route.query.backUrl || '/'
      this.$router.replace(Url)
      this.$toast('登陆成功！')
    }
  },
  async created(){
    this.getpiccode()
  },
  //离开页面时要关闭定时器
  destroyed(){
    clearInterval(this.timer)
  },
}
</script>

<style lang="less" scoped>
.container {
  padding: 49px 29px;

  .title {
    margin-bottom: 20px;
    h3 {
      font-size: 26px;
      font-weight: normal;
    }
    p {
      line-height: 40px;
      font-size: 14px;
      color: #b8b8b8;
    }
  }

  .form-item {
    border-bottom: 1px solid #f3f1f2;
    padding: 8px;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    .inp {
      display: block;
      border: none;
      outline: none;
      height: 32px;
      font-size: 14px;
      flex: 1;
    }
    img {
      width: 94px;
      height: 31px;
    }
    button {
      height: 31px;
      border: none;
      font-size: 13px;
      color: #cea26a;
      background-color: transparent;
      padding-right: 9px;
    }
  }

  .login-btn {
    width: 100%;
    height: 42px;
    margin-top: 39px;
    background: linear-gradient(90deg,#ecb53c,#ff9211);
    color: #fff;
    border-radius: 39px;
    box-shadow: 0 10px 20px 0 rgba(0,0,0,.1);
    letter-spacing: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
