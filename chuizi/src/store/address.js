export default {
    namespaced:true,
    state:{
        lists:[
            {
                id: '1',
                name: '张三',
                tel: '13000000000',
                address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼',
                isDefault: true,
                province:"浙江省",
                city:"杭州市",
                county:"西湖区",
                areaCode:"330106",
                addressDetail:"文三路 138 号东方通信大厦 7 楼"
            }
        ],
    },
    mutations:{
        // 添加数据
        add(state,obj){
            // 去除默认选项
            // state.lists.forEach((item)=>{
            //     item.isDefault = false;
            // })
            obj.isDefault = true;// 默认选项
            obj.id = state.lists.length + 1;
            state.lists.unshift(obj); //添加地址
        },
        // 修改数据
        edit(state,obj){
            let index = state.lists.findIndex(item=>item.id == obj.id);// 找到数据下标
            Object.assign(state.lists[index],obj);
        }
    },
    actions:{}
}