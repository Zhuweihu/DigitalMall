<template>
  <div>
    <div class="main">
      <div class="top">
        收获地址
        <span class="addr" @click="dialogFormVisible = true">添加收获地址</span>
      </div>
      <div class="bottom">
        <ul>
          <li v-for="(item,index) in lists" :key="index">
            <!-- <input type="checkbox" v-model="checked" @click="inputselect(index)"> -->
            <div class="dec">
              <span class="username">姓名</span>
              <span class="address">地址</span>
              <span class="phone">电话</span>
            </div>
            <div class="dev">
              <span class="username">{{item.name}}</span>
              <span class="address">{{item.address}}</span>
              <span class="phone">{{item.tel}}</span>
              <div class="edit">修改</div>
              <div class="del">删除</div>
            </div>
          </li>
        </ul>
      </div>
      <el-dialog title="收货地址" :visible.sync="dialogFormVisible" width="500px">
        <el-form label-width="80px">
           <el-form-item label="姓名">
            <el-input v-model="name" minlength="2"></el-input>
          </el-form-item>
           <el-form-item label="电话">
            <el-input v-model="tel" maxlength="11" minlength="11"></el-input>
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
    </div>
  </div>
</template>

<script>
import { regionData } from "element-china-area-data";
import { Toast } from 'vant'
export default {
  data() {
    return {
      name: "",
      tel: null,
      addressDetail: "",
      dialogFormVisible: false,
      options: regionData,
      selectedOptions: [],
      address: "",
      province:"",
      city:"",
      county:""
    };
  },
  methods: {
    del(index) {
      this.lists.splice(index, 1);
    },
    handleChange(e, form, thsAreaCode) {
      thsAreaCode = this.$refs["cascaderAddr"].getCheckedNodes()[0].pathLabels; // 注意2： 获取label值
      console.log(thsAreaCode); // 注意3： 最终结果是个一维数组对象
      this.province=thsAreaCode[0], 
      this.city=thsAreaCode[1], 
      this.county=thsAreaCode[2];
      this.address = thsAreaCode[0] + thsAreaCode[1] + thsAreaCode[2];
    },
    onsava() {
        if(this.name.length==0){
            Toast('请输入姓名');
            return;
        }
        if(this.tel.length!=11){
            Toast('请输入11位电话号码');
            return;
        }
        if(this.addressDetail.length==11){
            Toast('请输入详细地址');
            return;
        }
        this.dialogFormVisible = false 
        this.$store.commit("address/add", {
            name:this.name,
            tel:this.tel,
            address:this.address+this.addressDetail,
            province:this.province,
            city:this.city,
            county:this.county,
            areaCode:"000000",
            addressDetail:this.addressDetail
      });
    }
  },
  components: {
    // addressadd,
  },
  created() {
    this.lists = this.$store.state.address.lists;
    console.log(this.lists);
  },
  updated() {}
};
</script>

<style lang="scss" scoped>
.main {
  width: 976px;
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #dbdbdb;
  .top {
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    font-weight: bold;
    padding-left: 30px;
    background-color: #fafafa;
    position: relative;
    .addr {
      position: absolute;
      top: 12px;
      right: 60px;
      width: 140px;
      height: 34px;
      line-height: 34px;
      text-align: center;
      background-color: #5079d9;
      color: #fff;
      font-size: 14px;
      border-radius: 10px;
    }
  }
  .bottom {
    min-height: 140px;
    ul {
      li {
        height: 140px;
        .dec {
          height: 30px;
          background-color: #eeeeee;
          line-height: 30px;
          position: relative;
          .username {
            position: absolute;
            top: 0;
            left: 20px;
          }
          .address {
            position: absolute;
            top: 0;
            left: 180px;
          }
          .phone {
            position: absolute;
            top: 0;
            left: 660px;
          }
        }
        .dev {
          position: relative;
          .username {
            position: absolute;
            top: 50px;
            left: 20px;
          }
          .address {
            position: absolute;
            top: 50px;
            left: 180px;
          }
          .phone {
            position: absolute;
            top: 50px;
            left: 634px;
          }
          .edit {
            position: absolute;
            top: 40px;
            left: 834px;
            width: 50px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            background-color: #a2a2a2;
            color: #fff;
            border-radius: 10px;
          }
          .del {
            position: absolute;
            top: 40px;
            left: 894px;
            width: 50px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            background-color: #ec6767;
            color: #fff;
            border-radius: 10px;
          }
        }
      }
    }
  }
}
.el-input {
  width: 330px;
}
</style>