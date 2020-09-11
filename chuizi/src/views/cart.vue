<template>
    <div>
        <div class="list">
            <div class="top">
                <span>购物清单</span>   
            </div>
            <div class="bottom">
                <ul v-if="lists!=''">
                   
                    <li v-for="(item,index) in lists" :key="index">
                        <!-- <input type="checkbox" v-model="checked" @click="inputselect(index)"> -->
                        <div class="dec">
                            <div class="name">商品信息</div>
                            <div class="price">单价</div>
                            <div class="num">数量</div>
                            <div class="priceall">小计</div>
                            <div class="caozuo">操作</div>
                        </div>
                        <div class="dev">
                            <van-checkbox v-model="item.isSelect" @click="inputselect"></van-checkbox>
                            <img :src="item.image" alt="">
                            <div class="disc">
                                <p class="p2">{{item.selectcolor}} | {{item.selectmodel}}</p>
                            </div>
                            <span class="title">{{item.title}}</span>
                            <span class="price_t">￥{{item.price}}</span>
                            <el-input-number v-model="item.num" :min="1" :max="10" label="描述文字"></el-input-number>
                            <span class="priceall_t">￥{{item.price*item.num}}</span>
                            <span class="iconfont icon-delete" @click="del(index)"></span>
                        </div>
                    </li>
                </ul>
                <div class="cart_null"  v-else>
                    <img class="car_null" src="../assets/img/cart_null.png" alt="">
                    <div class="xuangou" @click="gohome">立即选购</div>
                </div>
            </div>
            <div class="total" v-if="lists!=''">
                <van-checkbox @click="checkedAll" :value="checked">全选</van-checkbox>
                <div class="shipping">
                    
                    <div class="inselect">
                        <div class="count_total">已选择 <span>{{lists.length}}</span> 件商品</div>
                        <div class="pri_total">应付总额：<span>￥ {{total}}</span></div>

                    </div>
                    <div class="jiesuan_btn" @click="$router.push('/order')">现在结算</div>
                </div>
            </div>
            
        </div>
        <recommend></recommend>
        <footerlist></footerlist>
    </div>
</template>

<script>
import footerlist from "../components/footer/footer"
import recommend from "../components/recommend/recommend"

    export default {
        data(){
            return{
                checked:true,
                total:0,
                count_total:0,
                lists:[
                    // {
                    //     isSelect:true,
                    //     name:"魅族16s",
                    //     price:2399,
                    //     model:"8+128GB",
                    //     color:"静谧黑",
                    //     num:1,
                    //     img:require("../assets/img/phone/mei16sp/b1.jpg")
                    // },
                    // {
                    //     isSelect:true,
                    //     name:"魅族17",
                    //     price:3699,
                    //     model:"8+128GB",
                    //     color:"静谧黑",
                    //     num:1,
                    //     img:require("../assets/img/phone/mei16sp/b1.jpg")
                    // },
                ]
            }
        },
        components:{
            footerlist,
            recommend,
        },
        methods:{
            del(index){
                this.lists.splice(index,1);
            },
            sum(){
                this.total = this.lists.reduce((total,item)=>{
                    if(!item.isSelect) return total;
                    return total + parseInt(item.price) * parseInt(item.num);
                },0)
            },
            checkedAll(){
                this.lists.forEach((item)=>{
                    item.isSelect = !this.checked;
                })
                this.checked =!this.checked;
            },
            checkboxclick(){
                this.checked = this.lists.every((item)=>{
                    return item.isSelect;
                })
            },
            inputselect(){
                this.checkboxclick();
                this.sum();
            },
            gohome(){
                this.$router.push("/")
            }
        },
        created(){
            this.checkboxclick();
            this.lists = this.$store.state.cart.lists;
            // console.log(this.$store.state.cart.lists);
        },
        beforeMount(){
            this.sum();
            this.checkboxclick();
            

        },
        beforeUpdate(){
            this.sum();
        },
        
    }
</script>

<style lang="scss" scoped>
.list{
  margin: 0 auto;
  margin-top: 20px;
  width:1200px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #dcdcdc;
    margin-top: 90px;
  .top{
    height: 60px;
    width: 100%;
    line-height: 60px;
    span{
      font-size: 16px;
      font-weight: bold;
      margin-left: 20px;
    }
    background-color: #f3f3f3;
  }
  .bottom{
      ul{
            li{
                height: 140px;
                .dec{
                    height: 30px;
                    background-color: #eeeeee;
                    line-height: 30px;
                    position: relative;
                    .title{
                        position: absolute;
                        left: 80px;
                    }
                    .price{
                        position: absolute;
                        right: 504px;
                    }
                    .num{
                        position: absolute;
                        right: 350px;
                    }
                    .priceall{
                        position: absolute;
                        right: 180px;
                    }
                    .caozuo{
                        position: absolute;
                        right: 80px;
                    }
                }
                .dev{
                    height: 100px;
                    line-height: 100px;
                    position: relative;
                    .van-checkbox{
                        position: absolute;
                        top: 44px;
                        left: 20px;
                    }
                    img{
                        width: 80px;
                        margin-left: 20px;
                        float: left;
                        position: absolute;
                        top: 14px;
                        left: 50px;
                    }
                    .disc{
                        position: absolute;
                        top: 0px;
                        left: 320px;
                    }
                    .title{
                        position: absolute;
                        top: 0px;
                        left: 180px;
                        font-size: 15px;

                    }
                    .caozuo{
                        position:absolute;
                        top: 0px;
                        right: 20px;
                    }
                    .price_t{
                        position: absolute;
                        top: 0px;
                        right: 500px;
                    }
                    .priceall_t{
                        color: #d44d44;
                        font-size: 16px;
                        font-weight: bold;
                        position: absolute;
                        top: 0px;
                        right: 170px;
                    }
                    .el-input-number{
                        position: absolute;
                        top:30px;
                        right: 270px;
                    }
                    .iconfont{
                        position: absolute;  
                        right: 84px;
                    }
                }
            }
        }
    .car_null{
        width: 450px;
        margin: 0 auto;
    }
  }
  .total{
    height: 80px;
    border-top: 1px solid #d9d9d9;
    border-radius: 0 0 8px 8px;
    position: relative;
    .van-checkbox{
        position: absolute;
        top: 28px;
        left: 20px;
    }
    .shipping{
        display: inline-block;
        float: right;
        padding: 17px 30px;
        .jiesuan_btn{
            width: 120px;
            height: 50px;
            background-color: #6287e7;
            float:left;
            border-radius: 10px;;
            line-height: 50px;
            text-align: center;
            font-size: 16px;
            color: #fff;
        }
        .jiesuan_btn:hover{
            background-color: #6482cd;
        }
        .inselect{
            float: left;
            margin-right: 50px;
            font-size: 16px;
            font-weight: bold;
            margin-top: 10px;
            width: 340px;
            span{
                color: #d44d6e;
                padding: 5px;
                }
            .count_total{
                color: #323232;
                border-right: 1px solid #e1e1e1;
                float: left;
                padding-right: 20px;
            }
            .pri_total{
                margin-left: 20px;
                float: left;
            }
        }
    }
  }
}
.xuangou{
    width: 200px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #f1f1f1;
    border-radius: 10px;
    margin: 10px auto;
}
</style>