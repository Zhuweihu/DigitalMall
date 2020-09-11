<template>
    <div>
        <el-cascader
        v-model="dataModel"
        placeholder="请选择地区"
	:props="{ expandTrigger: 'hover' }"
        :options="areaData"
      >
  </el-cascader>
    </div>
</template>

<script>
    import areaList from "./erea.js";
    export default {
        data() {
            return {
            aareaData:[],
            searchResult: [],
            };
        },
        components:{
             
        },
        methods: {
            onSave({name,tel,province,city,county,areaCode,addressDetail}) {
                this.$store.commit("address/add",{
                    name,
                    tel,
                    address:province+city+county+addressDetail,
                    province,
                    city,
                    county,
                    areaCode,
                    addressDetail
                });
                this.$router.go(-1);
            },
        },
        created(){
            this.areaData = areaList
            for (var i = 0; i < this.areaData.length; i++) {
                if (this.areaData[i].children.length == 0) {
                delete this.areaData[i].children //解决因为省级区域没有下级市的BUG
                }
            }
        },
    };
</script>

<style lang="scss" scoped>
.main{

}
</style>