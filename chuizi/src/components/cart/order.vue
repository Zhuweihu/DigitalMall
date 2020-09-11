<template>
  <div>
    <div class="address">
      <div class="top">收货信息</div>
      <div class="bottom">
        <!-- 地址列表 -->
        <ul>
          <li
            v-for="(item,index) in addresslist[0]"
            @click="isaddress=index"
            :class="{active:isaddress==index}"
            :key="index"
          >
            <div class="name">{{item.name}}</div>
            <div class="phone">{{item.tel}}</div>
            <div class="addre">{{item.address}}</div>
            <div class="edit">
              <span>修改</span>
              <span @click="addre_del(index)">删除</span>
            </div>
          </li>
          <li class="newaddre" @click="dialogFormVisible = true">
            <span>+</span>
            <p>使用新地址</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 添加地址 -->
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible" width="500px">
      <el-form label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="name_pt" minlength="2"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="tel_pt" maxlength="11" minlength="11"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-cascader
            size="large"
            ref="cascaderAddr"
            :options="options"
            v-model="selectedOptions"
            @change="handleChange"
          ></el-cascader>
        </el-form-item>
        <el-form-item label="详细地址">
          <el-input v-model="addressDetail" minlength="2"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="onsava">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 购物清单 -->
    <div class="oderlist">
      <div class="top">购物清单</div>
      <div class="bottom">
        <ul>
          <li v-for="(item,index) in lists" :key="index">
            <!-- <input type="checkbox" v-model="checked" @click="inputselect(index)"> -->
            <div class="dec">
              <div class="title">商品信息</div>
              <div class="price">单价</div>
              <div class="num">数量</div>
              <div class="priceall">应付金额</div>
            </div>
            <div class="dev">
              <img :src="item.image" alt />
              <div class="disc">
                <p class="p2">{{item.selectmodel}} | {{item.selectcolor}}</p>
              </div>
              <span class="title">{{item.name}}</span>
              <span class="price_t">￥{{item.price}}</span>
              <div class="num">{{item.num}}</div>
              <span class="priceall_t">￥{{item.price*item.num}}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="total">
        <div class="shipping">
          <div class="inselect">
            <div class="pri_total">
              应付总额：
              <span>￥ {{total}}</span>
            </div>
          </div>
          <div class="jiesuan_btn" @click="onsubmit">立即付款</div>
        </div>
      </div>
    </div>
    <footerlist></footerlist>
  </div>
</template>

<script>
import footerlist from "../footer/footer";
import { regionData } from "element-china-area-data";
import { Toast } from "vant";
export default {
  data() {
    return {
      addresslist: [],
      name: "",
      tel: "",
      addre: "",
      price: "",
      lists: [],
      name_pt: "",
      tel_pt: null,
      addressDetail: "",
      dialogFormVisible: false,
      options: regionData,
      selectedOptions: [],
      address_pt: "",
      province: "",
      city: "",
      county: "",
      isaddress: 0
    };
  },
  components: {
    footerlist
  },
  methods: {
    addre_del(index) {
      this.addresslist[0].splice(index, 1);
    },

    sum() {
      this.total = this.lists.reduce((total, item) => {
        // 判断选项选中计算价格
        if (!item.isSelect) return total; //返回默认价格
        return total + parseInt(item.price) * parseInt(item.num);
      }, 0); //总价格默认值0
    },

    cartVue() {
      // 保存订单数据
      let order = {
        orderId: new Date().getTime(),
        address: this.address,
        goodsList: this.lists,
        dateTime: new Date(),
        type: 1
      };
      this.$store.commit("order/add", order);
      this.$store.state.cart.lists = [];
      this.$store.state.cart.num = 0;
    },
    // 提交订单
    onsubmit() {
      // 保存订单数据
      let order = {
        orderId: new Date().getTime(),
        address: this.addresslist[this.isaddress],
        goodsList: this.lists,
        dateTime: new Date(),
        type: 2
      };
      this.$store.commit("order/add", order);
      this.$store.state.cart.lists = [];
      this.$store.state.cart.num = 0;
      this.$router.push("my/orderlist");
    },

    handleChange(e, form, thsAreaCode) {
      thsAreaCode = this.$refs["cascaderAddr"].getCheckedNodes()[0].pathLabels; // 注意2： 获取label值
      console.log(thsAreaCode); // 注意3： 最终结果是个一维数组对象
      (this.province = thsAreaCode[0]),
        (this.city = thsAreaCode[1]),
        (this.county = thsAreaCode[2]);
      this.address_pt = thsAreaCode[0] + thsAreaCode[1] + thsAreaCode[2];
    },
    onsava() {
      if (this.name_pt.length == 0) {
        Toast("请输入姓名");
        return;
      }
      if (this.tel_pt.length != 11) {
        Toast("请输入11位电话号码");
        return;
      }
      if (this.addressDetail.length == 11) {
        Toast("请输入详细地址");
        return;
      }
      this.addresslist.push({
        name: this.name_pt,
        tel: this.tel_pt,
        address: this.address_pt + this.addressDetail,
        province: this.province,
        city: this.city,
        county: this.county,
        areaCode: "000000",
        addressDetail: this.addressDetail
      });
      this.dialogFormVisible = false;
      this.$store.commit("address/add", {
        name: this.name_pt,
        tel: this.tel_pt,
        address: this.address_pt + this.addressDetail,
        province: this.province,
        city: this.city,
        county: this.county,
        areaCode: "000000",
        addressDetail: this.addressDetail
      });
    }
  },
  computed: {
    cardType() {
      return this.$store.state.address.lists.length == 0 ? "add" : "edit";
    }
  },

  created() {
    // 获取地址数据
    let data = this.$store.state.address.lists;
    console.log(data);
    if (data) {
      this.addresslist.push(data);
    }
    this.lists = this.$store.state.cart.lists;
    this.sum();
  },
  beforeMount() {
    // 获取地址数据
  },
  beforeDestroy() {
    // this.cartVue();
  }
};
</script>

<style lang="scss" scoped>
.address {
  width: 1200px;
  margin: 20px auto;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #dcdcdc;
  margin-top: 90px;
  .top {
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #f3f3f3;
    border-bottom: 1px solid #ccc;
    font-size: 16px;
    font-weight: bold;
    padding-left: 30px;
  }
  .bottom {
    ul {
      li {
        float: left;
        width: 260px;
        height: 150px;
        border: 1px solid #e5e5e5;
        margin: 20px;
        position: relative;
        .name {
          margin: 10px;
          font-size: 16px;
          color: #666666;
        }
        .phone {
          margin: 10px;
          font-size: 14px;
          color: #b39999;
        }
        .addre {
          margin: 10px;
          font-size: 14px;
          color: #b39999;
        }
        .edit {
          position: absolute;
          bottom: 0;
          width: 100%;
          display: flex;
          display: none;
          span {
            flex: 1;
            text-align: center;
            border-top: 1px solid #e1e1e1;
            border-right: 1px solid #e1e1e1;
          }
        }
      }
      li.active {
        border: 1px solid blue;
      }
      li:hover .edit {
        display: flex;
      }
      .newaddre {
        border: 1px solid #e5e5e5;
        text-align: center;
        line-height: 150px;
        font-size: 28px;
        position: relative;
        p {
          position: absolute;
          width: 100px;
          top: 30px;
          left: 50%;
          margin-left: -50px;
          font-size: 16px;
        }
      }
    }
  }
}
.oderlist {
  width: 1200px;
  margin: 20px auto;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #dcdcdc;
  .top {
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #f3f3f3;
    border-bottom: 1px solid #ccc;
    font-size: 16px;
    font-weight: bold;
    padding-left: 30px;
  }
  .bottom {
    ul {
      li {
        height: 140px;
        .dec {
          height: 30px;
          background-color: #eeeeee;
          line-height: 30px;
          position: relative;
          .title {
            position: absolute;
            left: 80px;
          }
          .price {
            position: absolute;
            right: 400px;
          }
          .num {
            position: absolute;
            right: 250px;
          }
          .priceall {
            position: absolute;
            right: 90px;
          }
        }
        .dev {
          height: 100px;
          line-height: 100px;
          position: relative;
          .van-checkbox {
            position: absolute;
            top: 44px;
            left: 20px;
          }
          img {
            width: 80px;
            margin-left: 20px;
            float: left;
            position: absolute;
            top: 14px;
            left: 50px;
          }
          .disc {
            position: absolute;
            top: 0px;
            left: 320px;
          }
          .title {
            position: absolute;
            top: 0px;
            left: 180px;
            font-size: 15px;
          }
          .caozuo {
            position: absolute;
            top: 0px;
            right: 20px;
          }
          .price_t {
            position: absolute;
            top: 0px;
            right: 396px;
          }
          .priceall_t {
            color: #d44d44;
            font-size: 16px;
            font-weight: bold;
            position: absolute;
            top: 0px;
            right: 90px;
          }
          .num {
            position: absolute;
            right: 256px;
          }
        }
      }
    }
  }
  .total {
    height: 80px;
    border-top: 1px solid #d9d9d9;
    border-radius: 0 0 8px 8px;
    position: relative;
    .shipping {
      display: inline-block;
      float: right;
      padding: 17px 30px;
      .jiesuan_btn {
        width: 120px;
        height: 50px;
        background-color: #6287e7;
        float: left;
        border-radius: 10px;
        line-height: 50px;
        text-align: center;
        font-size: 16px;
        color: #fff;
      }
      .jiesuan_btn:hover {
        background-color: #6482cd;
      }
      .inselect {
        float: left;
        margin-right: 50px;
        font-size: 18px;
        font-weight: bold;
        margin-top: 10px;
        width: 200px;
        span {
          color: #d44d6e;
          padding: 5px;
        }
        .count_total {
          color: #323232;
          border-right: 1px solid #e1e1e1;
          float: left;
          padding-right: 20px;
        }
        .pri_total {
          margin-left: 20px;
          float: left;
        }
      }
    }
  }
}
</style>