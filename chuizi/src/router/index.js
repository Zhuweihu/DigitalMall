import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from './routes/home';
import details from "./routes/details";
import cart from "./routes/cart"
import my from "./routes/my"
import user from "./routes/user"
import address from "./routes/address"

  const routes = [
  {
    path:'/',
    redirect:'/home/first/'
  },
  home,
  details,
  ...cart,
  my,      //我的
  ...user,
  ...address, //地址 es6语法
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
