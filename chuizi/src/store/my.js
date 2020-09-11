export default {
    namespaced:true,//命名空间
    state:{
        lists:[
            
        ],
        footlist:[],
    },
    mutations:{
        add(state,obj){
            state.lists.unshift(obj);
        },
        del(state){
            state.lists.splice(0,1);
        },
        addone(state,obj){
            state.footlist.unshift(obj);
        },
    },
    actions:{}
}