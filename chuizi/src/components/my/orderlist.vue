<template>
  <div>
    <div class="main">
      <div class="top">我的订单</div>
      <div class="bottom">
        <ul>
            <li v-for="(item,index) in lists" :key="index">
                <!-- <input type="checkbox" v-model="checked" @click="inputselect(index)"> -->
                <div class="dec">
                    <span class="datetime">{{item.dateTime | dateFormat}}</span>
                    <span class="orderid">订单号：{{item.orderId}}</span>
                    <span class="price">单价</span>
                    <span class="num">数量</span>
                    <span class="priceall">实付金额</span>
                    <span class="ordertype">{{typeList[item.type]}}</span>
                </div>
                <div class="dev">
                    <img :src="item.goodsList[0].image" alt="">
                    <span class="title">{{item.goodsList[0].name}}</span>
                    <div class="box">
                        <span class="price_t">￥{{item.goodsList[0].price}}</span>
                        <span>{{item.goodsList[0].num}}</span>
                        <span class="priceall_t">￥{{item.goodsList[0].price*item.goodsList[0].num}}</span>
                    </div>
                    <span class="caozuo">
                        <!-- 待支付 -->
                        <div v-if="item.type == 1">
                            <el-button size="mini" type="danger"  @click="pay(index)">立即付款</el-button>
                        </div>
                        <!-- 待收货 -->
                        <div v-else-if="item.type == 2">
                            <el-button size="mini" type="info"  @click="geted(index)">已收货</el-button>
                        </div>
                        <!-- 已完成 -->
                        <div v-else-if="item.type == 3">
                            <el-button size="mini" @click="evaluate(value)">商品评价</el-button>
                        </div>
                    </span>
                </div>
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
            lists:[],
        }
    },
    methods:{
        pay(index){
            this.lists[index].type="2";
        },
        geted(index){
            this.lists[index].type="3";
        },
        del(index){
            this.lists.splice(index,1);
        },
    },
    filters: {
        dateFormat: (dateTime) => {
            var now = new Date(dateTime)
            var y = now.getFullYear()
            var m = (now.getMonth() + 1).toString().padStart(2, '0')//es6字符串，从左往右补全字符串
            var d = now.getDate().toString().padStart(2, '0')
            var hh = now.getHours().toString().padStart(2, '0')
            var mm = now.getMinutes().toString().padStart(2, '0')
            var ss = now.getSeconds().toString().padStart(2, '0')
            // 过滤器中要有返回值
            return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
        }
    },
    created(){
        this.lists = this.$store.state.order.lists;
        this.typeList = this.$store.state.order.typeList;
        console.log(this.lists)
    }
}
</script>

<style lang="scss" scoped>
.main{
  width: 976px;
  background-color: #ffffff;
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
        min-height: 140px;
        ul{
            li{
                height: 140px;
                .dec{
                    height: 30px;
                    background-color: #eeeeee;
                    line-height: 30px;
                    text-align: center;
                    span{
                        float: left;
                        margin-left: 30px;
                    }
                    .price{
                        margin-left: 250px;
                    }
                    .num{
                        margin-left: 80px;
                    }
                    .priceall{
                        margin-left: 80px;
                    }
                    .ordertype{
                        margin-left: 80px;
                        color:#d44d44;
                        font-weight: bold;
                    }
                }
                .dev{
                    height: 100px;
                    line-height: 100px;
                    position: relative;
                    img{
                        width: 80px;
                        margin-left: 20px;
                        float: left;
                        margin-top: 10px;
                    }
                    .title{
                        position: absolute;
                        top: 0px;
                        left: 50px;
                    }
                    .box{
                        position: absolute;
                        top: 0px;
                        right: 160px;
                    }
                    .caozuo{
                        position:absolute;
                        top: 0px;
                        right: 20px;
                    }
                    span{
                        font-size: 16px;
                        float: left;
                        margin-left: 80px;
                    }
                    .price_t{
                        margin-left: 275px;
                    }
                    .priceall_t{
                        color: #d44d44;
                        font-size: 16px;
                        font-weight: bold;
                    }
                }
            }
        }
    }
}
</style>