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
                v-model="password"
                type="password"
                name="密码"
                label="密码"
                placeholder="请输入密码"
                :rules="[{ required: true, message: '请输入密码' }]"
              />
              <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">登录</van-button>
              </div>
            </van-form>
            <div class="register" @click="$router.push('/register')">
              注册账号
            </div>
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
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit(params) {
      let _this = this;
      // let path = "path" in _this.$route.query ? _this.$route.query.path:'/my';

      this.$axios.get("login", { params }).then(res => {
        console.log(res);
        if (res.data == "200") {
          Toast({
            message: "登录成功",
            onOpened() {
              _this.$store.state.username = _this.username;
              _this.$router.push("/my/orderlist");
            }
          });
        } else {
          Toast("登录失败");
        }
      });
    }
  }
};
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
        .btn {
          width: 300px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          margin: 0 auto;
          background-color: #b8c9ec;
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
.register{
  float: right;
  margin-right: 20px;
}
</style>