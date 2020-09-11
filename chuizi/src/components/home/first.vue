<template>
  <div>
    <!-- 轮播图开始 -->
    <div class="banner">
      <div class="swiper-container homeSlideContainer">
        <div class="swiper-wrapper">
          <div class="swiper-slide"  @click="got">
            <img src="../../assets/img/shouye/banner/banner1.webp" alt />
          </div>
          <div class="swiper-slide"  @click="got">
            <img src="../../assets/img/shouye/banner/banner2.webp" alt />
          </div>
          <div class="swiper-slide"  @click="got">
            <img src="../../assets/img/shouye/banner/banner3.webp" alt />
          </div>
          <div class="swiper-slide"  @click="got">
            <img src="../../assets/img/shouye/banner/banner4.webp" alt />
          </div>
          <div class="swiper-slide"  @click="got">
            <img src="../../assets/img/shouye/banner/banner5.webp" alt />
          </div>
          <div class="swiper-slide" @click="got">
            <img src="../../assets/img/shouye/banner/banner6.webp" alt />
          </div>
        </div>
        <div class="swiper-pagination homeSlidePagination"></div>
      </div>
    </div>
    <!-- 轮播图结束 -->

    <div class="main">
      <ul>
        <li>
          <img src="../../assets/img/shouye/main1.webp" alt />
        </li>
        <li>
          <img src="../../assets/img/shouye/main2.webp" alt />
        </li>
        <li>
          <img src="../../assets/img/shouye/main3.webp" alt />
        </li>
        <li>
          <img src="../../assets/img/shouye/main4.webp" alt />
        </li>
      </ul>
    </div>

    <!-- 热门好物 -->
    <div class="hotlist">
      <div class="top">
        <h2>热门商品</h2>
        <div class="btnswitch">
          <div @click="isMove=false" :class="{isdisable:!isMove}">＜</div>
          <div @click="isMove=true" :class="{isdisable:isMove}">＞</div>
        </div>
      </div>
      <div class="bottom">
        <ul :class="{active:isMove}">
          <li>
            <div class="im"><img src="../../assets/img/shouye/hot1.webp" alt=""></div>
            <div class="title">诗梅迪 谷胱甘肽面膜</div>
            <div class="disc">美白肌肤 改善皱纹</div>
            <div class="priceInfo">￥88.00</div>
          </li>
          <li>
            <div class="im"><img src="../../assets/img/shouye/hot2.webp" alt=""></div>
            <div class="title">诗梅迪 谷胱甘肽面膜</div>
            <div class="disc">美白肌肤 改善皱纹</div>
            <div class="priceInfo">￥88.00</div>
          </li>
          <li>
            <div class="im"><img src="https://resource.smartisan.com/resource/9934374dda26c292555dd1ec0887e17b.png?x-oss-process=image/resize,w_216/format,webp" alt=""></div>
            <div class="title">诗梅迪 谷胱甘肽面膜</div>
            <div class="disc">美白肌肤 改善皱纹</div>
            <div class="priceInfo">￥88.00</div>
          </li>
          <li>
            <div class="im"><img src="https://resource.smartisan.com/resource/d159521e479b26f3c97a1e4f00a5aefd.jpg?x-oss-process=image/resize,w_216/format,webp" alt=""></div>
            <div class="title">诗梅迪 谷胱甘肽面膜</div>
            <div class="disc">美白肌肤 改善皱纹</div>
            <div class="priceInfo">￥88.00</div>
          </li>
          <li>
            <div class="im"><img src="https://resource.smartisan.com/resource/de1274f4c70fe3768417bb0454320089.png?x-oss-process=image/resize,w_216/format,webp" alt=""></div>
            <div class="title">诗梅迪 谷胱甘肽面膜</div>
            <div class="disc">美白肌肤 改善皱纹</div>
            <div class="priceInfo">￥88.00</div>
          </li>
          <li>
            <div class="im"><img src="https://resource.smartisan.com/resource/e991f946530a7cfab3d9670dd8b1371b.png?x-oss-process=image/resize,w_216/format,webp" alt=""></div>
            <div class="title">诗梅迪 谷胱甘肽面膜</div>
            <div class="disc">美白肌肤 改善皱纹</div>
            <div class="priceInfo">￥88.00</div>
          </li>
          <li>
            <div class="im"><img src="https://resource.smartisan.com/resource/a4c73e549097c7f5cf2c5e0d87e56d13.png?x-oss-process=image/resize,w_216/format,webp" alt=""></div>
            <div class="title">诗梅迪 谷胱甘肽面膜</div>
            <div class="disc">美白肌肤 改善皱纹</div>
            <div class="priceInfo">￥88.00</div>
          </li>
          <li>
            <div class="im"><img src="../../assets/img/shouye/hot1.webp" alt=""></div>
            <div class="title">诗梅迪 谷胱甘肽面膜</div>
            <div class="disc">美白肌肤 改善皱纹</div>
            <div class="priceInfo">￥88.00</div>
          </li>
        </ul>
      </div>
    </div>

    <div class="goods">
      <div class="top">
        <h2>坚果pro3及配件</h2>
      </div>
      <div class="content">
        <ul>
          <li @click="got">
            <img src="../../assets/img/shouye/goods1.webp" alt="">
          </li>
          <li @click="got">
            <div class="im"><img src="https://resource.smartisan.com/resource/f195e666e089d4e3775ce67d8e9523ce.png?x-oss-process=image/resize,w_216/format,webp" alt=""></div>
            <div class="title">坚果pro3</div>
            <div class="disc">高通骁龙855处理器</div>
            <div class="priceInfo">￥2399.00</div>
          </li>
          <li @click="got">
            <div class="im"><img src="https://resource.smartisan.com/resource/a4c73e549097c7f5cf2c5e0d87e56d13.png?x-oss-process=image/resize,w_216/format,webp" alt=""></div>
            <div class="title">坚果pro3</div>
            <div class="disc">高通骁龙855处理器</div>
            <div class="priceInfo">￥2399.00</div>
          </li>
          <li @click="got">
            <div class="im"><img src="https://resource.smartisan.com/resource/d159521e479b26f3c97a1e4f00a5aefd.jpg?x-oss-process=image/resize,w_216/format,webp" alt=""></div>
            <div class="title">蓝牙耳机</div>
            <div class="disc">高品质音质</div>
            <div class="priceInfo">￥188.00</div>
          </li>
          <li @click="got">
            <div class="im"><img src="https://resource.smartisan.com/resource/e097e844bf602685a44161fcda8eb837.jpg?x-oss-process=image/resize,w_216/format,webp" alt=""></div>
            <div class="title">曲面屏PC旅行箱</div>
            <div class="disc">高级淡雅</div>
            <div class="priceInfo">￥499.00</div>
          </li>
          <li @click="got">
            <div class="im"><img src="https://resource.smartisan.com/resource/de1274f4c70fe3768417bb0454320089.png?x-oss-process=image/resize,w_216/format,webp" alt=""></div>
            <div class="title">坚果充电宝</div>
            <div class="disc">支持快充</div>
            <div class="priceInfo">￥128.00</div>
          </li>
          <li @click="got">
            <div class="im"><img src="../../assets/img/shouye/hot3.webp" alt=""></div>
            <div class="title">诗梅迪 谷胱甘肽面膜</div>
            <div class="disc">美白肌肤 改善皱纹</div>
            <div class="priceInfo">￥88.00</div>
          </li>
        </ul>
      </div>
    </div>

    <div class="goods">
      <div class="top">
        <h2>服饰专场</h2>
      </div>
      <div class="content">
        <ul>
          <li @click="got">
            <img src="https://resource.smartisan.com/resource/36a6f4dff21dbfa7244703ea9e8c15c0.png?x-oss-process=image/resize,w_600/format,webp" alt="">
          </li>
          <li v-for="(item,index) in lists_cloth" :key="index" @click="got">
            <div class="im"><img :src="item.img" alt=""></div>
            <div class="title">{{item.title}}</div>
            <div class="disc">{{item.disc}}</div>
            <div class="priceInfo">￥{{item.price}}</div>
          </li>
        </ul>
      </div>
    </div>

    <div class="goods">
      <div class="top">
        <h2>官方精选配件</h2>
      </div>
      <div class="content">
        <ul>
          <li @click="got">
            <img src="https://resource.smartisan.com/resource/b08e8c40f7892304ea3f5af7d1cf30ea.png?x-oss-process=image/resize,w_600/format,webp" alt="">
          </li>
          <li v-for="(item,index) in lists_parts" :key="index" @click="got">
            <div class="im"><img :src="item.img" alt=""></div>
            <div class="title">{{item.title}}</div>
            <div class="disc">{{item.disc}}</div>
            <div class="priceInfo">￥{{item.price}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      isMove:false,
      lists_cloth:[
        {
          title:"落栗T恤",
          disc:"00%纯棉",
          price:98,
          img:"https://resource.smartisan.com/resource/1da272761215caa57ee8f5889644371a.png?x-oss-process=image/resize,w_216/format,webp"
        },
        {
          title:"落栗T恤",
          disc:"00%纯棉",
          price:198,
          img:"https://resource.smartisan.com/resource/1db1a8bfee3623fded41c9115b5a5335.jpg?x-oss-process=image/resize,w_216/format,webp"
        },
        {
          title:"落栗T恤",
          disc:"00%纯棉",
          price:48,
          img:"https://resource.smartisan.com/resource/e639c6b9bd7fbf3ebc9fa1cde17e01ec.jpg?x-oss-process=image/resize,w_216/format,webp"
        },
        {
          title:"落栗T恤",
          disc:"00%纯棉",
          price:2980,
          img:"https://resource.smartisan.com/resource/0142497872c65304c050607aae1c2ea6.jpg?x-oss-process=image/resize,w_216/format,webp"
        },
        {
          title:"落栗T恤",
          disc:"00%纯棉",
          price:126,
          img:"https://resource.smartisan.com/resource/5e15dd834df8848f64548a27560cdcf8.png?x-oss-process=image/resize,w_216/format,webp"
        },
        {
          title:"polo衫 经典款",
          disc:"100%纯棉",
          price:126,
          img:"https://resource.smartisan.com/resource/daa975651d6d700c0f886718c520ee19.jpg?x-oss-process=image/resize,w_216/format,webp"
        },
      ],
      lists_parts:[
         {
          title:"真无线TWS蓝牙耳机",
          disc:"智能配对",
          price:249,
          img:"https://resource.smartisan.com/resource/e991f946530a7cfab3d9670dd8b1371b.png?x-oss-process=image/resize,w_216/format,webp"
        },
        {
          title:"颈挂蓝牙耳机",
          disc:"智能配对",
          price:199,
          img:"https://resource.smartisan.com/resource/a5b6bf1f38fb88dceeb1e917bec288da.jpg?x-oss-process=image/resize,w_216/format,webp"
        },
        {
          title:"三脚架",
          disc:"两种模式",
          price:99,
          img:"https://resource.smartisan.com/resource/faf1f1eda4e47b9936b0000675f999eb.png?x-oss-process=image/resize,w_195/format,webp/quality,Q_95"
        },
        {
          title:"坚果快速充电宝",
          disc:"支持快充协议",
          price:129,
          img:"https://resource.smartisan.com/resource/2d106f8a751539abba6f446d3cda7818.jpg?x-oss-process=image/resize,w_216/format,webp"
        },
        {
          title:"数据线",
          disc:"支持快充协议",
          price:19,
          img:"https://resource.smartisan.com/resource/82aab62886740f165a3631ce6cffe895.jpg?x-oss-process=image/resize,w_216/format,webp"
        },
        {
          title:"半入耳式耳机",
          disc:"高品质音质",
          price:19,
          img:"https://resource.smartisan.com/resource/30ac0a1ab02999667f1362c501447e58.jpg?x-oss-process=image/resize,w_216/format,webp"
        },
      ]
    };
  },
  methods:{
    got(){
      this.$router.push("/details");
    }
  },
  mounted() {
    new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      pagination: {
        el: ".homeSlidePagination",
        clickable: true
      },
      autoplay: true
    });
    
  }
};
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 100%;
  box-shadow: 0 1px 10px #ccc;
  margin-top: 10px;
  border-radius: 10px;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;

  height: 480px;
  overflow: hidden;
}

.main {
  width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 10px;
  border: 1px solid #dbdbdb;
  overflow: hidden;
  ul {
    display: flex;
    li {
      flex: 1;
      box-sizing: border-box;
    }
    li:hover{
          box-shadow: inset 0 0 30px rgba(0,0,0,.06);
    }
  }
}

.hotlist{
  width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  .top{
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #fafafa;
    border-bottom: 1px solid #ccc;
    position: relative;
    h2{
      font-size: 18px;
      color: #666666;
      margin-left: 30px;
    }
    .btnswitch{
      height: 30px;
      width: 100px;
      // background-color: pink;
      position: absolute;
      top:20px;
      right: 0px;
      div{
        width: 24px;
        height: 24px;
        line-height: 24px;
        margin-right: 20px;
        border-radius: 50%;
        text-align: center;
        float: left;
        border: 1px solid #ccc;
        background-color: #fff;
        font-size:20px;
        color: #7d7d7d;
      }
      div.isdisable{
        color:#d5d5d5;
        border: 1px solid #d5d5d5;
      }
    }
  }
  .bottom{
    ul{
      display: flex;
      transition:transform 1.2s;
      li{
        flex: 0 0 25%;
        border-right: 1px solid #efefef;
        background-color: #fff;
        box-sizing: border-box;
        .im{
          width: 100%;
          img{
            height: 216px;
            width: 216px;
            margin: 40px;
          }
        }
        .title{
          font-size: 14px;
          font-weight: bold;
          color: #000;
          text-align: center;
        }
        .disc{
          text-align: center;
          color: #999999;
          margin-top: 10px;
        }
        .priceInfo{
          text-align: center;
          color: #d44d44;
          font-size: 18px;
          font-weight: bold;
          margin-top: 30px;
          margin-bottom: 30px;
        }
      }
      li:last-child{
          border-right: none;
      }
      li:hover{
          box-shadow: inset 0 0 30px rgba(0,0,0,.06);
        }
    }
    ul.active{
      transform: translate(-1200px,);
    }
  }
}

.goods{
  width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  .top{
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #fafafa;
    border-bottom: 1px solid #ccc;
    position: relative;
    h2{
      font-size: 18px;
      color: #666666;
      margin-left: 30px;
    }
  }
  .content{
    ul{
      display: flex;
      flex-flow: row wrap;
      li{
        flex: 0 0 25%;
        border-right: 1px solid #efefef;
        background-color: #fff;
        box-sizing: border-box;
        margin-top: 1px;
        .im{
          width: 100%;
          img{
            height: 216px;
            width: 216px;
            margin: 40px;
          }
        }
        .title{
          font-size: 14px;
          font-weight: bold;
          color: #000;
          text-align: center;
        }
        .disc{
          text-align: center;
          color: #999999;
          margin-top: 10px;
        }
        .priceInfo{
          text-align: center;
          color: #d44d44;
          font-size: 18px;
          font-weight: bold;
          margin-top: 30px;
          margin-bottom: 30px;
        }
      }
      li:last-child{
          border-right: none;
      }
      li:first-child{
        flex: 0 0 50%;
        margin-top: 0;
        img{
          height: 100%;
        }
      }
      li:hover{
          box-shadow: inset 0 0 30px rgba(0,0,0,.06);
      }
    }
  }
}
</style>