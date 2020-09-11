import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Router from "vue-router"
// import routers from './module/router';
Vue.config.productionTip = false

// 公共样式
import "./assets/css/base.css";
import "./assets/font/iconfont.css";


Vue.use(Router)
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

// vant组件库
// $cnpm i vant -S
import vant from "vant";
import "vant/lib/index.css";

// element组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 插件
import "swiper/css/swiper.min.css";

import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:3000/"
Vue.prototype.$axios = axios;

Vue.use(ElementUI);
Vue.use(vant);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
