export default [
  {
    path:"/login",
    name:"登录",
    component:()=>import("../../components/user/login.vue")
  },
  {
    path:"/register",
    name:"注册",
    component:()=>import("../../components/user/register.vue")
  }
]