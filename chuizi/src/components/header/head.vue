<template>
  <div>
    <nav :class="{'is_fixed' : isFixed}">
      <div class="main">
        <ul>
            <li v-for="(item,i) in tabslist" @click="num=i" :class="{active:num==i}" :key="i">
                <span @click="add(i)">{{item}}</span>
            </li>
        </ul>
        <div class="cart">
          <span class="iconfont icon-gouwucheman" @click="cart_pt">
            
          </span>
          <span class="iconfont icon-geren5" @click="user_pt">
            <div class="userbox" v-if="usertab">
              <!-- <div class="user_null">
                登录
              </div> -->
              <div class="user_login">
                <div>
                  <img src="https://account.smartisan.com/files/00/1e/6e/5b/avatar.png?tmp=1" alt="">
                  <p @click="$router.push('/my/orderlist')">我的订单</p>
                  <p @click="$router.push('/my/user')">我的收藏</p>
                  <p @click="$router.push('/my/address')">我的地址</p>
                  <p @click="exit">退出</p>
                </div>
              </div>
            </div>
          </span>
        </div>
        <!-- 搜索框 -->
        <div class="search">
          <span class="iconfont icon-sousuo"></span>
          <input type="text" placeholder="请输入商品名称" @focus="searboxshow=true" >
          <div class="searbox" v-if="searboxshow" @mouseleave="searboxshow=false">
              <p @click="goto">蓝牙耳机</p>
              <p @click="goto">移动电源</p>
              <p @click="goto">魅族17</p>
              <p @click="goto">行李箱</p>
          </div>
        </div>
        
      </div>
    </nav>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  data(){
    return{
      isFixed: false,
      offsetTop:0,
      searboxshow:false,
      usertab:false,
      num:0,
      tabslist:["首页","手机","声学","配件","生活","电脑"],
      routerlist:["/home/first","/home/phone","/home/clothes","/home/parts","/home/television","/home/conputer"],
    }
  },
  methods:{
    add(index){
        this.$router.push(this.routerlist[index]);
    },
    initHeight () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        this.isFixed = scrollTop > this.offsetTop ? true : false;
    },
    god(){
      this.$router.push("/my/orderlist")
    },
    exit(){

    },
    goto(){
      this.$router.push({path:"/details",query:{id:0}})
    },
    user_pt(){
      if(this.$store.state.username==null){
        this.$router.push('/login')
      }else{
        this.$router.push('/my/orderlist')
      }
    },
    cart_pt(){
      if(this.$store.state.username==null){
            Toast("请登录");
            return;
        }
        this.$router.push('/cart')
    }
  },
  mounted(){
      window.addEventListener('scroll',this.initHeight);
      this.$nextTick( () => {
        this.offsetTop = document.querySelector('nav').offsetTop;
      })
  },
  destroyed(){
      // window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
nav{
  width: 100%;
  height: 76px;
  background-color:#fff;
  box-shadow: 0 1px 8px #ccc;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  .main{
    height: 76px;
    line-height: 76px;
    width: 1200px;
    margin: 0 auto;
    ul{
        li{
            float: left;
            margin-left: 50px;
            font-size: 14px;
            span{
                color: #4c4c4c;
                padding-bottom: 6px;;
                border-bottom: 1px solid transparent;
            }
        }
        li:first-child{
          margin-left: 0px;
        }
        li.active span{
                color: #000;
                font-weight: bold;
            }
    }
    .search{
      height: 30px;
      width: 300px;
      line-height: 30px;
      float: right;
      border: 1px solid #ccc;
      border-radius: 50px;
      margin-top: 24px;
      position: relative;
      
      span{
        display: block;
        width: 40px;
        height: 30px;
        font-size: 22px;
        margin-left: 10px;
        float: left;
      }
      input{
        margin-left: 10px;
        border: none;
      }
      .searbox{
        border: 1px solid #ccc;
        position: absolute;
        top: 30px;
        left: 40px;
        width: 220px;
        background-color: #fff;
        border-top: 1px solid #fff;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        overflow: hidden;
        p{
          display: block;
          text-align: center;
          border-bottom: 1px solid #ccc;
          height: 40px;
          line-height: 40px;
        }
        p:hover{
          background-color: #ccc;
          color: #fff;
        }
        p:last-child{
          border-bottom: none;
        }
      }
    }
    .cart{
      float: right;
      .icon-gouwucheman,.icon-geren5{
        font-size: 24px;
        margin-left: 30px;
        background-color: #fff;
        position: relative;
      }
      .user_login{
        height: 200px;
        width: 140px;
        background-color: #fff;
        img{
          border-radius: 50%;
          width:50px;
          margin: 0 auto;
          margin-top: 10px;
          margin-bottom: 26px;
        }
        p{
          z-index: 100;
          font-size: 14px;
          display: block;
          height: 30px;
          line-height: 30px;
          text-align: center;
          border-top: 1px dashed #ccc;
        }
        p:hover{
          background-color: #ccc;
        }
      }
    }
  }
}
.userbox{
  background-color: #fff;
  position: absolute;
  top: 30px;
  left: -10px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #ccc;
}
</style>