<template>
  <div>
    <div class="main">
      <div class="list">
        <div class="left">
          <span class="iconfont icon-collection-b" @click="onClickIcon" :class="{active:islike==false}"></span>
          <ul class="min"  v-for="(item,i) in lists[0].images" :key="i+123" :class="{show:show==i}">
            <li :class="{active:nub==1}" @click="nub=1"><img :src="item[0]" alt=""></li>
            <li :class="{active:nub==2}" @click="nub=2"><img :src="item[1]" alt=""></li>
            <li :class="{active:nub==3}" @click="nub=3"><img :src="item[2]" alt=""></li>
            <li :class="{active:nub==4}" @click="nub=4"><img :src="item[3]" alt=""></li>
          </ul>
          <ul class="max" v-for="(item,k) in lists[0].images" :key="k-123" :class="{show:show==k}">
            <li :class="{show:nub==1}"><img :src="item[0]" alt=""></li>
            <li :class="{show:nub==2}"><img :src="item[1]" alt=""></li>
            <li :class="{show:nub==3}"><img :src="item[2]" alt=""></li>
            <li :class="{show:nub==4}"><img :src="item[3]" alt=""></li>
          </ul>
        </div>
        <div class="right">
          <div class="title">
            <div class="name">{{lists[0].name}}</div>
            <div class="disc">{{lists[0].disc}}</div>
            <div class="price">{{lists[0].price}}</div>
          </div>
          
          <div class="model liststy">
            <span>型号选择</span>
            <ul>
              <li v-for="(item,i) in lists[0].model" :key="i" @click="selectmodel=i" :class="{isselect:selectmodel==i}">{{lists[0].model[i]}}</li>
            </ul>
          </div>
          <div class="color liststy">
            <span>颜色选择</span>
            <ul>
              <li v-for="(item,i) in lists[0].color" :key="i" @click="show=selectcolor=i" :class="{isselect:selectcolor==i}">{{lists[0].color[i]}}</li>
            </ul>
          </div>
          <div class="count">
            <span>数量选择</span>
            <div class="cal">
              <el-input-number v-model="lists[0].num" :min="1" :max="10" label="描述文字"></el-input-number>
            </div>
          </div>
          <div class="submit">
            <div class="buy" @click="buy(lists[0])" >立即购买</div>
            <div class="shopcar" @click="add(lists[0])">加入购物车</div>
          </div>
        </div>
      </div>
    </div>
  
    <div class="bottom">
      <div class="top">
        <span>产品信息</span>
        <img src="../assets/img/mei17prodre.c47a3d47.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import {createNamespacedHelpers} from "vuex";
const {mapState} = createNamespacedHelpers("cart");
import { Toast } from 'vant';

export default {
  data(){
    return{
      lists:[
        {
          id:1,
          name:"魅族 17",
          price:"2599",
          num:1,
          color:["十七度灰","梦幻独角兽"],
          model:["8+128GB","12+256GB"],
          disc:"Flyme8周年 6.23-6.27 每日前100名限量赠魅族HIFI解码耳放】5G旗舰 | 高通骁龙 865 + UFS 3.1 + LPDDR5 | 6400W 全场景 AR 专业影像系统 | 27W 无线超充 + 4500mAh 超大电池",
          image:"https://fms.res.meizu.com/dms/2020/06/29/4a4e236f-0b08-4de1-a017-a239c34ca296.png",
          images:[
              [
                "https://openfile.meizu.com/group1/M00/08/0B/Cgbj0V7gsjWAfxBJAAlp3c1WdI4793.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/D9/Cgbj0V6zwMWANhNKAAVfQwmOan4751.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C3/Cgbj0F6zwMWAbCieAAZp0FbICJA179.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/D9/Cgbj0V6zwMWASoKjAAKhvZAJDTU118.png680x680.jpg",
                ],
            [
                "https://openfile.meizu.com/group1/M00/08/0B/Cgbj0V7gsjWAPF5rAAsOWBHfhMc030.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/F3/Cgbj0F7eH2SAdKD5AAHWtl1T9Ws790.jpg680x680.jpg",
                "https://openfile.meizu.com/group1/M00/08/09/Cgbj0V7gLWKAKFcnAAFyldULfZ0173.jpg680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C4/Cgbj0F6zwM6AdEXLAALMpD5v_iE443.png680x680.jpg",
                ],
            ],
        },
      ],
      nub:1,
      show:0,
      selectmodel:0,
      selectcolor:0,
      id:"",
      islike:true,
    }
  },
  methods:{
    // 收藏功能
    onClickIcon() {
        if(this.$store.state.username==null){
            Toast("请登录");
            return;
        }
        if(this.islike){
            Toast('收藏成功');
            this.islike=false;
            this.$store.commit("my/add",this.lists[0]);
        }else{
            Toast('取消收藏')
            this.islike=true;
            this.$store.commit("my/del");
        }
    },
    // 加入购物车
    add(item){
        if(this.$store.state.username==null){
            Toast("请登录");
            return;
        }
        Toast("成功加入购物车");
        item.selectmodel = item.model[this.selectmodel];
        item.selectcolor = item.color[this.selectcolor];
        this.$store.commit("cart/add",item);
        console.log(item);
        
    },
    // 立即购买
    buy(item){
        if(this.$store.state.username==null){
            Toast("请登录");
            return;
        }
        // console.log(this.selectmodel,this.selectcolor)
        console.log((item.color[0]))
        item.selectmodel = item.model[this.selectmodel];
        item.selectcolor = item.color[this.selectcolor];
        // console.log
        this.$store.commit("cart/buy",item);
        this.$router.push("/order");
        // let num = this.selectmodel
        
    },
  },
  computed:{
      ...mapState({
          num:state=>state.num
      })
  },
  created(){ 
    let goods = this.$route.query.goods
    if(goods){
      this.lists = [goods];
    }
    if(this.lists[0].color==1){
      this.selectcolor = this.lists[0].color[0]
    }
    if(this.lists[0].model==1){
      this.selectmodel = this.lists[0].model[0]
    }
    this.$store.commit("my/addone",this.lists[this.id]);
  }
}
</script>

<style lang="scss" scoped>
.main{
  width: 1200px;
  margin: 20px auto;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #dcdcdc;
  margin-top: 90px;
  .list{
    width: 100%;;
    display: flex;
    .left{
      width: 600px;
      flex: 1;
      position: relative;
      .iconfont{
        font-size: 30px;
        color: #ccc;
        position: absolute;
        bottom: 32px;
        right: 10px;
      }
      .iconfont.active{
        color: #e25d5d;
      }
      .min{
        margin-top: 20px;
        float: left;
        height: 400px;
        padding: 60px;
        padding-right: 0;
        li{
          height: 100px;
          width: 100px;
          img{
            width: 60px;
            height: 60px;
            border: 1px solid #cccccc;
            border-radius: 5px;
            box-sizing: border-box;
          }
        }
        li.active img{
          border: 3px solid #cccccc;
        }
      }
      .max{
        float: left;
        li{
          display: none;
          img{
            margin: 60px 0;
            width: 400px;
            height: 400px;
          }
        }
        li.show{
          display: block;
        }
      }
    }
    .right{
      flex: 1;
      .title{
        margin: 0 50px;
        height: 150px;
        width: 480px;
        font-weight: bold;
        font-size: 26px;
        border-bottom: 1px solid #ebebeb;
        .name{
          font-size: 26px;
          margin-top: 20px;
        }
        .price{
          font-size: 22px;
          color: red;
          margin-top: 10px;
        }
        .disc{
          margin-top: 10px;
          font-size: 12px;
          font-weight: normal;
          color: red;
          padding-right: 20px;
        }
      }
      .liststy{
        margin: 0 50px;
        height: 100px;
        line-height: 100px;
        width: 480px;
        font-size: 16px;
        border-bottom: 1px solid #ebebeb;
        position: relative;
        span{
          float: left;
        }
        ul{
          top: 50%;
          // margin-top: -50px;
          float: left;
          margin-left: 20px;
          position:absolute;
          left: 60px;
          top: 40%;
            // margin-top: -50px;
          li{
            float: left;
            height: 40px;
            line-height: 40px;
            text-align: center;
            width: 90px;
            border: 1px solid #e5e5e5;
            border-radius: 10px;
            margin-left: 10px;
          }
          li.isselect{
            border: 1px solid #6a8fe6;;
          }
        }
      }
      .count{
        margin: 0 50px;
        height: 60px;
        width: 480px;
        font-size: 16px;
        border-bottom: 1px solid #ebebeb;
        padding-top: 16px;
        box-sizing:border-box;
        span{
          float: left;
        }
        .cal{
          float: left;
          margin-left: 30px;
          margin-top: -6px;
          span{
            float: left;
            margin-right: 20px;
          }
          .count_btn{
            width: 26px;
            height: 26px;
            border: 1px solid #ccc;
            border-radius: 50%;
            text-align: center;
            line-height: 26px;
          }
        }
      }
      .submit{
        padding-left: 50px;
        padding-top: 30px;
        font-weight: bold;
        font-size: 16px;
        .buy{
          width: 140px;
          height: 40px;
          background-color: #f8f8f8;
          border: 1px solid #dedede;
          float: left;
          text-align: center;
          line-height: 40px;
          border-radius: 10px;
          color: #646464;
        }
        .buy:hover{
            background-color: #e7e7e7;
          }
        .shopcar{
          width: 140px;
          height: 40px;
          background-color:#668fe1;
          float: left;
          margin-left: 20px;
          border: 1px solid #5a7ac0;
          text-align: center;
          line-height: 40px;
          border-radius: 10px;
          color: #fff;
        }
        .shopcar:hover{
            background-color: #537aca;
          }
      }
    }
  }
}
.bottom{
  margin: 0 auto;
  margin-top: 20px;
  width:1200px;
  // height: 500px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #dcdcdc;
  .top{
    // height: 60px;
    width: 100%;
    line-height: 60px;
    span{
      font-size: 16px;
      font-weight: bold;
      margin-left: 20px;
    }
    img{
      width: 100%;
      height: auto;
    }
    background-color: #f3f3f3;
  }
}
.show{
  display: none;
}

</style>