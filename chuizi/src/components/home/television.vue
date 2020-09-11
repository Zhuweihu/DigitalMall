<template>
  <div>
    <div class="main">
      <div class="list">
        <ul>
          <li v-for="(item,index) in lists" :key="index" @click="got(index)">
              <img :src="item.image" alt="">
              <div class="title">{{item.name}}</div>
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
      lists:[]
    }
  },
  methods:{
    got(index){
      this.$router.push({path:"/details",query:{goods:this.lists[index]}});
    }
  },
  created(){
    this.$axios.get("lifeList").then(res=>{
        this.lists = res.data.lifeList
      })
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