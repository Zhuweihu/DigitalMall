<template>
  <div>
    <div class="main">
      <div class="top">我的收藏</div>
      <div class="bottom">
        <div class="likelists" v-for="(item,index) in lists" :key="index">
        <!-- 商品卡片 -->
            <div @click="got(index)">
                <van-card
                    :price="item.price"
                    :desc="item.disc"
                    :title="item.name"
                    :thumb="item.image"
                    />
            </div>
            <span class="iconfont icon-delete" @click="del(index)"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
        lists:[],
    }
  },
  methods:{
    del(index){
        this.lists.splice(index,1);
    },
    got(index){
      this.$router.push({path:"/details",query:{goods:this.lists[index]}});
    },
  },
  created(){
        this.lists = this.$store.state.my.lists;
        console.log(this.lists)
    },
  
}
</script>

<style lang="scss" scoped>
.main{
  height: 472px;
  width: 976px;
  background-color: #f8f8f8;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #dbdbdb;
  .top{
        width: 100%;
        height: 60px;
        line-height: 60px;
        font-size: 16px;
        font-weight: bold;
        padding-left: 30px;
        background-color: #fbfbfb;
    }
    .bottom{
      height: 432px;
      width: 967px;
      overflow-x: auto;
        .likelists{
            height: 120px;
            border-bottom: 1px solid #ebebeb;
            position: relative;
            padding-top: 20px;
            .icon-delete{
                position: absolute;
                top: 20px;
                right: 30px;
            }
        }
    }
}
.van-card{
  width: 400px;
}
</style>