<template>
  <div>
    <div class="goods">
      <div class="top">
        <h2>相关推荐</h2>
      </div>
      <div class="content">
        <ul>
          <li v-for="(item,index) in lists" :key="index" @click="got">
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
export default {
  data(){
    return{
      lists:[
        {
          title:"坚果快速充电器",
          disc:"全面兼容18w快速充电",
          price:98,
          img:"https://resource.smartisan.com/resource/a668d1a5f41b04ece82d76ded1e94d3a.jpg?x-oss-process=image/resize,w_216/format,webp"
        },
        {
          title:"蓝牙耳机",
          disc:"圈铁一体代表",
          price:198,
          img:"https://resource.smartisan.com/resource/d159521e479b26f3c97a1e4f00a5aefd.jpg?x-oss-process=image/resize,w_216/format,webp"
        },
        {
          title:"手机保护壳",
          disc:"圈铁一体代表",
          price:48,
          img:"https://resource.smartisan.com/resource/db1f9c8eadd0164a34e73465a34776a3.jpg?x-oss-process=image/resize,w_216/format,webp"
        },
        {
          title:"坚果Pro3",
          disc:"骁龙855",
          price:2980,
          img:"https://resource.smartisan.com/resource/f195e666e089d4e3775ce67d8e9523ce.png?x-oss-process=image/resize,w_216/format,webp"
        },
        {
          title:"高保湿精华软膜",
          disc:"安瓶精华液",
          price:126,
          img:"https://resource.smartisan.com/resource/2575eac082b612da1d25600d6ae46337.jpg?x-oss-process=image/resize,w_216/format,webp"
        },
        {
          title:"便携式手持风扇",
          disc:"安瓶精华液",
          price:126,
          img:"https://resource.smartisan.com/resource/13df309b8080aa1092d1afa10b6b4bb5.jpg?x-oss-process=image/resize,w_216/format,webp"
        },
        {
          title:"儿童牙刷",
          disc:"声波洁牙",
          price:126,
          img:"https://resource.smartisan.com/resource/fa6e26d738d64a3ecfdae3286e28aeb8.jpg?x-oss-process=image/resize,w_216/format,webp"
        },
        {
          title:"真无线TWS蓝牙耳机",
          disc:"智能配对",
          price:209,
          img:"https://resource.smartisan.com/resource/f0e1c32ae742c93ad1300d27a49d3d25.jpg?x-oss-process=image/resize,w_216/format,webp"
        },
      ]
    }
  },
  methods:{
    got(){
      this.$router.push({path:"/details",query:{id:0}});
    }
  }
}
</script>
<style lang="scss" scoped>
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
      li:hover{
          box-shadow: inset 0 0 30px rgba(0,0,0,.06);
      }
    }
  }
}
</style>