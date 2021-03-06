export default {
    path:'/home',
    name:'首页',
    component:()=>import("../../views/home.vue"),
    children:[
        {
            path:'first',
            name:'首页',
            component:()=>import('../../components/home/first.vue')
        },
        {
            path:'phone',
            name:'手机',
            component:()=>import('../../components/home/phone.vue')
        },
        {
            path:'television',
            name:'电视',
            component:()=>import('../../components/home//television.vue')
        },
        {
            path:'clothes',
            name:'服饰',
            component:()=>import('../../components/home/clothes.vue')
        },
        {
            path:'conputer',
            name:'电脑',
            component:()=>import('../../components/home/conputer.vue')
        },
        {
            path:'first',
            name:'首页',
            component:()=>import('../../components/home/first.vue')
        },
        {
            path:'parts',
            name:'首页',
            component:()=>import('../../components/home/parts.vue')
        },
    ]
}