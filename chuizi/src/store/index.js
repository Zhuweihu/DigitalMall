import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import cart from "./cart";
import details from "./details";
import my from "./my";
import address from "./address";
import order from "./order"

export default new Vuex.Store({
  state: {
    username:null, //用户名
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart,     //购物车
    details,  //详情页
    my,       //我的
    address,  //地址
    order,
  }
})
