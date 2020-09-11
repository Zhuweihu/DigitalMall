<template>
  <div>
    <div class="main">
      <div class="list">
        <ul>
          <li v-for="(item,index) in lists" :key="index" @click="got(index)">
              <img :src="item.img" alt="">
              <div class="title">{{item.title}}</div>
              <div class="disc">{{item.disc}}</div>
              <div class="priceInfo">{{item.price}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      lists:[
        {
          id:1,
          title:"飞利浦（PHILIPS）电视",
          disc:"58英寸 4K HDR全面屏 独立音腔 AI手机语音 2级能效 智能液晶网络电视机58PUF7294T3",
          price:2989,
          img:require("../../assets/img/tv/flp.webp"),
        },
        {
          id:2,
          title:"海信（Hisense）H65E3A",
          disc:"65英寸 4K超清 HDR 金属背板 人工智能 教育 液晶电视机 丰富影视资源",
          price:2299,
          img:require("../../assets/img/tv/hai.webp"),
        },
        {
          id:3,
          title:"小米全面屏电视",
          disc:"5英寸 E55X 4K超高清 HDR 内置小爱 2GB+8GB 教育电视 AI人工智能网络平板电视 L55M5-EX",
          price:1999,
          img:require("../../assets/img/tv/mi.webp"),
        },
        {
          id:4,
          title:"索尼（SONY）KD-55U8G",
          disc:"55英寸 4K超高清 HDR 无线投屏液晶平板电视 智能家居(X8500G系列琥珀金)",
          price:4399,
          img:require("../../assets/img/tv/suo.webp"),
        },
        {
          id:5,
          title:"TCL 55V6",
          disc:"55英寸液晶电视机 4K超高清护眼 超薄 全面屏 人工智能 智慧屏 玩转语音操控 教育电视",
          price:4499,
          img:require("../../assets/img/tv/tcl.webp"),
        },
        {
          id:6,
          title:"TCL 55V6",
          disc:"55英寸液晶电视机 4K超高清护眼 超薄 全面屏 人工智能 智慧屏 玩转语音操控 教育电视",
          price:4499,
          img:require("../../assets/img/tv/tcl.webp"),
        },
        {
          id:7,
          title:"小米全面屏电视",
          disc:"5英寸 E55X 4K超高清 HDR 内置小爱 2GB+8GB 教育电视 AI人工智能网络平板电视 L55M5-EX",
          price:1999,
          img:require("../../assets/img/tv/mi.webp"),
        },
        {
          id:8,
          title:"飞利浦（PHILIPS）电视",
          disc:"58英寸 4K HDR全面屏 独立音腔 AI手机语音 2级能效 智能液晶网络电视机58PUF7294T3",
          price:2989,
          img:require("../../assets/img/tv/flp.webp"),
        },
        {
          id:9,
          title:"海信（Hisense）H65E3A",
          disc:"65英寸 4K超清 HDR 金属背板 人工智能 教育 液晶电视机 丰富影视资源",
          price:2299,
          img:require("../../assets/img/tv/hai.webp"),
        },
        {
          id:11,
          title:"索尼（SONY）KD-55U8G",
          disc:"55英寸 4K超高清 HDR 无线投屏液晶平板电视 智能家居(X8500G系列琥珀金)",
          price:4399,
          img:require("../../assets/img/tv/suo.webp"),
        },
        {
          id:12,
          title:"TCL 55V6",
          disc:"55英寸液晶电视机 4K超高清护眼 超薄 全面屏 人工智能 智慧屏 玩转语音操控 教育电视",
          price:4499,
          img:require("../../assets/img/tv/tcl.webp"),
        },
        {
          id:13,
          title:"TCL 55V6",
          disc:"55英寸液晶电视机 4K超高清护眼 超薄 全面屏 人工智能 智慧屏 玩转语音操控 教育电视",
          price:4499,
          img:require("../../assets/img/tv/tcl.webp"),
        },
        {
          id:14,
          title:"小米全面屏电视",
          disc:"5英寸 E55X 4K超高清 HDR 内置小爱 2GB+8GB 教育电视 AI人工智能网络平板电视 L55M5-EX",
          price:1999,
          img:require("../../assets/img/tv/mi.webp"),
        },
      ]
    }
  },
  methods:{
    got(index){
      let num = index;
      this.$router.push({path:"/details",query:{id:num}});
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 10px;
  border: 1px solid #dbdbdb;
  background-color: #fff;
  .list{
    ul{
      display: flex;
      flex-flow: row wrap;
      li{
        flex: 0 0 20%;
        border-right: 1px solid #efefef;
        border-bottom: 1px solid #efefef;
        box-sizing: border-box;
        
          width: 100%;
          img{
            height: 204px;
            width: 204px;
            margin: 20px auto;
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
          margin: 0 auto;
          margin-top: 10px;
          display: block; 
          white-space: nowrap;
          width: 180px; 
          overflow: hidden; 
          text-overflow:ellipsis;
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
      li:hover{
          box-shadow: inset 0 0 30px rgba(0,0,0,.06);
      }
    }
  }
}
</style>