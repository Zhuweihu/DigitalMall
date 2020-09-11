<template>
    <div>
        
        <div class="head">
            <van-row>
                <van-col span="4" @click="$router.go(-1)"><span class="iconfont icon-fanhui"></span></van-col>
                <van-col span="16">地址</van-col>
                <van-col span="6"></van-col>
            </van-row>
        </div>

        <div class="main">
            <ul>
                <li v-for="(item,index) in list" :key="index" >
                    <div :class="{clicked:item.isDefault}"></div>
                    <div @click="onSelect(index)">
                        <div class="top">
                        <span class="name">{{item.name}}</span>
                        <span class="tel">{{item.tel}}</span>
                    </div>
                    <div class="center">
                        {{item.address}}
                    </div>
                    </div>
                    <div class="bottom" >
                        <span @click="onEdit(item)">编辑</span>
                    </div>
                    <div class="line"></div>
                </li>
                
            </ul>
        </div>
        
        <div class="footer">
            <span @click="onAdd">新增收货地址</span>
        </div>

        <!-- <van-address-list
            v-model="chosenAddressId"
            :list="list"
            default-tag-text="默认"
            @add="onAdd"
            @edit="onEdit"
        /> -->
    </div>
</template>

<script>
    import { Toast } from 'vant';
    export default {
        data() {
            return {
                chosenAddressId: '1',
                list: [],
            };
        },
        methods: {
            onAdd() {
                this.$router.push("/addressAdd")
            },
            onEdit(item) {
                this.$router.push({path:"/addressEdit",query:{id:item.id}})
            },
            onSelect(item){
                this.$store.commit("address/editId",item.id);
                this.$router.go(-1)
            }
        },
        created(){
            this.list = this.$store.state.address.lists || [];
            try{
                this.chosenAddressId = this.list.find(item=>item.isDefault).id
            }catch(error){
                Toast("没有地址数据")
            }
            
            this.$store.state.vanTabbar = false;
        },

        beforeRouteLeave(to, from, next){
            if(to.path == "/my"){
                this.$store.state.vanTabbar = true; 
            }
            next();
        }
    };
</script>

<style lang="scss" scoped>
.head{
    height: 50px;
    width: 100%;
    line-height: 50px;
    font-size: 16px;
    text-align: center;
    .icon-fanhui{
        font-size: 24px;
    }
}
.main{
    position: relative;
    .clicked{
        width: 4px;
        height: 101px;
        background-color: #00c3f5;
        position: absolute;
        left: 2px;
    }
    .top{
        height: 20px;
        width: 100%;
        position: relative;
        font-size: 12px;
        color: #000;
        padding-top: 10px;
        .name{
            position: absolute;
            left: 20px;
        }
        .tel{
            position: absolute;
            left: 120px;
        }
    }
    .center{
        margin: 0 20px;
        padding: 6px 0;
        font-size: 10px;
        border-bottom: 1px solid #eeeeee;
    }
    .bottom{
        height: 40px;
        line-height: 40px;
        position: relative;
        span{
            display: block;
            width: 50px;
            height: 20px;
            border: 1px solid #00c3f5;
            line-height: 20px;
            text-align: center;
            border-radius: 20px;
            color: #00c3f5;
            position: absolute;
            top: 10px;
            right: 20px;
        }
    }
}

.footer{
    height: 50px;
    width: 100%;
    line-height: 50px;
    text-align: center;
    border-top: 1px solid #eeeeee;
    position: fixed;
    bottom: 0;
    span{
        display: block;
        width: 240px;
        height: 30px;
        line-height: 30px;
        background-color: #00c3f5;
        color: #fff;
        border-radius: 20px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-top: -15px;
        margin-left: -120px;
    }
}
.line{
    height: 4px;
    width: 100%;
    background-color: #eeeeee;
}
</style>