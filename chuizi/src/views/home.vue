<template>
  <div>
    <div class="content">
      <router-view></router-view>
    </div>
    <footerlist></footerlist>
  </div>
  
</template>


<script>
import footerlist from "../components/footer/footer"
export default {
  data(){
    return{
      
    }
  },
  components:{
    footerlist,
  },
  


    
}
</script>
<style lang="scss" scoped>


.content{
  width: 1200px;
  margin: 0 auto;
  margin-top: 90px;
}
.is_fixed{
  position: fixed;
  top: 0;
  z-index: 999;
  }
</style>