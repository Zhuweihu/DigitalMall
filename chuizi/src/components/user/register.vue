<template>
  <div>
    <div class="main">
      <div class="login">
        <div class="top">
          <img src="../../assets/img/niu.jpg" alt="">
        </div>
        <div class="bottom">
          <div class="content">
            <van-form @submit="onSubmit">
            <van-field
                v-model="username"
                name="用户名"
                label="用户名"
                placeholder="请输入用户名"
                :rules="[{ required: true, message: '请输入用户名' }]"
            />
            <van-field
                v-model="password1"
                type="password"
                name="密码"
                label="密码"
                placeholder="请输入密码"
                :rules="[{ required: true, message: '请输入密码' }]"
            />
            <van-field
                v-model="password2"
                type="password"
                name="密码"
                label="密码"
                placeholder="请再次输入密码"
                :rules="[{ required: true, message: '请再次输入密码' }]"
            />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">
                注册
                </van-button>
            </div>
        </van-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { Toast } from 'vant';

export default {
  data() {
      return {
        username: '',
        password1: '',
        password2: '',
      }
    },
    methods: {
      onSubmit(params) {
          let _this = this;
          this.$axios.get("register",{params}).then((res)=>{
              console.log(res);
              if(res.data == "200"){
                  Toast({
                      message:"注册成功",
                      onOpened(){
                          _this.$router.push("/login");
                      }
                  });
              }else{
                  Toast("注册失败");
              }
          })
      },
    }
  }
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  .login {
    margin: 0 auto;
    margin-top: 200px;
    height: 500px;
    width: 400px;
    background-color: #f6f6f6;
    overflow: hidden;
    border-radius: 10px;
    border: 1px solid #dbdbdb;
    .top {
      width: 100%;
      height: 200px;
      img{
        width: 50%;
        margin: 0 auto;
        margin-top: 10px;
      }
    }
    .bottom {
      width: 100%;
      height: 350px;
      .content {
        width: 370px;
        margin: 20px auto;
        .btn{
          width: 300px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          margin: 0 auto;
          background-color: #5079d9;
          color: #fff;
          border-radius: 5px;
          font-size: 16px;
        }
      }
    }
  }
}
.van-button{
  background-color: #5079d9;
  border-radius: 10px;
}
</style>