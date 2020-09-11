<template>
  <div>
    <div class="main">
      <div class="user fl">
        <div class="img">
          <img src="https://account.smartisan.com/files/00/1e/6e/5b/avatar.png?tmp=1" alt="">
        </div>
        <div class="phone">{{this.$store.state.username}}</div>
        <ul>
            <li v-for="(item,i) in tabslist" @click="num=i,add(i)" :class="{active:num==i}" :key="i">
                <span>{{item}}</span>
            </li>
        </ul>
      </div>
      <div class="fl ml"><router-view></router-view></div>
    </div>
    <recommend></recommend>
  </div>
</template>


<script>
import recommend from "../components/recommend/recommend"
export default {
  data(){
    return{
      num:0,
      tabslist:["我的订单","收获地址","我的收藏","售后服务"],
      routerlist:["/my/orderlist","/my/address","/my/user","/my/serve"]
    }
  },
  components:{
    recommend,
  },
  methods:{
    add(index){
        this.$router.push(this.routerlist[index]);
    },
  },

}
</script>
<style lang="scss" scoped>
.main{
  width: 1200px;
  margin: 0 auto;
  margin-top: 90px;
  min-height: 500px;
  margin-bottom: 30px;
  .user{
    height: 470px;
    width: 200px;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    background-color: #fff;
    overflow: hidden;
    .img{
      width: 140px;
      height: 140px;
      margin: 10px auto;
    }
    .phone{
      text-align: center;
      font-size: 16px;
    }
    ul{
      margin-top: 40px;
      li{
        height: 60px;
        width: 100%;
        text-align: center;
        line-height: 60px;
        font-size: 16px;
        border: 1px solid #ebebeb;
      }
      li:hover{
        background-color: #98afee;
        color: #fff;
      }
      li.active{
        background-color: #98afee;
        color: #fff;
      }
    }
  }
}
.fl{
  float: left;
}
.ml{
  margin-left: 20px;
  margin-bottom: 20px;
}
</style>