<template>
  <div id="app">
    <headerbox></headerbox>
    <router-view></router-view>
    
  </div>
</template>

<script>
import headerbox from "./components/header/head"
export default {
  components:{
    headerbox,
  }
}
</script>

<style lang="scss">
#app {
  header{
  height: 45px;
  width: 100%;
  background-color: #2c2d2f;
}

}

</style>
