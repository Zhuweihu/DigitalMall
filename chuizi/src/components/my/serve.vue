<template>
  <div>
    <div class="main">
      <div class="top">售后服务</div>
      <div class="bottom">
        <img src="../../assets/img/server_null.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
    }
  },

}
</script>

<style lang="scss" scoped>
.main{
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
        background-color: #fafafa;
    }
    .bottom{
        height: 410px;
        width: 100%;
        background-color: #fff;
       img{
           margin: 0 auto;
           width: 500px;
       }
    }
}
</style>