<template>
    <div>
        <van-nav-bar
            :title="$route.name"
            left-text="返回"
            left-arrow
            @click-left="$router.go(-1)"
        />
        <van-address-edit
            :area-list="areaList"
            show-search-result
            :search-result="searchResult"
            :address-info="addressInfo"
            :area-columns-placeholder="['请选择', '请选择', '请选择']"
            @save="onSave"
        />
    </div>
</template>

<script>
    import areaList from "./erea.js";
    export default {
        data() {
            return {
            areaList,
            searchResult: [],
            addressInfo:{}
            };
        },
        methods: {
            onSave({name,tel,province,city,county,areaCode,addressDetail}) {
                
                let id = this.$route.query.id;
                this.$store.commit("address/edit",{
                    id,
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
            // 获取路由id
            let id = this.$route.query.id;
            // 找到相同id对象数据
            this.addressInfo = this.$store.state.address.lists.find(item=>item.id == id); 

            this.$store.state.vanTabbar = false;
        }
    };
</script>

<style lang="scss" scoped>

</style>