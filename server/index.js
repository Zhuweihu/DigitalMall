// 项目管理包
// $npm init -y 
// 后端内容node.js
// $cnpm i express -S

// 安装依赖包
// cnpm i

// 启动服务器
// $node index.js

var express = require("express");
var app = express();

// 创建静态目录./dist,默认访问index.html文件
app.use(express.static("./dist"));


//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

// req 客户端向服务器数据响应
// res 服务器向客户端数据响应
// get() 数据请求get请求post请求
// post()
// "/" 路由操作
// http://127.0.0.1:3000/
app.get("/",function(req,res){
    // 返回字符串 send()方法
    res.send("你好");
})

// 请求数据接口APi，获取数据
// http://127.0.0.1:3000/goodsApi
app.get("/goodsApi",function(req,res){
    // 返回对象 json()方法
    res.json({name:"商品名称",price:"22",num:1})
})
// 在服务器中定义变量，重启服务器会被初始化
var userList = [];//全局数据变量
// 先注册用户，在登陆用户

// 登陆接口
// http://127.0.0.1:3000/login
app.get("/login",function(req,res){
    console.log(req.query);
    let {username,password} = req.query;
    if(username == "" && password == ""){
        return; //终止路由操作
    }

    // 1.通过前端传递登陆信息
    // 2.使用前台登陆用户名，在后台中userList匹配到相同用户名密码，找到为登陆成功，找不到登陆失败
    
    // 使用前台用户名找userlist对象数据，对比密码
    let data = userList.find(item=>item.username == username);//返回对象
    console.log("返回对象",data);
    // 判断密码是否相同
    if( data && data.password == password){
        res.send("200");
    }else{
        res.send("201");
    }

})

// 注册接口
// http://127.0.0.1:3000/register
// http://127.0.0.1:3000/register?username=zhangsan&password=123123&password2=123123
app.get("/register",function(req,res){
    // req.query获取get请求传递数据
    console.log(req.query);
    // 判断数据
    let {username,password,password2} = req.query;
    if(username != "" && password == password2 && password != ""){
        console.log("注册成功");
        userList.push({username,password});
        res.send("200");
    }else{
        res.send("201");
    }
})

//首页
let homebanner = [
    {image:"https://fms.res.meizu.com/dms/2020/07/03/5c39959e-2ccf-4962-8f52-9dc414dc6148.jpg"},
    {image:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e472d8648df665bc0b2047252685cef0.jpg?w=2452&h=920"},
    {image:"https://fms.res.meizu.com/dms/2020/07/01/0d0024ac-a000-4eec-a1c1-1ad43ef53ae0.jpg"},
    {image:"https://fms.res.meizu.com/dms/2020/05/08/620554bc-a404-4b50-8c01-1a21dafab9ce.jpg"},
]

let recommend = [
    {
        id:1,
        name:"魅族 17",
        price:"2599",
        num:1,
        color:["十七度灰","梦幻独角兽"],
        model:["8+128GB","12+256GB"],
        disc:"Flyme8周年 6.23-6.27 每日前100名限量赠魅族HIFI解码耳放】5G旗舰 | 高通骁龙 865 + UFS 3.1 + LPDDR5 | 6400W 全场景 AR 专业影像系统 | 27W 无线超充 + 4500mAh 超大电池",
        image:"https://fms.res.meizu.com/dms/2020/06/29/4a4e236f-0b08-4de1-a017-a239c34ca296.png",
        images:[
            [
                "https://openfile.meizu.com/group1/M00/08/0B/Cgbj0V7gsjWAfxBJAAlp3c1WdI4793.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/D9/Cgbj0V6zwMWANhNKAAVfQwmOan4751.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C3/Cgbj0F6zwMWAbCieAAZp0FbICJA179.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/D9/Cgbj0V6zwMWASoKjAAKhvZAJDTU118.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/08/0B/Cgbj0V7gsjWAPF5rAAsOWBHfhMc030.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/F3/Cgbj0F7eH2SAdKD5AAHWtl1T9Ws790.jpg680x680.jpg",
                "https://openfile.meizu.com/group1/M00/08/09/Cgbj0V7gLWKAKFcnAAFyldULfZ0173.jpg680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C4/Cgbj0F6zwM6AdEXLAALMpD5v_iE443.png680x680.jpg",
            ],
        ],
    },
    {
        id:2,
        name:"魅族 17 Pro",
        price:"2599",
        num:1,
        color:["定白","乌金"],
        model:["8+128GB","12+256GB"],
        disc:"5G旗舰 | 高通骁龙 865 + UFS 3.1 + LPDDR5 | 6400W 全场景 AR 专业影像系统",
        image:"https://fms.res.meizu.com/dms/2020/06/29/2eab78bd-5c70-4586-a65c-c6ce63db47a5.png",
        images:[
            [
                "https://openfile.meizu.com/group1/M00/07/F5/Cgbj0F7gskGAT8SdAAi5TCCOE2Y178.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DB/Cgbj0V6zwU2ABpNtAAKi3BlPF4A270.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DB/Cgbj0V6zwVOAYv3TAAYSY_fifOs397.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C5/Cgbj0F6zwU-AE3JwAAJ3w5UUqH4853.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/F5/Cgbj0F7gsjWARDOAAAmxMlGl-4w854.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DA/Cgbj0V6zwTmAPwtyAAQ_qsF3bCA001.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C5/Cgbj0F6zwTmARxAyAAYq4XcsnGk824.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DA/Cgbj0V6zwTmAI0JaAAKLVXwYXgA321.png680x680.jpg",
            ],
        ],
    },
    {
        id:3,
        name:"锤子 坚果Pro3",
        price:"2599",
        num:1,
        color:["白色","黑色"],
        model:["6+128GB","8+256GB"],
        disc:" 骁龙855PLUS 4800万四摄 UFS3.0 全网通双卡双待 全面屏游戏手机",
        image:"//img12.360buyimg.com/n1/s450x450_jfs/t1/66331/6/14404/142578/5dba9d6fEe2829989/ec6d712eb5681881.jpg",
        images:[
            [
                "//img12.360buyimg.com/n1/s450x450_jfs/t1/66331/6/14404/142578/5dba9d6fEe2829989/ec6d712eb5681881.jpg",
                "//img12.360buyimg.com/n1/s450x450_jfs/t1/52046/22/14712/160659/5dba9d70Ef6e53038/59a7d2b2b08b8e96.jpg",
                "//img12.360buyimg.com/n1/s450x450_jfs/t1/102167/7/1208/40347/5dba9d70E51b1b958/61290abbb382f019.jpg",
                "//img12.360buyimg.com/n1/s450x450_jfs/t1/87697/12/1147/125607/5dba9d70Ebdc36e4e/2299abe25ea92441.jpg",
            ],
            [
                "//img10.360buyimg.com/n1/s450x450_jfs/t1/65204/28/14297/101555/5dba9c73E9fded3da/bc053e4776116e8d.jpg",
                "//img10.360buyimg.com/n1/s450x450_jfs/t1/64487/26/14144/95511/5dba9c7aE67ed1afe/9954b333af099e6f.jpg",
                "//img10.360buyimg.com/n1/s450x450_jfs/t1/58523/36/14656/40326/5dba9c7aEc4693db5/f7cfb64e35855cbe.jpg",
                "//img10.360buyimg.com/n1/s450x450_jfs/t1/104896/40/1107/82014/5dba9c7bE87485b51/0ef80cdbd567657a.jpg",
            ],
        ],
    },
    {
        id:4,
        name:"小米10",
        price:"3999",
        num:1,
        color:["冰海蓝","钛银黑"],
        model:["8+128GB","12+256GB"],
        disc:"超级夜景视频 65W超级闪充 视频超级防抖 双模5G 8GB+128GB 香芋紫 拍照游戏视频手机",
        image:"//img12.360buyimg.com/n1/s450x450_jfs/t1/91087/36/12227/66469/5e44f450E4a424f4e/7d23ad95ca25f0b4.jpg",
        images:[
            [
                "//img12.360buyimg.com/n1/s450x450_jfs/t1/91087/36/12227/66469/5e44f450E4a424f4e/7d23ad95ca25f0b4.jpg",
                "//img12.360buyimg.com/n1/s450x450_jfs/t1/101870/25/12102/62425/5e44f450E4f5a1904/d9c55b062bd08127.jpg",
                "//img12.360buyimg.com/n1/s450x450_jfs/t1/95503/4/12175/58894/5e44f451Ebeea84ff/b707e84b5a4a0e15.jpg",
                "//img12.360buyimg.com/n1/s450x450_jfs/t1/91861/25/12239/81146/5e44f451E83d44a10/720681164353c8c3.jpg",
            ],
            [
                "//img10.360buyimg.com/n1/s450x450_jfs/t1/86361/7/11985/71392/5e44016fE428a0d07/2cc211413b7f3a5e.jpg",
                "//img10.360buyimg.com/n1/s450x450_jfs/t1/92580/16/12161/71377/5e44016fE5449a079/02c0efda6e5e35a2.jpg",
                "//img10.360buyimg.com/n1/s450x450_jfs/t1/84733/6/12126/64735/5e44016fE3740583d/15454eb16166c5f2.jpg",
                "//img10.360buyimg.com/n1/s450x450_jfs/t1/96745/12/12241/90115/5e440170Ed390346c/fdd0c25e7cfcbf31.jpg",
            ],
        ],
    },
    {
        id:5,
        name:"Redmi K30",
        price:"1399",
        num:1,
        color:["花影惊鸿","深海微光"],
        model:["6+128GB","8+256GB"],
        disc:" 120Hz流速屏 前置挖孔双摄 索尼6400万后置四摄 4500mAh超长续航 27W快充 6GB+128GB 深海微光 游戏智能手机",
        image:"//img11.360buyimg.com/n1/s450x450_jfs/t1/106720/5/6864/102152/5df64dd3E54ef6db2/17cc73b43ad6538d.jpg",
        images:[
            [
                "//img11.360buyimg.com/n1/s450x450_jfs/t1/106720/5/6864/102152/5df64dd3E54ef6db2/17cc73b43ad6538d.jpg",
                "//img11.360buyimg.com/n1/s450x450_jfs/t1/90047/1/5532/66320/5dee48b6Eca2a5039/bb11cd2423899f6d.jpg",
                "//img11.360buyimg.com/n1/s450x450_jfs/t1/101086/22/5586/65372/5dee48c0Eb22827d4/dd71c06f50a02872.jpg",
                "//img11.360buyimg.com/n1/s450x450_jfs/t1/107028/30/5597/35744/5dee48d4E1c1b165a/9a1d468fb2bb625d.jpg",
            ],
            [
                "//img10.360buyimg.com/n1/s450x450_jfs/t1/101650/38/5462/106961/5dee4c74E9b771245/77b2ce4a20e19c14.jpg",
                "//img10.360buyimg.com/n1/s450x450_jfs/t1/96714/25/5710/71270/5dee4c7bEad088d27/555eed4f7ee440d8.jpg",
                "//img10.360buyimg.com/n1/s450x450_jfs/t1/97169/19/5564/65407/5dee4c82Efcb668df/74273fb161ba4b29.jpg",
                "//img10.360buyimg.com/n1/s450x450_jfs/t1/95358/39/5534/36396/5dee4c89E1f522d69/9a2d071c57698171.jpg",
            ],
        ],
    },
    {
        id:6,
        name:"荣耀30S",
        price:"2399",
        num:1,
        color:["幻夜黑","蝶羽白"],
        model:["8+128GB","12+256GB"],
        disc:"麒麟820 5G芯片 3倍光学变焦 20倍数字变焦 全网通版8GB+128GB",
        image:"//img10.360buyimg.com/n1/s450x450_jfs/t1/114717/38/6659/123673/5ebbd177Ed621712b/ccfec8fb9de3c859.jpg",
        images:[
            [
                "//img10.360buyimg.com/n1/s450x450_jfs/t1/114717/38/6659/123673/5ebbd177Ed621712b/ccfec8fb9de3c859.jpg",
                "//img10.360buyimg.com/n1/s450x450_jfs/t1/104018/13/16920/181871/5e82b0f6E5be5e54f/0ab7cafbcf056176.jpg",
                "//img10.360buyimg.com/n1/s450x450_jfs/t1/99149/8/17100/159112/5e82b0f7E7fa4014b/85eedc2e9168732d.jpg",
                "//img10.360buyimg.com/n1/s450x450_jfs/t1/109149/24/10700/135903/5e82b0f8E601e1b5b/0e37db59ae7e9dff.jpg",
            ],
            [
                "//img11.360buyimg.com/n1/s450x450_jfs/t1/101421/13/16891/174508/5e81d349E4dc56b48/ad947f87987e0b58.jpg",
                "//img12.360buyimg.com/n1/s450x450_jfs/t1/100763/15/16797/171525/5e81d413E6597624d/0233f324aceb37b4.jpg",
                "//img12.360buyimg.com/n1/s450x450_jfs/t1/89326/37/16930/123765/5e81d414Eb7d084fa/b5f5b939257dc321.jpg",
                "//img12.360buyimg.com/n1/s450x450_jfs/t1/92715/24/17076/75824/5e81d414E02785844/25937d4acfdbbbaf.jpg",
            ],
        ],
    },
    {
        id: 1,
        name: 'Lifeme 双肩包',
        price: '299',
        num: 1,
        color:['普通'],
        model:['普通'],
        disc: '创新外观设计 | 扩容超大容量 | 人体工学背负 | 轻盈减负重量 | 颜值安全插扣 | 相机包新搭配',    
        image: '//openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png@480x480.jpg',
          images:[
              [
                  "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
              ],
              [
                  "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
              ],
          ],
      },
      {
        id: 2,
        name: 'Pandaer 「17」系列 T恤',
        price: '269',
        num: 1,
        color:['普通'],
        model:['普通'],
        disc: '【APP限时抢购149元】潮酷印花 | 丝绸手感 | 100％长绒棉',
        image: '//openfile.meizu.com/group1/M00/07/DD/Cgbj0V6z7k-AUrRgAAQ7fTJQLLI525.png@480x480.jpg',
          images:[
              [
                  "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
              ],
              [
                  "https://openfile.meizu.com/group1/M00/07/DD/Cgbj0V6z7k-AUrRgAAQ7fTJQLLI525.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/C8/Cgbj0F6z7k-APqBeAANFsWchns4930.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/DD/Cgbj0V6z7k-AUrRgAAQ7fTJQLLI525.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/C8/Cgbj0F6z7k-APqBeAANFsWchns4930.png680x680.jpg",
              ],
          ],
      },
      {
        id: 3,
        name: 'Pandaer 「17」系列 果冻包',
        price: '99',
        num: 1,
        color:['蓝色'],
        model:['普通'],
        disc: '潮酷印花 | 超大容量 | 透亮设计',
        image: '//openfile.meizu.com/group1/M00/07/E7/Cgbj0V61KNCAUduZAAqsAnm8x-0400.png@480x480.jpg',
          images:[
              [
                  "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
              ],
              [
                  "https://openfile.meizu.com/group1/M00/07/E7/Cgbj0V61KNCAUduZAAqsAnm8x-0400.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/CB/Cgbj0F6z8ZiAZW1-AAYfYOQ0G-Y047.jpg680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/E7/Cgbj0V61KNCAUduZAAqsAnm8x-0400.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/CB/Cgbj0F6z8ZiAZW1-AAYfYOQ0G-Y047.jpg680x680.jpg",
              ],
          ],
      },
      {
        id: 4,
        name: 'Lifeme 相机包',
        price: '129',
        num: 1,
        color:['普通'],
        model:['普通'],
        disc: '相机包新搭配 | 一机两镜超大容量 | 加厚防冲击材料',
        image: '//openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z74aAO--aAAYHfnMzL1U910.png@480x480.jpg',
          images:[
              [
                  "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
              ],
              [
                  "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z74aAO--aAAYHfnMzL1U910.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z74aAbe04AA18EMFZLTk365.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z74aAO--aAAYHfnMzL1U910.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z74aAbe04AA18EMFZLTk365.png680x680.jpg",
              ],
          ],
      },
      {
        id: 1,
        name: 'HD60 降噪耳机',
        price: '1099',
        num: 1,
        color:["普通"],
        model:['普通'],
        disc: '索尼主动降噪芯片 | 40mm镀铍振膜 | 触控操作 | USB - C 快充 | 轻奢品质',
        image: '//openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8VSAV6kEAAlCc-omYno614.png@480x480.jpg',
          images:[
              [
                  "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
              ],
              [
                  "https://openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8VSAV6kEAAlCc-omYno614.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/CB/Cgbj0F6z8U6AHC0LAAuckwCET9o903.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/CB/Cgbj0F6z8U2AXF4DAAcpgTobedU040.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8VSAV6kEAAlCc-omYno614.png680x680.jpg",
              ],
          ],
      },
      {
        id: 2,
        name: 'POP2 真无线蓝牙耳机',
        price: '399',
        num: 1,
        color:['普通'],
        model:['普通'],
        disc: '【APP限时抢购319元】蓝牙5.0 | 单次8H续航 | 石墨烯振膜 | 双耳通话 | 轻触操作 | 轻盈舒适', 
        image: '//openfile.meizu.com/group1/M00/07/28/Cgbj0Vy9Jq6AEzhMAApuih_4TPw329.png@480x480.jpg',
          images:[
              [
                  "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
              ],
              [
                  "https://openfile.meizu.com/group1/M00/07/28/Cgbj0Vy9Jq6AEzhMAApuih_4TPw329.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/28/Cgbj0Vy9Jq2APvH6AAdH__FYS70825.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/11/Cgbj0Fy9JrWAQoMcAAWBvkANrpk395.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/28/Cgbj0Vy9Jq6AEzhMAApuih_4TPw329.png680x680.jpg",
              ],
          ],
      },
      {
        id: 3,
        name: 'HIFI 解码耳放',
        price: '169',
        num: 1,
        color:['普通'],
        model:['普通'],
        disc: '【APP限时抢购129元】高性能DAC芯片 | 纯净HiFi音质 | 600Ω高阻抗推力 | Type-C 转接线 | 音乐 发烧友必备',
        image: '//openfile.meizu.com/group1/M00/07/2F/Cgbj0Vy_C3GAN_TKAAExaPfTwFc180.png@480x480.jpg',
          images:[
              [
                  "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
              ],
              [
                  "https://openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8VSAV6kEAAlCc-omYno614.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/CB/Cgbj0F6z8U6AHC0LAAuckwCET9o903.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/CB/Cgbj0F6z8U2AXF4DAAcpgTobedU040.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8VSAV6kEAAlCc-omYno614.png680x680.jpg",
              ],
          ],
      },
      {
        id: 4,
        name: 'EP3C 耳机',
        price: '129',
        num: 1,
        color:['普通'],
        model:['普通'],
        disc: 'Hi-Res 认证高解析音质 | Type-C数字接口 | 高保真生物纤维振膜',
        image: '//openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2ieAYKJGAAHMHuLWRMo374.png@480x480.jpg',
          images:[
              [
                  "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2ieAYKJGAAHMHuLWRMo374.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2iKAKjwrAAHAx8jFFTk555.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKAB_CgAAFYVMIuGWI946.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKARn8bAAHUerweWa8059.png680x680.jpg",
              ],
              [
                  "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2ieAYKJGAAHMHuLWRMo374.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2iKAKjwrAAHAx8jFFTk555.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKAB_CgAAFYVMIuGWI946.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKARn8bAAHUerweWa8059.png680x680.jpg",
              ],
          ],
      },
      {
        id: 5,
        name: 'EP63NC 无线降噪耳机',
        price: '399',
        num: 1,
        color:['普通'],
        model:['普通'],
        disc: '【APP限时抢购309元】AMS 芯片智能降噪 | Qualcomm apt-X™ 高清音质 | 蓝牙一拖二连接 | 11小时超长续航 | 快充15分钟畅听3小时',
        image: '//openfile.meizu.com/group1/M00/07/10/Cgbj0Fy9JYOACw2DAAMWf3vEhbA886.png@480x480.jpg',
          images:[
              [
                  "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2ieAYKJGAAHMHuLWRMo374.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2iKAKjwrAAHAx8jFFTk555.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKAB_CgAAFYVMIuGWI946.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKARn8bAAHUerweWa8059.png680x680.jpg",
              ],
              [
                  "https://openfile.meizu.com/group1/M00/07/10/Cgbj0Fy9JYOACw2DAAMWf3vEhbA886.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/27/Cgbj0Vy9JX2AdgAuAAOcCBrZLcE823.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/27/Cgbj0Vy9JX2AZqPjAAOzzlpRVmE254.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/10/Cgbj0Fy9JX2AUGHJAAHx3V4UJwQ108.png680x680.jpg",
              ],
          ],
      },
      {
        id: 6,
        name: 'HD60 头戴式蓝牙耳机',
        price: '499',
        num: 1,
        color:['普通'],
        model:['普通'],
        disc: '【APP限时抢购399元】40mm生物振膜  | Type-C充电 | 触控操作 | 蓝牙5.0 | 轻奢品质',
        image: '//openfile.meizu.com/group1/M00/07/86/Cgbj0V3UocyAR_tJAApbDmCAyEo620.png@480x480.jpg',
          images:[
              [
                  "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2ieAYKJGAAHMHuLWRMo374.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2iKAKjwrAAHAx8jFFTk555.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKAB_CgAAFYVMIuGWI946.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKARn8bAAHUerweWa8059.png680x680.jpg",
              ],
              [
                  "https://openfile.meizu.com/group1/M00/07/86/Cgbj0V3UocyAR_tJAApbDmCAyEo620.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/70/Cgbj0F3UocyAURruAAvfFlYI_Jw940.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/86/Cgbj0V3UocuAQnbLAAnMkgV6hKs023.png680x680.jpg",
                  "https://openfile.meizu.com/group1/M00/07/86/Cgbj0V3UocyAR_tJAApbDmCAyEo620.png680x680.jpg",
              ],
          ],
      },
]
	

// 手机商品
let phoneList = [
    {
        id:1,
        name:"魅族 17",
        price:"2599",
        num:1,
        color:["十七度灰","梦幻独角兽"],
        model:["8+128GB","12+256GB"],
        disc:"Flyme8周年 6.23-6.27 每日前100名限量赠魅族HIFI解码耳放】5G旗舰 | 高通骁龙 865 + UFS 3.1 + LPDDR5 | 6400W 全场景 AR 专业影像系统 | 27W 无线超充 + 4500mAh 超大电池",
        image:"https://fms.res.meizu.com/dms/2020/06/29/4a4e236f-0b08-4de1-a017-a239c34ca296.png",
        images:[
            [
				"https://openfile.meizu.com/group1/M00/08/0B/Cgbj0V7gsjWAfxBJAAlp3c1WdI4793.png680x680.jpg",
				"https://openfile.meizu.com/group1/M00/07/D9/Cgbj0V6zwMWANhNKAAVfQwmOan4751.png680x680.jpg",
				"https://openfile.meizu.com/group1/M00/07/C3/Cgbj0F6zwMWAbCieAAZp0FbICJA179.png680x680.jpg",
				"https://openfile.meizu.com/group1/M00/07/D9/Cgbj0V6zwMWASoKjAAKhvZAJDTU118.png680x680.jpg",
            ],
			[
				"https://openfile.meizu.com/group1/M00/08/0B/Cgbj0V7gsjWAPF5rAAsOWBHfhMc030.png680x680.jpg",
				"https://openfile.meizu.com/group1/M00/07/F3/Cgbj0F7eH2SAdKD5AAHWtl1T9Ws790.jpg680x680.jpg",
				"https://openfile.meizu.com/group1/M00/08/09/Cgbj0V7gLWKAKFcnAAFyldULfZ0173.jpg680x680.jpg",
				"https://openfile.meizu.com/group1/M00/07/C4/Cgbj0F6zwM6AdEXLAALMpD5v_iE443.png680x680.jpg",
            ],
        ],
    },
    {
        id:2,
        name:"魅族 17 Pro",
        price:"2599",
        num:1,
        color:["定白","乌金"],
        model:["8+128GB","12+256GB"],
        disc:"5G旗舰 | 高通骁龙 865 + UFS 3.1 + LPDDR5 | 6400W 全场景 AR 专业影像系统",
        image:"https://fms.res.meizu.com/dms/2020/06/29/2eab78bd-5c70-4586-a65c-c6ce63db47a5.png",
        images:[
            [
				"https://openfile.meizu.com/group1/M00/07/F5/Cgbj0F7gskGAT8SdAAi5TCCOE2Y178.png680x680.jpg",
				"https://openfile.meizu.com/group1/M00/07/DB/Cgbj0V6zwU2ABpNtAAKi3BlPF4A270.png680x680.jpg",
				"https://openfile.meizu.com/group1/M00/07/DB/Cgbj0V6zwVOAYv3TAAYSY_fifOs397.png680x680.jpg",
				"https://openfile.meizu.com/group1/M00/07/C5/Cgbj0F6zwU-AE3JwAAJ3w5UUqH4853.png680x680.jpg",
            ],
			[
				"https://openfile.meizu.com/group1/M00/07/F5/Cgbj0F7gsjWARDOAAAmxMlGl-4w854.png680x680.jpg",
				"https://openfile.meizu.com/group1/M00/07/DA/Cgbj0V6zwTmAPwtyAAQ_qsF3bCA001.png680x680.jpg",
				"https://openfile.meizu.com/group1/M00/07/C5/Cgbj0F6zwTmARxAyAAYq4XcsnGk824.png680x680.jpg",
				"https://openfile.meizu.com/group1/M00/07/DA/Cgbj0V6zwTmAI0JaAAKLVXwYXgA321.png680x680.jpg",
            ],
        ],
    },
    {
        id:3,
        name:"锤子 坚果Pro3",
        price:"2599",
        num:1,
        color:["白色","黑色"],
        model:["6+128GB","8+256GB"],
        disc:" 骁龙855PLUS 4800万四摄 UFS3.0 全网通双卡双待 全面屏游戏手机",
        image:"//img12.360buyimg.com/n1/s450x450_jfs/t1/66331/6/14404/142578/5dba9d6fEe2829989/ec6d712eb5681881.jpg",
        images:[
            [
                "//img12.360buyimg.com/n1/s450x450_jfs/t1/66331/6/14404/142578/5dba9d6fEe2829989/ec6d712eb5681881.jpg",
				"//img12.360buyimg.com/n1/s450x450_jfs/t1/52046/22/14712/160659/5dba9d70Ef6e53038/59a7d2b2b08b8e96.jpg",
				"//img12.360buyimg.com/n1/s450x450_jfs/t1/102167/7/1208/40347/5dba9d70E51b1b958/61290abbb382f019.jpg",
				"//img12.360buyimg.com/n1/s450x450_jfs/t1/87697/12/1147/125607/5dba9d70Ebdc36e4e/2299abe25ea92441.jpg",
            ],
			[
				"//img10.360buyimg.com/n1/s450x450_jfs/t1/65204/28/14297/101555/5dba9c73E9fded3da/bc053e4776116e8d.jpg",
				"//img10.360buyimg.com/n1/s450x450_jfs/t1/64487/26/14144/95511/5dba9c7aE67ed1afe/9954b333af099e6f.jpg",
				"//img10.360buyimg.com/n1/s450x450_jfs/t1/58523/36/14656/40326/5dba9c7aEc4693db5/f7cfb64e35855cbe.jpg",
				"//img10.360buyimg.com/n1/s450x450_jfs/t1/104896/40/1107/82014/5dba9c7bE87485b51/0ef80cdbd567657a.jpg",
            ],
        ],
    },
    {
        id:4,
        name:"小米10",
        price:"3999",
        num:1,
        color:["冰海蓝","钛银黑"],
        model:["8+128GB","12+256GB"],
        disc:"超级夜景视频 65W超级闪充 视频超级防抖 双模5G 8GB+128GB 香芋紫 拍照游戏视频手机",
        image:"//img12.360buyimg.com/n1/s450x450_jfs/t1/91087/36/12227/66469/5e44f450E4a424f4e/7d23ad95ca25f0b4.jpg",
        images:[
            [
                "//img12.360buyimg.com/n1/s450x450_jfs/t1/91087/36/12227/66469/5e44f450E4a424f4e/7d23ad95ca25f0b4.jpg",
				"//img12.360buyimg.com/n1/s450x450_jfs/t1/101870/25/12102/62425/5e44f450E4f5a1904/d9c55b062bd08127.jpg",
				"//img12.360buyimg.com/n1/s450x450_jfs/t1/95503/4/12175/58894/5e44f451Ebeea84ff/b707e84b5a4a0e15.jpg",
				"//img12.360buyimg.com/n1/s450x450_jfs/t1/91861/25/12239/81146/5e44f451E83d44a10/720681164353c8c3.jpg",
            ],
			[
				"//img10.360buyimg.com/n1/s450x450_jfs/t1/86361/7/11985/71392/5e44016fE428a0d07/2cc211413b7f3a5e.jpg",
				"//img10.360buyimg.com/n1/s450x450_jfs/t1/92580/16/12161/71377/5e44016fE5449a079/02c0efda6e5e35a2.jpg",
				"//img10.360buyimg.com/n1/s450x450_jfs/t1/84733/6/12126/64735/5e44016fE3740583d/15454eb16166c5f2.jpg",
				"//img10.360buyimg.com/n1/s450x450_jfs/t1/96745/12/12241/90115/5e440170Ed390346c/fdd0c25e7cfcbf31.jpg",
            ],
        ],
    },
    {
        id:5,
        name:"Redmi K30",
        price:"1399",
        num:1,
        color:["花影惊鸿","深海微光"],
        model:["6+128GB","8+256GB"],
        disc:" 120Hz流速屏 前置挖孔双摄 索尼6400万后置四摄 4500mAh超长续航 27W快充 6GB+128GB 深海微光 游戏智能手机",
        image:"//img11.360buyimg.com/n1/s450x450_jfs/t1/106720/5/6864/102152/5df64dd3E54ef6db2/17cc73b43ad6538d.jpg",
        images:[
            [
                "//img11.360buyimg.com/n1/s450x450_jfs/t1/106720/5/6864/102152/5df64dd3E54ef6db2/17cc73b43ad6538d.jpg",
				"//img11.360buyimg.com/n1/s450x450_jfs/t1/90047/1/5532/66320/5dee48b6Eca2a5039/bb11cd2423899f6d.jpg",
				"//img11.360buyimg.com/n1/s450x450_jfs/t1/101086/22/5586/65372/5dee48c0Eb22827d4/dd71c06f50a02872.jpg",
				"//img11.360buyimg.com/n1/s450x450_jfs/t1/107028/30/5597/35744/5dee48d4E1c1b165a/9a1d468fb2bb625d.jpg",
            ],
			[
				"//img10.360buyimg.com/n1/s450x450_jfs/t1/101650/38/5462/106961/5dee4c74E9b771245/77b2ce4a20e19c14.jpg",
				"//img10.360buyimg.com/n1/s450x450_jfs/t1/96714/25/5710/71270/5dee4c7bEad088d27/555eed4f7ee440d8.jpg",
				"//img10.360buyimg.com/n1/s450x450_jfs/t1/97169/19/5564/65407/5dee4c82Efcb668df/74273fb161ba4b29.jpg",
				"//img10.360buyimg.com/n1/s450x450_jfs/t1/95358/39/5534/36396/5dee4c89E1f522d69/9a2d071c57698171.jpg",
            ],
        ],
    },
    {
        id:6,
        name:"荣耀30S",
        price:"2399",
        num:1,
        color:["幻夜黑","蝶羽白"],
        model:["8+128GB","12+256GB"],
        disc:"麒麟820 5G芯片 3倍光学变焦 20倍数字变焦 全网通版8GB+128GB",
        image:"//img10.360buyimg.com/n1/s450x450_jfs/t1/114717/38/6659/123673/5ebbd177Ed621712b/ccfec8fb9de3c859.jpg",
        images:[
            [
                "//img10.360buyimg.com/n1/s450x450_jfs/t1/114717/38/6659/123673/5ebbd177Ed621712b/ccfec8fb9de3c859.jpg",
				"//img10.360buyimg.com/n1/s450x450_jfs/t1/104018/13/16920/181871/5e82b0f6E5be5e54f/0ab7cafbcf056176.jpg",
				"//img10.360buyimg.com/n1/s450x450_jfs/t1/99149/8/17100/159112/5e82b0f7E7fa4014b/85eedc2e9168732d.jpg",
				"//img10.360buyimg.com/n1/s450x450_jfs/t1/109149/24/10700/135903/5e82b0f8E601e1b5b/0e37db59ae7e9dff.jpg",
            ],
			[
				"//img11.360buyimg.com/n1/s450x450_jfs/t1/101421/13/16891/174508/5e81d349E4dc56b48/ad947f87987e0b58.jpg",
				"//img12.360buyimg.com/n1/s450x450_jfs/t1/100763/15/16797/171525/5e81d413E6597624d/0233f324aceb37b4.jpg",
				"//img12.360buyimg.com/n1/s450x450_jfs/t1/89326/37/16930/123765/5e81d414Eb7d084fa/b5f5b939257dc321.jpg",
				"//img12.360buyimg.com/n1/s450x450_jfs/t1/92715/24/17076/75824/5e81d414E02785844/25937d4acfdbbbaf.jpg",
            ],
        ],
    },
    {
        id:7,
        name:"OPPO Reno4",
        price:"2999",
        num:1,
        color:["香芋紫","梦境黑"],
        model:["8+128GB","12+256GB"],
        disc:"超级夜景视频 65W超级闪充 视频超级防抖 双模5G 8GB+128GB 香芋紫 拍照游戏视频手机",
        image:"//img12.360buyimg.com/n1/s450x450_jfs/t1/139716/15/19/122395/5eda3663Ecc73aa7c/00232589a1d0d127.jpg",
        images:[
            [
                "//img12.360buyimg.com/n1/s450x450_jfs/t1/139716/15/19/122395/5eda3663Ecc73aa7c/00232589a1d0d127.jpg",
				"//img12.360buyimg.com/n1/s450x450_jfs/t1/125693/18/4247/102483/5eda3679Ef9e6a8c6/7f362bd6b3cd339e.jpg",
				"//img12.360buyimg.com/n1/s450x450_jfs/t1/132192/35/1513/38159/5eda3678E9974acc6/4424756dc60a9ede.jpg",
				"//img12.360buyimg.com/n1/s450x450_jfs/t1/129400/20/4209/102727/5eda3678Efdd8dc3a/b12f5d703eac4ca2.jpg",
            ],
			[
				"//img13.360buyimg.com/n1/s450x450_jfs/t1/111116/7/9484/289281/5eda3740E69af561f/1955b8937c34efe7.jpg",
				"//img13.360buyimg.com/n1/s450x450_jfs/t1/124579/38/4220/217310/5eda3740E911f95e7/382f2b0dfe57f2d1.jpg",
				"//img13.360buyimg.com/n1/s450x450_jfs/t1/127950/30/4263/208769/5eda374eE1c14065c/e2c6e6fa53cc5a0d.jpg",
				"//img13.360buyimg.com/n1/s450x450_jfs/t1/143216/2/21/85453/5eda374eEdeb4b16f/63289d5e127e1503.jpg",
            ],
        ],
    },
    {
        id:8,
        name:"vivo X50 Pro+",
        price:"4999",
        num:1,
        color:["驼色","引力"],
        model:["8+128GB","12+256GB"],
        disc:"超级夜景视频 65W超级闪充 视频超级防抖 双模5G 8GB+128GB 香芋紫 拍照游戏视频手机",
        image:"//img14.360buyimg.com/n1/jfs/t1/131080/28/3300/174174/5efaf01fE78446c28/3f8ca5f81efdccf9.jpg",
        images:[
            [
                "//img14.360buyimg.com/n1/jfs/t1/131080/28/3300/174174/5efaf01fE78446c28/3f8ca5f81efdccf9.jpg",
				"//img14.360buyimg.com/n1/jfs/t1/125381/15/6066/110701/5efaf01eE08e9452a/e10a569b31b8a509.jpg",
				"//img14.360buyimg.com/n1/jfs/t1/121085/18/6015/99994/5efaf01eEc5579976/ee716f177b7bdc80.jpg",
				"//img14.360buyimg.com/n1/jfs/t1/121252/25/5870/155045/5efaf01fE59e15707/1126c74c9fd29a15.jpg",
            ],
			[
				"//img12.360buyimg.com/n5/jfs/t1/139384/39/1751/388453/5efaefdaE048c658e/b9df50629ebeffa2.jpg",
				"//img12.360buyimg.com/n1/jfs/t1/124420/8/5833/222366/5efaefd9Ee53dbade/528f2bddfba13c12.jpg",
				"//img12.360buyimg.com/n1/jfs/t1/121514/21/5939/244467/5efaefdaE5fc6a352/ce0fb0f7b6b15e1e.jpg",
				"//img12.360buyimg.com/n1/jfs/t1/136889/5/3297/291157/5efaefdaEaaac023c/a57558cc2ba2db00.jpg",
            ],
        ],
    },
    {
        id:9,
        name:"一加 OnePlus 8 5G",
        price:"4599",
        num:1,
        color:["黑镜","青空"],
        model:["8+128GB","12+256GB"],
        disc:"5G旗舰 90Hz高清柔性屏 高通骁龙865 180g轻薄手感 12GB+256GB 青空 超清超广角拍照游戏手机",
        image:"https://img10.360buyimg.com/n7/jfs/t1/109397/31/12641/171206/5e984fe7E56b8e7a3/cf7a207c3de8c06e.jpg",
        images:[
            [
				"//img10.360buyimg.com/n1/s450x450_jfs/t1/109397/31/12641/171206/5e984fe7E56b8e7a3/cf7a207c3de8c06e.jpg",
				"//img10.360buyimg.com/n1/s450x450_jfs/t1/88089/1/18618/119566/5e984feaEfcd51054/afa25e6df49faeb9.jpg",
				"//img10.360buyimg.com/n1/s450x450_jfs/t1/115926/13/1483/86394/5e984febE9786793f/58cae592d9423609.jpg",
				"//img10.360buyimg.com/n1/s450x450_jfs/t1/90513/15/18790/104144/5e984febE6ec16159/9502a44635270fac.jpg",
            ],
			[
				"//img10.360buyimg.com/n1/s450x450_jfs/t1/100953/10/18879/154360/5e984fbdE3fde5353/6b945c956d405676.jpg",
				"//img10.360buyimg.com/n1/s450x450_jfs/t1/89768/15/18997/120335/5e984fbeEba1e1fe9/db5ae0145cafee0d.jpg",
				"//img10.360buyimg.com/n1/s450x450_jfs/t1/104522/3/18976/59857/5e984fbeEfbf68a0b/4c476f5153c6f045.jpg",
				"//img10.360buyimg.com/n1/s450x450_jfs/t1/108082/27/12605/102819/5e984fbfE22a454ec/e5c5652740227654.jpg",
            ],
        ],
    },
    {
        id:10,
        name:"Apple iPhone 11",
        price:"4499",
        num:1,
        color:["白色","黑色"],
        model:["64GB","128GB"],
        disc:"移动联通电信4G手机 双卡双待",
        image:"//img13.360buyimg.com/n1/s450x450_jfs/t1/54404/36/10321/461156/5d7850f0E7442d9cf/0204c7ca158eb21e.png",
        images:[
            [
                "//img13.360buyimg.com/n1/s450x450_jfs/t1/54404/36/10321/461156/5d7850f0E7442d9cf/0204c7ca158eb21e.png",
				"//img13.360buyimg.com/n1/s450x450_jfs/t1/66891/2/9891/113932/5d784faaE7696910f/c1328578ecdab9fc.jpg",
				"//img13.360buyimg.com/n1/s450x450_jfs/t1/53266/29/10441/124863/5d784faaE36dc9d4d/0257ed851fa3dbc9.jpg",
				"//img13.360buyimg.com/n1/s450x450_jfs/t1/53285/10/10294/193427/5d784fabE76675f92/40d104e207fb6aa4.jpg",
            ],
			[
				"//img14.360buyimg.com/n1/s450x450_jfs/t1/84664/10/8027/423188/5d7850efE88aacdfb/1a4f22766f0ed618.png",
				"//img14.360buyimg.com/n1/s450x450_jfs/t1/62947/17/9879/104411/5d784fa9E70a15fec/30c7b84d3d1c6297.jpg",
				"//img14.360buyimg.com/n1/s450x450_jfs/t1/62691/2/9884/135043/5d784fa9E2f7e28fc/fce797577b4e08e0.jpg",
				"//img14.360buyimg.com/n1/s450x450_jfs/t1/56333/4/10490/192102/5d784faaEb7d6c7ea/8205fe9c61c59d02.jpg",
            ],
        ],
    },
    {
        id:11,
        name:"魅族 17",
        price:"2599",
        num:1,
        color:["十七度灰","梦幻独角兽"],
        model:["8+128GB","12+256GB"],
        disc:"Flyme8周年 6.23-6.27 每日前100名限量赠魅族HIFI解码耳放】5G旗舰 | 高通骁龙 865 + UFS 3.1 + LPDDR5 | 6400W 全场景 AR 专业影像系统 | 27W 无线超充 + 4500mAh 超大电池",
        image:"https://fms.res.meizu.com/dms/2020/06/29/4a4e236f-0b08-4de1-a017-a239c34ca296.png",
        images:[
            [
				"https://openfile.meizu.com/group1/M00/08/0B/Cgbj0V7gsjWAfxBJAAlp3c1WdI4793.png680x680.jpg",
				"https://openfile.meizu.com/group1/M00/07/D9/Cgbj0V6zwMWANhNKAAVfQwmOan4751.png680x680.jpg",
				"https://openfile.meizu.com/group1/M00/07/C3/Cgbj0F6zwMWAbCieAAZp0FbICJA179.png680x680.jpg",
				"https://openfile.meizu.com/group1/M00/07/D9/Cgbj0V6zwMWASoKjAAKhvZAJDTU118.png680x680.jpg",
            ],
			[
				"https://openfile.meizu.com/group1/M00/08/0B/Cgbj0V7gsjWAPF5rAAsOWBHfhMc030.png680x680.jpg",
				"https://openfile.meizu.com/group1/M00/07/F3/Cgbj0F7eH2SAdKD5AAHWtl1T9Ws790.jpg680x680.jpg",
				"https://openfile.meizu.com/group1/M00/08/09/Cgbj0V7gLWKAKFcnAAFyldULfZ0173.jpg680x680.jpg",
				"https://openfile.meizu.com/group1/M00/07/C4/Cgbj0F6zwM6AdEXLAALMpD5v_iE443.png680x680.jpg",
            ],
        ],
    },
    {
        id:12,
        name:"魅族 17 Pro",
        price:"2599",
        num:1,
        color:["定白","乌金"],
        model:["8+128GB","12+256GB"],
        disc:"5G旗舰 | 高通骁龙 865 + UFS 3.1 + LPDDR5 | 6400W 全场景 AR 专业影像系统",
        image:"https://fms.res.meizu.com/dms/2020/06/29/2eab78bd-5c70-4586-a65c-c6ce63db47a5.png",
        images:[
            [
				"https://openfile.meizu.com/group1/M00/07/F5/Cgbj0F7gskGAT8SdAAi5TCCOE2Y178.png680x680.jpg",
				"https://openfile.meizu.com/group1/M00/07/DB/Cgbj0V6zwU2ABpNtAAKi3BlPF4A270.png680x680.jpg",
				"https://openfile.meizu.com/group1/M00/07/DB/Cgbj0V6zwVOAYv3TAAYSY_fifOs397.png680x680.jpg",
				"https://openfile.meizu.com/group1/M00/07/C5/Cgbj0F6zwU-AE3JwAAJ3w5UUqH4853.png680x680.jpg",
            ],
			[
				"https://openfile.meizu.com/group1/M00/07/F5/Cgbj0F7gsjWARDOAAAmxMlGl-4w854.png680x680.jpg",
				"https://openfile.meizu.com/group1/M00/07/DA/Cgbj0V6zwTmAPwtyAAQ_qsF3bCA001.png680x680.jpg",
				"https://openfile.meizu.com/group1/M00/07/C5/Cgbj0F6zwTmARxAyAAYq4XcsnGk824.png680x680.jpg",
				"https://openfile.meizu.com/group1/M00/07/DA/Cgbj0V6zwTmAI0JaAAKLVXwYXgA321.png680x680.jpg",
            ],
        ],
    },
    {
        id:13,
        name:"锤子 坚果Pro3",
        price:"2599",
        num:1,
        color:["白色","黑色"],
        model:["6+128GB","8+256GB"],
        disc:" 骁龙855PLUS 4800万四摄 UFS3.0 全网通双卡双待 全面屏游戏手机",
        image:"//img12.360buyimg.com/n1/s450x450_jfs/t1/66331/6/14404/142578/5dba9d6fEe2829989/ec6d712eb5681881.jpg",
        images:[
            [
                "//img12.360buyimg.com/n1/s450x450_jfs/t1/66331/6/14404/142578/5dba9d6fEe2829989/ec6d712eb5681881.jpg",
				"//img12.360buyimg.com/n1/s450x450_jfs/t1/52046/22/14712/160659/5dba9d70Ef6e53038/59a7d2b2b08b8e96.jpg",
				"//img12.360buyimg.com/n1/s450x450_jfs/t1/102167/7/1208/40347/5dba9d70E51b1b958/61290abbb382f019.jpg",
				"//img12.360buyimg.com/n1/s450x450_jfs/t1/87697/12/1147/125607/5dba9d70Ebdc36e4e/2299abe25ea92441.jpg",
            ],
			[
				"//img10.360buyimg.com/n1/s450x450_jfs/t1/65204/28/14297/101555/5dba9c73E9fded3da/bc053e4776116e8d.jpg",
				"//img10.360buyimg.com/n1/s450x450_jfs/t1/64487/26/14144/95511/5dba9c7aE67ed1afe/9954b333af099e6f.jpg",
				"//img10.360buyimg.com/n1/s450x450_jfs/t1/58523/36/14656/40326/5dba9c7aEc4693db5/f7cfb64e35855cbe.jpg",
				"//img10.360buyimg.com/n1/s450x450_jfs/t1/104896/40/1107/82014/5dba9c7bE87485b51/0ef80cdbd567657a.jpg",
            ],
        ],
    },
    {
        id:14,
        name:"小米10",
        price:"3999",
        num:1,
        color:["冰海蓝","钛银黑"],
        model:["8+128GB","12+256GB"],
        disc:"超级夜景视频 65W超级闪充 视频超级防抖 双模5G 8GB+128GB 香芋紫 拍照游戏视频手机",
        image:"//img12.360buyimg.com/n1/s450x450_jfs/t1/91087/36/12227/66469/5e44f450E4a424f4e/7d23ad95ca25f0b4.jpg",
        images:[
            [
                "//img12.360buyimg.com/n1/s450x450_jfs/t1/91087/36/12227/66469/5e44f450E4a424f4e/7d23ad95ca25f0b4.jpg",
				"//img12.360buyimg.com/n1/s450x450_jfs/t1/101870/25/12102/62425/5e44f450E4f5a1904/d9c55b062bd08127.jpg",
				"//img12.360buyimg.com/n1/s450x450_jfs/t1/95503/4/12175/58894/5e44f451Ebeea84ff/b707e84b5a4a0e15.jpg",
				"//img12.360buyimg.com/n1/s450x450_jfs/t1/91861/25/12239/81146/5e44f451E83d44a10/720681164353c8c3.jpg",
            ],
			[
				"//img10.360buyimg.com/n1/s450x450_jfs/t1/86361/7/11985/71392/5e44016fE428a0d07/2cc211413b7f3a5e.jpg",
				"//img10.360buyimg.com/n1/s450x450_jfs/t1/92580/16/12161/71377/5e44016fE5449a079/02c0efda6e5e35a2.jpg",
				"//img10.360buyimg.com/n1/s450x450_jfs/t1/84733/6/12126/64735/5e44016fE3740583d/15454eb16166c5f2.jpg",
				"//img10.360buyimg.com/n1/s450x450_jfs/t1/96745/12/12241/90115/5e440170Ed390346c/fdd0c25e7cfcbf31.jpg",
            ],
        ],
    },
    {
        id:15,
        name:"Redmi K30",
        price:"1399",
        num:1,
        color:["花影惊鸿","深海微光"],
        model:["6+128GB","8+256GB"],
        disc:" 120Hz流速屏 前置挖孔双摄 索尼6400万后置四摄 4500mAh超长续航 27W快充 6GB+128GB 深海微光 游戏智能手机",
        image:"//img11.360buyimg.com/n1/s450x450_jfs/t1/106720/5/6864/102152/5df64dd3E54ef6db2/17cc73b43ad6538d.jpg",
        images:[
            [
                "//img11.360buyimg.com/n1/s450x450_jfs/t1/106720/5/6864/102152/5df64dd3E54ef6db2/17cc73b43ad6538d.jpg",
				"//img11.360buyimg.com/n1/s450x450_jfs/t1/90047/1/5532/66320/5dee48b6Eca2a5039/bb11cd2423899f6d.jpg",
				"//img11.360buyimg.com/n1/s450x450_jfs/t1/101086/22/5586/65372/5dee48c0Eb22827d4/dd71c06f50a02872.jpg",
				"//img11.360buyimg.com/n1/s450x450_jfs/t1/107028/30/5597/35744/5dee48d4E1c1b165a/9a1d468fb2bb625d.jpg",
            ],
			[
				"//img10.360buyimg.com/n1/s450x450_jfs/t1/101650/38/5462/106961/5dee4c74E9b771245/77b2ce4a20e19c14.jpg",
				"//img10.360buyimg.com/n1/s450x450_jfs/t1/96714/25/5710/71270/5dee4c7bEad088d27/555eed4f7ee440d8.jpg",
				"//img10.360buyimg.com/n1/s450x450_jfs/t1/97169/19/5564/65407/5dee4c82Efcb668df/74273fb161ba4b29.jpg",
				"//img10.360buyimg.com/n1/s450x450_jfs/t1/95358/39/5534/36396/5dee4c89E1f522d69/9a2d071c57698171.jpg",
            ],
        ],
    },
    {
        id:6,
        name:"荣耀30S",
        price:"2399",
        num:1,
        color:["幻夜黑","蝶羽白"],
        model:["8+128GB","12+256GB"],
        disc:"麒麟820 5G芯片 3倍光学变焦 20倍数字变焦 全网通版8GB+128GB",
        image:"//img10.360buyimg.com/n1/s450x450_jfs/t1/114717/38/6659/123673/5ebbd177Ed621712b/ccfec8fb9de3c859.jpg",
        images:[
            [
                "//img10.360buyimg.com/n1/s450x450_jfs/t1/114717/38/6659/123673/5ebbd177Ed621712b/ccfec8fb9de3c859.jpg",
				"//img10.360buyimg.com/n1/s450x450_jfs/t1/104018/13/16920/181871/5e82b0f6E5be5e54f/0ab7cafbcf056176.jpg",
				"//img10.360buyimg.com/n1/s450x450_jfs/t1/99149/8/17100/159112/5e82b0f7E7fa4014b/85eedc2e9168732d.jpg",
				"//img10.360buyimg.com/n1/s450x450_jfs/t1/109149/24/10700/135903/5e82b0f8E601e1b5b/0e37db59ae7e9dff.jpg",
            ],
			[
				"//img11.360buyimg.com/n1/s450x450_jfs/t1/101421/13/16891/174508/5e81d349E4dc56b48/ad947f87987e0b58.jpg",
				"//img12.360buyimg.com/n1/s450x450_jfs/t1/100763/15/16797/171525/5e81d413E6597624d/0233f324aceb37b4.jpg",
				"//img12.360buyimg.com/n1/s450x450_jfs/t1/89326/37/16930/123765/5e81d414Eb7d084fa/b5f5b939257dc321.jpg",
				"//img12.360buyimg.com/n1/s450x450_jfs/t1/92715/24/17076/75824/5e81d414E02785844/25937d4acfdbbbaf.jpg",
            ],
        ],
    },
];


// 生活周边商品
let lifeList = [
    {
      id: 1,
      name: 'Lifeme 双肩包',
      price: '299',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: '创新外观设计 | 扩容超大容量 | 人体工学背负 | 轻盈减负重量 | 颜值安全插扣 | 相机包新搭配',    
      image: '//openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
            ],
        ],
    },
    {
      id: 2,
      name: 'Pandaer 「17」系列 T恤',
      price: '269',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: '【APP限时抢购149元】潮酷印花 | 丝绸手感 | 100％长绒棉',
      image: '//openfile.meizu.com/group1/M00/07/DD/Cgbj0V6z7k-AUrRgAAQ7fTJQLLI525.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/DD/Cgbj0V6z7k-AUrRgAAQ7fTJQLLI525.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C8/Cgbj0F6z7k-APqBeAANFsWchns4930.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DD/Cgbj0V6z7k-AUrRgAAQ7fTJQLLI525.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C8/Cgbj0F6z7k-APqBeAANFsWchns4930.png680x680.jpg",
            ],
        ],
    },
    {
      id: 3,
      name: 'Pandaer 「17」系列 果冻包',
      price: '99',
      num: 1,
      color:['蓝色'],
      model:['普通'],
      disc: '潮酷印花 | 超大容量 | 透亮设计',
      image: '//openfile.meizu.com/group1/M00/07/E7/Cgbj0V61KNCAUduZAAqsAnm8x-0400.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/E7/Cgbj0V61KNCAUduZAAqsAnm8x-0400.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/CB/Cgbj0F6z8ZiAZW1-AAYfYOQ0G-Y047.jpg680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/E7/Cgbj0V61KNCAUduZAAqsAnm8x-0400.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/CB/Cgbj0F6z8ZiAZW1-AAYfYOQ0G-Y047.jpg680x680.jpg",
            ],
        ],
    },
    {
      id: 4,
      name: 'Lifeme 相机包',
      price: '129',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: '相机包新搭配 | 一机两镜超大容量 | 加厚防冲击材料',
      image: '//openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z74aAO--aAAYHfnMzL1U910.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z74aAO--aAAYHfnMzL1U910.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z74aAbe04AA18EMFZLTk365.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z74aAO--aAAYHfnMzL1U910.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z74aAbe04AA18EMFZLTk365.png680x680.jpg",
            ],
        ],
    },
    {
      id: 5,
      name: '魅族防飞溅声波电动牙刷',
      price: '299',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: '【APP限时抢购219元】智能压感防飞溅 | 超强震动清洁 | FDA 杜邦软毛 | 30天超长续航  | IPX7级防水全身防霉防污垢 | 四种模式全面呵护 ',
      image: '//openfile.meizu.com/group1/M00/07/78/Cgbj0V2unKeALop5AAGkXjbP1nY517.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/78/Cgbj0V2unKeALop5AAGkXjbP1nY517.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/61/Cgbj0F2unKeAOX56AAGPKCChxXg324.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/60/Cgbj0F2unKCAfvY1AAK0bbUdWPA878.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/78/Cgbj0V2unKeALop5AAGkXjbP1nY517.png680x680.jpg",
            ],
        ],
    },
    {
      id: 6,
      name: '魅族极简都市双肩包',
      price: '179',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: '【APP限时抢购129元】650D高耐磨牛津布 | 人体工学减负设计 | 大容量多功能收纳 | 生活防泼溅',    
      image: '//openfile.meizu.com/group1/M00/07/28/Cgbj0Vy9J36ARuB2AAVQph9X9vs749.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
            ],
        ],
    },
    {
      id: 7,
      name: 'Pandaer readnap T恤',
      price: '199',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: '潮趣设计 | 100％精织纯棉 | 多重潮流工艺 | Mixcolor混色搭配 | 情侣装',
      image: '//openfile.meizu.com/group1/M00/07/66/Cgbj0V1mIcGAfsr1AAyHfC16kLQ799.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/DD/Cgbj0V6z7k-AUrRgAAQ7fTJQLLI525.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C8/Cgbj0F6z7k-APqBeAANFsWchns4930.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DD/Cgbj0V6z7k-AUrRgAAQ7fTJQLLI525.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C8/Cgbj0F6z7k-APqBeAANFsWchns4930.png680x680.jpg",
            ],
        ],
    },
    {
      id: 8,
      name: 'Pandaer 魔术师帽衫',
      price: '399',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: 'Magic Pandaer前卫设计 | 100％精梳棉纱 | 潮流款式 挺括有型 | 亲肤内衬 柔顺舒适 | 情侣装', 
      image: '//openfile.meizu.com/group1/M00/07/7C/Cgbj0V2vva6AOk-vAAuUyJ3QsAo839.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/DD/Cgbj0V6z7k-AUrRgAAQ7fTJQLLI525.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C8/Cgbj0F6z7k-APqBeAANFsWchns4930.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DD/Cgbj0V6z7k-AUrRgAAQ7fTJQLLI525.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C8/Cgbj0F6z7k-APqBeAANFsWchns4930.png680x680.jpg",
            ],
        ],
    },
    {
      id: 9,
      name:'Flyme 8 暗夜流光卫衣',
      price:'269',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc:'Flyme原创 | 镭射材料 | 随光而动 | 暗夜微光 | 点亮梦想 |  情侣装',
      image: '//openfile.meizu.com/group1/M00/07/6A/Cgbj0F2yXrSAaUXKAA7Db1JnKHs624.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/DD/Cgbj0V6z7k-AUrRgAAQ7fTJQLLI525.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C8/Cgbj0F6z7k-APqBeAANFsWchns4930.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DD/Cgbj0V6z7k-AUrRgAAQ7fTJQLLI525.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C8/Cgbj0F6z7k-APqBeAANFsWchns4930.png680x680.jpg",
            ],
        ],
    },
    {
      id: 10,
      name: 'Lifeme 梨木伞',
      price: '499',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: '【APP超值砍价低至389元】高定时装压花伞布 | 隔绝99% UV | 进口环保拒水涂层 | 8骨静音防风伞架 | 千足纯银徽章 | 优质花梨木伞柄',
      image: '//openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2T6AK4g2AAV30_p6ODA499.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2T6AK4g2AAV30_p6ODA499.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2TiAXHiUAATjIGPbhog398.jpg680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2TiAQkFiAASfYc5SfLE971.jpg680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2TeAKNjjAAQq0MX5DXQ504.jpg680x680.jpg",
            ],
        ],
    },
    {
      id: 11,
      name: '【APP限时抢购】-魅族极简都市双肩包',
      price: '129',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: '650D高耐磨牛津布 | 人体工学减负设计 | 大容量多功能收纳 | 生活防泼溅',
      image: '//openfile.meizu.com/group1/M00/07/28/Cgbj0Vy9J36ARuB2AAVQph9X9vs749.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
            ],
        ],
    },
    {
      id: 12,
      name: 'Pandaer 鼠年圆领卫衣',
      price: '199',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: '【珍稀现货】金鼠限定/ 优质棉料 / 挺括亲肤 / 保暖舒适 / 情侣装',
      image: '//openfile.meizu.com/group1/M00/07/91/Cgbj0F4X4CyAapL_AAZDZGCy0nE802.jpg@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/91/Cgbj0F4X4CyAapL_AAZDZGCy0nE802.jpg680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/91/Cgbj0F4X4CaADNSYAAb8WZuj9-c404.jpg680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/A7/Cgbj0V4X4CeAPr67AAfATDYeM-c030.jpg680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/91/Cgbj0F4X4CyAapL_AAZDZGCy0nE802.jpg680x680.jpg",
            ],
        ],
    },
    {
      id: 13,
      name: '【魅友家10周年活动】-魅族极简都市双肩包',
      price: '179',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: '650D高耐磨牛津布 | 人体工学减负设计 | 大容量多功能收纳 | 生活防泼溅',
      image: '//openfile.meizu.com/group1/M00/07/28/Cgbj0Vy9J36ARuB2AAVQph9X9vs749.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
            ],
        ],
    },
    {
      id: 14,
      name: '【Flyme 8周年】-Flyme 8 暗夜流光卫衣',
      price: '269',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: 'Flyme原创 | 镭射材料 | 随光而动 | 暗夜微光 | 点亮梦想 |  情侣装',
      image: '//openfile.meizu.com/group1/M00/07/6A/Cgbj0F2yXrSAaUXKAA7Db1JnKHs624.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
            ],
        ],
    },
    {
      id: 15,
      name: '【Flyme 8周年】-Pandaer 魔术师帽衫',
      price: '399',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: 'Magic Pandaer前卫设计 | 100％精梳棉纱 | 潮流款式 挺括有型 | 亲肤内衬 柔顺舒适 | 情侣装', 
      image: '//openfile.meizu.com/group1/M00/07/7C/Cgbj0V2vva6AOk-vAAuUyJ3QsAo839.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
            ],
        ],
    },
    {
      id: 16,
      name: '【魅友家10周年】魅族防飞溅声波电动牙刷',
      price: '299',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: '智能压感防飞溅 | 超强震动清洁 | FDA 杜邦软毛 | 30天超长续航  | IPX7 级防水全身防霉防污垢 | 四种模式全面呵护 ',
      image: '//openfile.meizu.com/group1/M00/07/78/Cgbj0V2unKeALop5AAGkXjbP1nY517.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
            ],
        ],
    },
    {
      id: 17,
      name: '【魅友家10周年活动】-Lifeme 双肩包',
      price: '299',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: '创新外观设计 | 扩容超大容量 | 人体工学背负 | 轻盈减负重量 | 颜值安全插扣 | 相机包新搭配',    
      image: '//openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
            ],
        ],
    },
    {
      id: 18,
      name: '【魅友家10周年】-Pandaer 「17」系列 T恤',
      price: '269',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: '潮酷印花 | 丝绸手感 | 100％长绒棉',
      image: '//openfile.meizu.com/group1/M00/07/DD/Cgbj0V6z7k-AUrRgAAQ7fTJQLLI525.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
            ],
        ],
    },
    {
      id: 19,
      name: '2020福来我发新春大礼盒',
      price: '488',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: 'Flyme 原创设计/ 鼠年春节套装 / 复古潮流 / 棒球衫 / 怀旧礼包 / 情侣装',
      image: '//openfile.meizu.com/group1/M00/07/91/Cgbj0F4X4YaALZSJAAdI8KKxN_E650.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
            ],
        ],
    },
    {
      id: 20,
      name: '魅族星球探索 帆布袋',
      price: '69',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: '星球无限 追求不止',
      image: '//openfile.meizu.com/group1/M00/07/2A/Cgbj0FzvONaAARlRAAo8uxn8y20301.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
            ],
        ],
    },
    {
      id: 21,
      name: '魅族星球探索 鼠标垫',
      price: '69',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: '星球无限 追求不止',
      image: '//openfile.meizu.com/group1/M00/07/41/Cgbj0VzvODSALJ3OAA3y2fvxTuA532.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
            ],
        ],
    },
    {
      id: 22,
      name: '魅族 Mini 线控自拍杆',
      price: '59',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: '轻巧迷你 自在随心',
      image: '//openfile.meizu.com/group1/M00/01/3A/CnQOjVjJ-m2AQ1LxAAE3Ze4d72s837.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
            ],
        ],
    },
    {
      id: 23,
      name: '魅族路由器 极速版',
      price: '199',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: '天生不凡 快狠稳',
      image: '//storeimg.meizu.com/product/1465698264-58364.jpg@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
            ],
        ],
    }
  ]

// 声学商品
let musicList = [
    {
      id: 1,
      name: 'HD60 降噪耳机',
      price: '1099',
      num: 1,
      color:["普通"],
      model:['普通'],
      disc: '索尼主动降噪芯片 | 40mm镀铍振膜 | 触控操作 | USB - C 快充 | 轻奢品质',
      image: '//openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8VSAV6kEAAlCc-omYno614.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8VSAV6kEAAlCc-omYno614.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/CB/Cgbj0F6z8U6AHC0LAAuckwCET9o903.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/CB/Cgbj0F6z8U2AXF4DAAcpgTobedU040.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8VSAV6kEAAlCc-omYno614.png680x680.jpg",
            ],
        ],
    },
    {
      id: 2,
      name: 'POP2 真无线蓝牙耳机',
      price: '399',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: '【APP限时抢购319元】蓝牙5.0 | 单次8H续航 | 石墨烯振膜 | 双耳通话 | 轻触操作 | 轻盈舒适', 
      image: '//openfile.meizu.com/group1/M00/07/28/Cgbj0Vy9Jq6AEzhMAApuih_4TPw329.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/28/Cgbj0Vy9Jq6AEzhMAApuih_4TPw329.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/28/Cgbj0Vy9Jq2APvH6AAdH__FYS70825.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/11/Cgbj0Fy9JrWAQoMcAAWBvkANrpk395.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/28/Cgbj0Vy9Jq6AEzhMAApuih_4TPw329.png680x680.jpg",
            ],
        ],
    },
    {
      id: 3,
      name: 'HIFI 解码耳放',
      price: '169',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: '【APP限时抢购129元】高性能DAC芯片 | 纯净HiFi音质 | 600Ω高阻抗推力 | Type-C 转接线 | 音乐 发烧友必备',
      image: '//openfile.meizu.com/group1/M00/07/2F/Cgbj0Vy_C3GAN_TKAAExaPfTwFc180.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C9/Cgbj0F6z7uiADhqnAApBr0HxF4I075.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8VSAV6kEAAlCc-omYno614.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/CB/Cgbj0F6z8U6AHC0LAAuckwCET9o903.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/CB/Cgbj0F6z8U2AXF4DAAcpgTobedU040.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8VSAV6kEAAlCc-omYno614.png680x680.jpg",
            ],
        ],
    },
    {
      id: 4,
      name: 'EP3C 耳机',
      price: '129',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: 'Hi-Res 认证高解析音质 | Type-C数字接口 | 高保真生物纤维振膜',
      image: '//openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2ieAYKJGAAHMHuLWRMo374.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2ieAYKJGAAHMHuLWRMo374.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2iKAKjwrAAHAx8jFFTk555.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKAB_CgAAFYVMIuGWI946.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKARn8bAAHUerweWa8059.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2ieAYKJGAAHMHuLWRMo374.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2iKAKjwrAAHAx8jFFTk555.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKAB_CgAAFYVMIuGWI946.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKARn8bAAHUerweWa8059.png680x680.jpg",
            ],
        ],
    },
    {
      id: 5,
      name: 'EP63NC 无线降噪耳机',
      price: '399',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: '【APP限时抢购309元】AMS 芯片智能降噪 | Qualcomm apt-X™ 高清音质 | 蓝牙一拖二连接 | 11小时超长续航 | 快充15分钟畅听3小时',
      image: '//openfile.meizu.com/group1/M00/07/10/Cgbj0Fy9JYOACw2DAAMWf3vEhbA886.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2ieAYKJGAAHMHuLWRMo374.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2iKAKjwrAAHAx8jFFTk555.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKAB_CgAAFYVMIuGWI946.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKARn8bAAHUerweWa8059.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/10/Cgbj0Fy9JYOACw2DAAMWf3vEhbA886.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/27/Cgbj0Vy9JX2AdgAuAAOcCBrZLcE823.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/27/Cgbj0Vy9JX2AZqPjAAOzzlpRVmE254.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/10/Cgbj0Fy9JX2AUGHJAAHx3V4UJwQ108.png680x680.jpg",
            ],
        ],
    },
    {
      id: 6,
      name: 'HD60 头戴式蓝牙耳机',
      price: '499',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: '【APP限时抢购399元】40mm生物振膜  | Type-C充电 | 触控操作 | 蓝牙5.0 | 轻奢品质',
      image: '//openfile.meizu.com/group1/M00/07/86/Cgbj0V3UocyAR_tJAApbDmCAyEo620.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2ieAYKJGAAHMHuLWRMo374.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2iKAKjwrAAHAx8jFFTk555.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKAB_CgAAFYVMIuGWI946.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKARn8bAAHUerweWa8059.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/86/Cgbj0V3UocyAR_tJAApbDmCAyEo620.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/70/Cgbj0F3UocyAURruAAvfFlYI_Jw940.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/86/Cgbj0V3UocuAQnbLAAnMkgV6hKs023.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/86/Cgbj0V3UocyAR_tJAApbDmCAyEo620.png680x680.jpg",
            ],
        ],
    },
    {
      id: 7,
      name: 'EP21耳机',
      price: '39',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: '三键一体式线控 | 3.5mm接口 ',
      image: '//storeimg.meizu.com/product/1449643421-24522.png@480x480.jpg',
	  images:[
        [
            "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2ieAYKJGAAHMHuLWRMo374.png680x680.jpg",
            "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2iKAKjwrAAHAx8jFFTk555.png680x680.jpg",
            "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKAB_CgAAFYVMIuGWI946.png680x680.jpg",
            "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKARn8bAAHUerweWa8059.png680x680.jpg",
        ],
            [
                "https://storeimg.meizu.com/product/1449643421-24522.png@680x680.jpg",
                "https://storeimg.meizu.com/product/1449643546-44345.png@680x680.jpg",
                "https://storeimg.meizu.com/product/1449643635-44506.png@680x680.jpg",
                "https://storeimg.meizu.com/product/1449643421-24522.png@680x680.jpg",
            ],
        ],
    },
    {
      id: 8,
      name: 'HALO 激光蓝牙耳机',
      price: '499',
      num: 1,
      color:['红色','蓝色'],
      model:['普通'],
      disc: '炫酷夜跑神器 随性张扬',
      image: '//openfile.meizu.com/group1/M00/04/17/Cgbj0VrcX6yABHxPAARZwWUAjc4748.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/04/17/Cgbj0VrcX6yABHxPAARZwWUAjc4748.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/04/16/Cgbj0VrcX6OAAW6lAAPIqwaY3Yk458.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/06/E1/Cgbj0VwA5jCAVNq3AARxYwtsFeI008.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/06/D1/Cgbj0FwA5K6AdeU_AAorDn3t-Vs866.jpg680x680.jpg",
            ],
			[
                "https://openfile.meizu.com/group1/M00/04/08/Cgbj0FrcX6iAfZfmAARPvQUH0FM087.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/04/16/Cgbj0VrcX6OAAW6lAAPIqwaY3Yk458.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/06/E1/Cgbj0VwA5AuAIu01AA7Zqhqlg9I506.jpg680x680.jpg",
                "https://openfile.meizu.com/group1/M00/06/D1/Cgbj0FwA5K6AdeU_AAorDn3t-Vs866.jpg680x680.jpg",
            ],
        ],
    },
    {
      id: 9,
      name: 'EP52 Lite 蓝牙耳机',
      price: '129',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: '轻巧亲肤 | 生物纤维振膜 | 8小时续航 | IPX5级防水',
      image: '//openfile.meizu.com/group1/M00/06/97/Cgbj0Fui_-OAIlOuAAIlimOCLcA452.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2ieAYKJGAAHMHuLWRMo374.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2iKAKjwrAAHAx8jFFTk555.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKAB_CgAAFYVMIuGWI946.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKARn8bAAHUerweWa8059.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8VSAV6kEAAlCc-omYno614.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/CB/Cgbj0F6z8U6AHC0LAAuckwCET9o903.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/CB/Cgbj0F6z8U2AXF4DAAcpgTobedU040.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8VSAV6kEAAlCc-omYno614.png680x680.jpg",
            ],
        ],
    },
    {
      id: 10,
      name: 'HiFi 解码耳放 PRO',
      price: '269',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: '性能DAC芯片 | 超强二级运放 | Hi-Res 认证高解析音质 | 高阻抗推力 | Type-C转接线',
      image: '//openfile.meizu.com/group1/M00/07/4C/Cgbj0F1l4LyAR44oAAJKhE-uRA8619.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2ieAYKJGAAHMHuLWRMo374.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2iKAKjwrAAHAx8jFFTk555.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKAB_CgAAFYVMIuGWI946.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKARn8bAAHUerweWa8059.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8VSAV6kEAAlCc-omYno614.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/CB/Cgbj0F6z8U6AHC0LAAuckwCET9o903.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/CB/Cgbj0F6z8U2AXF4DAAcpgTobedU040.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8VSAV6kEAAlCc-omYno614.png680x680.jpg",
            ],
        ],
    },
    {
      id: 11,
      name: 'LIVE 四单元动铁耳机',
      price: '1099',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: 'Knowles四动铁 双通道导音系统 现场级音乐表现',
      image: '//openfile.meizu.com/group1/M00/02/EF/Cgbj0FpeqaKAYLSmAATXqR4BPH8829.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2ieAYKJGAAHMHuLWRMo374.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2iKAKjwrAAHAx8jFFTk555.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKAB_CgAAFYVMIuGWI946.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKARn8bAAHUerweWa8059.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8VSAV6kEAAlCc-omYno614.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/CB/Cgbj0F6z8U6AHC0LAAuckwCET9o903.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/CB/Cgbj0F6z8U2AXF4DAAcpgTobedU040.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8VSAV6kEAAlCc-omYno614.png680x680.jpg",
            ],
        ],
    },
    {
      id: 12,
      name: 'UR 高端定制耳机  预约',
      price: '200',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: '【预约专用】私人定制，为你而声',
      image: '//openfile.meizu.com/group1/M00/07/4D/Cgbj0F1l7zeAFyLsAAZJk_cF8Tk126.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2ieAYKJGAAHMHuLWRMo374.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2iKAKjwrAAHAx8jFFTk555.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKAB_CgAAFYVMIuGWI946.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKARn8bAAHUerweWa8059.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8VSAV6kEAAlCc-omYno614.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/CB/Cgbj0F6z8U6AHC0LAAuckwCET9o903.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/CB/Cgbj0F6z8U2AXF4DAAcpgTobedU040.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8VSAV6kEAAlCc-omYno614.png680x680.jpg",
            ],
        ],
    },
    {
      id: 13,
      name: 'EP2X 耳机',
      price: '69',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: '一体式线控 | 3.5mm接口 | 流线设计',
      image: '//openfile.meizu.com/group1/M00/00/A2/Cix_s1gcTHCANftiAAErzSizI8c299.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2ieAYKJGAAHMHuLWRMo374.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2iKAKjwrAAHAx8jFFTk555.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKAB_CgAAFYVMIuGWI946.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKARn8bAAHUerweWa8059.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8VSAV6kEAAlCc-omYno614.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/CB/Cgbj0F6z8U6AHC0LAAuckwCET9o903.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/CB/Cgbj0F6z8U2AXF4DAAcpgTobedU040.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8VSAV6kEAAlCc-omYno614.png680x680.jpg",
            ],
        ],
    },
    {
      id: 14,
      name: 'EP52 Lite 蓝牙耳机',
      price: '129',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: '轻巧亲肤 | 生物纤维振膜 | 8小时续航 | IPX5级防水',
      image: '//openfile.meizu.com/group1/M00/06/97/Cgbj0Fui_-OAIlOuAAIlimOCLcA452.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2ieAYKJGAAHMHuLWRMo374.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2iKAKjwrAAHAx8jFFTk555.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKAB_CgAAFYVMIuGWI946.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKARn8bAAHUerweWa8059.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8VSAV6kEAAlCc-omYno614.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/CB/Cgbj0F6z8U6AHC0LAAuckwCET9o903.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/CB/Cgbj0F6z8U2AXF4DAAcpgTobedU040.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8VSAV6kEAAlCc-omYno614.png680x680.jpg",
            ],
        ],
    },
    {
      id: 15,
      name: 'EP52 Lite 蓝牙耳机',
      price: '129',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: '轻巧亲肤 | 生物纤维振膜 | 8小时续航 | IPX5级防水',
      image: '//openfile.meizu.com/group1/M00/06/97/Cgbj0Fui_-OAIlOuAAIlimOCLcA452.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2ieAYKJGAAHMHuLWRMo374.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2iKAKjwrAAHAx8jFFTk555.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKAB_CgAAFYVMIuGWI946.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKARn8bAAHUerweWa8059.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8VSAV6kEAAlCc-omYno614.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/CB/Cgbj0F6z8U6AHC0LAAuckwCET9o903.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/CB/Cgbj0F6z8U2AXF4DAAcpgTobedU040.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8VSAV6kEAAlCc-omYno614.png680x680.jpg",
            ],
        ],
    },
    {
      id: 16,
      name: 'HD60 头戴式蓝牙耳机',
      price: '499',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: '40mm生物振膜  | Type-C充电 | 触控操作 | 蓝牙5.0 | 轻奢品质',
      image: '//openfile.meizu.com/group1/M00/07/86/Cgbj0V3UocyAR_tJAApbDmCAyEo620.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2ieAYKJGAAHMHuLWRMo374.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2iKAKjwrAAHAx8jFFTk555.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKAB_CgAAFYVMIuGWI946.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKARn8bAAHUerweWa8059.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8VSAV6kEAAlCc-omYno614.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/CB/Cgbj0F6z8U6AHC0LAAuckwCET9o903.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/CB/Cgbj0F6z8U2AXF4DAAcpgTobedU040.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8VSAV6kEAAlCc-omYno614.png680x680.jpg",
            ],
        ],
    },
    {
      id: 17,
      name: 'EP3C 耳机',
      price: '129',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: 'Hi-Res 认证高解析音质 | Type-C数字接口 | 高保真生物纤维振膜',
      image: '//openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2ieAYKJGAAHMHuLWRMo374.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2ieAYKJGAAHMHuLWRMo374.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2iKAKjwrAAHAx8jFFTk555.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKAB_CgAAFYVMIuGWI946.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKARn8bAAHUerweWa8059.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8VSAV6kEAAlCc-omYno614.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/CB/Cgbj0F6z8U6AHC0LAAuckwCET9o903.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/CB/Cgbj0F6z8U2AXF4DAAcpgTobedU040.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8VSAV6kEAAlCc-omYno614.png680x680.jpg",
            ],
        ],
    },
    {
      id: 18,
      name: 'HIFI 解码耳放',
      price: '169',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: '高性能DAC芯片 | 纯净HiFi音质 | 600Ω高阻抗推力 | Type-C 转接线 | 音乐发烧友必备',
      image: '//openfile.meizu.com/group1/M00/07/2F/Cgbj0Vy_C3GAN_TKAAExaPfTwFc180.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2ieAYKJGAAHMHuLWRMo374.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2iKAKjwrAAHAx8jFFTk555.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKAB_CgAAFYVMIuGWI946.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKARn8bAAHUerweWa8059.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8VSAV6kEAAlCc-omYno614.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/CB/Cgbj0F6z8U6AHC0LAAuckwCET9o903.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/CB/Cgbj0F6z8U2AXF4DAAcpgTobedU040.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8VSAV6kEAAlCc-omYno614.png680x680.jpg",
            ],
        ],
    },
    {
      id: 19,
      name: 'POP2 真无线蓝牙耳机',
      price: '399',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: '蓝牙5.0 | 单次8H续航 | 石墨烯振膜 | 双耳通话 | 轻触操作 | 轻盈舒适',
      image: '//openfile.meizu.com/group1/M00/07/28/Cgbj0Vy9Jq6AEzhMAApuih_4TPw329.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2ieAYKJGAAHMHuLWRMo374.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2iKAKjwrAAHAx8jFFTk555.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKAB_CgAAFYVMIuGWI946.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKARn8bAAHUerweWa8059.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8VSAV6kEAAlCc-omYno614.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/CB/Cgbj0F6z8U6AHC0LAAuckwCET9o903.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/CB/Cgbj0F6z8U2AXF4DAAcpgTobedU040.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8VSAV6kEAAlCc-omYno614.png680x680.jpg",
            ],
        ],
    },
    {
      id: 20,
      name: 'EP63NC 无线降噪耳机',
      price: '499',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: 'AMS 芯片智能降噪 | Qualcomm apt-X™ 高清音质 | 蓝牙一拖二连接 | 11小时超长续航 | 快充15分 钟畅听3小时',
      image: '//openfile.meizu.com/group1/M00/07/10/Cgbj0Fy9JYOACw2DAAMWf3vEhbA886.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2ieAYKJGAAHMHuLWRMo374.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2iKAKjwrAAHAx8jFFTk555.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKAB_CgAAFYVMIuGWI946.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKARn8bAAHUerweWa8059.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8VSAV6kEAAlCc-omYno614.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/CB/Cgbj0F6z8U6AHC0LAAuckwCET9o903.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/CB/Cgbj0F6z8U2AXF4DAAcpgTobedU040.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8VSAV6kEAAlCc-omYno614.png680x680.jpg",
            ],
        ],
    },
    
  ]

// 配件商品
let partsList = [
    {
      id: 1,
      name: '无线超充板',
      price: '169',
      num: 1,
      color:['白色'],
      model:['普通'],
      disc: '27W 无线快充 | 主动散热 | 智能静音 | 玉润设计',
      image: '//openfile.meizu.com/group1/M00/07/CA/Cgbj0F6z76aADIfNAAS8Gxwx2NE353.png@480x480.jpg',
      images:[
        [
            "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2ieAYKJGAAHMHuLWRMo374.png680x680.jpg",
            "https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2iKAKjwrAAHAx8jFFTk555.png680x680.jpg",
            "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKAB_CgAAFYVMIuGWI946.png680x680.jpg",
            "https://openfile.meizu.com/group1/M00/07/4B/Cgbj0F1l2iKARn8bAAHUerweWa8059.png680x680.jpg",
        ],
            [
                "https://openfile.meizu.com/group1/M00/07/CA/Cgbj0F6z76aADIfNAAS8Gxwx2NE353.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/CA/Cgbj0F6z756ARzjVAAXagBfP_Ps448.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/CA/Cgbj0F6z756AQbX5AATlnYpNc8Y843.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z756AbYouAANjaNL0Oog134.png680x680.jpg",
            ],
        ],
    },
    {
      id: 2,
      name: 'Type-C 数据线',
      price: '49',
      num: 1,
      color:['白色'],
      model:['普通'],
      disc: '5A 大电流 | Type-C 接口 | 更快更方便',
      image: '//openfile.meizu.com/group1/M00/07/D5/Cgbj0V6o2n-ACbZsAAGnmeZVVRs678.png@480x480.jpg',
      images:[
        [
            "https://openfile.meizu.com/group1/M00/07/D5/Cgbj0V6o2n-ACbZsAAGnmeZVVRs678.png680x680.jpg",
            "https://openfile.meizu.com/group1/M00/07/BF/Cgbj0F6o2n-AEwG_AAIMQQfIZOg393.png680x680.jpg",
            "https://openfile.meizu.com/group1/M00/07/BF/Cgbj0F6o2n-AbpZ9AADbDABSZC0072.png120x120.jpg",
            "https://openfile.meizu.com/group1/M00/07/D5/Cgbj0V6o2n-ACbZsAAGnmeZVVRs678.png680x680.jpg",
        ],
            [
                "https://openfile.meizu.com/group1/M00/07/D5/Cgbj0V6o2n-ACbZsAAGnmeZVVRs678.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/BF/Cgbj0F6o2n-AEwG_AAIMQQfIZOg393.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/BF/Cgbj0F6o2n-AbpZ9AADbDABSZC0072.png120x120.jpg",
                "https://openfile.meizu.com/group1/M00/07/D5/Cgbj0V6o2n-ACbZsAAGnmeZVVRs678.png680x680.jpg",
            ],
        ],
    },
    {
      id: 3,
      name: 'Type-C 游戏专用线',
      price: '49',
      num: 1,
      color:['红色'],
      model:['普通'],
      disc: 'Type-C 接口 | 5A大电流 | 弯头专为游戏设计 | 耐磨编织材料',
      image: '//openfile.meizu.com/group1/M00/07/AB/Cgbj0F5u8euASZyLAAcq4oEH89w043.png@480x480.jpg',
      images:[
        [
            "https://openfile.meizu.com/group1/M00/07/D5/Cgbj0V6o2n-ACbZsAAGnmeZVVRs678.png680x680.jpg",
            "https://openfile.meizu.com/group1/M00/07/BF/Cgbj0F6o2n-AEwG_AAIMQQfIZOg393.png680x680.jpg",
            "https://openfile.meizu.com/group1/M00/07/BF/Cgbj0F6o2n-AbpZ9AADbDABSZC0072.png120x120.jpg",
            "https://openfile.meizu.com/group1/M00/07/D5/Cgbj0V6o2n-ACbZsAAGnmeZVVRs678.png680x680.jpg",
        ],
            [
                "https://openfile.meizu.com/group1/M00/07/AB/Cgbj0F5u8euASZyLAAcq4oEH89w043.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/C1/Cgbj0V5u8eqAGzBBAANR43XsxN8566.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/AB/Cgbj0F5u8eqAegyYAAJOG9b96Fo038.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/AB/Cgbj0F5u8euASZyLAAcq4oEH89w043.png680x680.jpg",
            ],
        ],
    },
    {
      id: 4,
      name: '中国红 Type-C 金属编织线',
      price: '39',
      num: 1,
      color:['红色'],
      model:['普通'],
      disc: 'Type-C 接口 | 3A大电流 | 耐磨编织材料',
      image: '//openfile.meizu.com/group1/M00/07/95/Cgbj0V37HNOAIdPFAAcMN3qrsLw357.png@480x480.jpg',
      images:[
        [
            "https://openfile.meizu.com/group1/M00/07/D5/Cgbj0V6o2n-ACbZsAAGnmeZVVRs678.png680x680.jpg",
            "https://openfile.meizu.com/group1/M00/07/BF/Cgbj0F6o2n-AEwG_AAIMQQfIZOg393.png680x680.jpg",
            "https://openfile.meizu.com/group1/M00/07/BF/Cgbj0F6o2n-AbpZ9AADbDABSZC0072.png120x120.jpg",
            "https://openfile.meizu.com/group1/M00/07/D5/Cgbj0V6o2n-ACbZsAAGnmeZVVRs678.png680x680.jpg",
        ],
            [
                "https://openfile.meizu.com/group1/M00/07/95/Cgbj0V37HNOAIdPFAAcMN3qrsLw357.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/7E/Cgbj0F37HNOAIkNGAANOI1XJSqE509.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/95/Cgbj0V37HNKAByHeAAIrR-l4aJY056.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/95/Cgbj0V37HNOAIdPFAAcMN3qrsLw357.png680x680.jpg",
            ],
        ],   
    },
    {
      id: 5,
      name: '移动电源3',
      price: '79',
      num: 1,
      color:['黑色'],
      model:['普通'],
      disc: '10000mAh | 18W双向快充 | 12重安全防护',
      image: '//openfile.meizu.com/group1/M00/06/BD/Cgbj0FvJjK6AAcw8AAPKzUsctEA769.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/D5/Cgbj0V6o2n-ACbZsAAGnmeZVVRs678.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/BF/Cgbj0F6o2n-AEwG_AAIMQQfIZOg393.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/BF/Cgbj0F6o2n-AbpZ9AADbDABSZC0072.png120x120.jpg",
                "https://openfile.meizu.com/group1/M00/07/D5/Cgbj0V6o2n-ACbZsAAGnmeZVVRs678.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/06/BD/Cgbj0FvJjK6AAcw8AAPKzUsctEA769.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/06/CD/Cgbj0VvJjK-AbRsTAASpjdD81rI585.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/06/CD/Cgbj0VvJjK-AbRsTAASpjdD81rI585.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/06/CD/Cgbj0VvJjLaANi-wAAGxC5ss3fw886.png680x680.jpg",
            ],
        ],   	  
    },
    {
      id: 6,
      name: '快充电源适配器（UP0830S）',
      price: '69',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: '快速充电 安全无忧',
      image: '//storeimg.meizu.com/product/1467170145-52479.png@480x480.jpg',
	  images:[
        [
            "https://openfile.meizu.com/group1/M00/07/D5/Cgbj0V6o2n-ACbZsAAGnmeZVVRs678.png680x680.jpg",
            "https://openfile.meizu.com/group1/M00/07/BF/Cgbj0F6o2n-AEwG_AAIMQQfIZOg393.png680x680.jpg",
            "https://openfile.meizu.com/group1/M00/07/BF/Cgbj0F6o2n-AbpZ9AADbDABSZC0072.png120x120.jpg",
            "https://openfile.meizu.com/group1/M00/07/D5/Cgbj0V6o2n-ACbZsAAGnmeZVVRs678.png680x680.jpg",
        ],
            [
                "https://storeimg.meizu.com/product/1467170145-52479.png@680x680.jpg",
                "https://storeimg.meizu.com/product/1467170185-26471.png@680x680.jpg",
                "https://storeimg.meizu.com/product/1467170242-41341.png@680x680.jpg",
                "https://storeimg.meizu.com/product/1467170319-18407.png@680x680.jpg",
            ],
        ],   
    },
    {
      id: 7,
      name: '无线充电器',
      price: '99',
      num: 1,
      color:['白色'],
      model:['普通'],
      disc: '10W快速充电 无线即放即充',
      image: '//openfile.meizu.com/group1/M00/04/15/Cgbj0VrcXw2AL0tBAApTh_xwKKk709.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/D5/Cgbj0V6o2n-ACbZsAAGnmeZVVRs678.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/BF/Cgbj0F6o2n-AEwG_AAIMQQfIZOg393.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/BF/Cgbj0F6o2n-AbpZ9AADbDABSZC0072.png120x120.jpg",
                "https://openfile.meizu.com/group1/M00/07/D5/Cgbj0V6o2n-ACbZsAAGnmeZVVRs678.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/04/15/Cgbj0VrcXw2AL0tBAApTh_xwKKk709.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/04/07/Cgbj0FrcXxCAdJ9NAAyHOpHoi0M342.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/04/07/Cgbj0FrcXw2AQ1olAAmXHqoPKqc595.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/04/15/Cgbj0VrcXwyADyomAAD20B4ZGvM936.png680x680.jpg",
            ],
        ],   
    },
    {
      id: 8,
      name: 'Micro USB 数据线',
      price: '29',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: '广泛兼容各大品牌Micro USB接口手机 | 经久耐用 ',
      image: '//storeimg.meizu.com/product/1458617159-29477.png@480x480.jpg',
	  images:[
        [
            "https://openfile.meizu.com/group1/M00/07/D5/Cgbj0V6o2n-ACbZsAAGnmeZVVRs678.png680x680.jpg",
            "https://openfile.meizu.com/group1/M00/07/BF/Cgbj0F6o2n-AEwG_AAIMQQfIZOg393.png680x680.jpg",
            "https://openfile.meizu.com/group1/M00/07/BF/Cgbj0F6o2n-AbpZ9AADbDABSZC0072.png120x120.jpg",
            "https://openfile.meizu.com/group1/M00/07/D5/Cgbj0V6o2n-ACbZsAAGnmeZVVRs678.png680x680.jpg",
        ],
            [
                "https://storeimg.meizu.com/product/1458617159-29477.png@680x680.jpg",
				"https://storeimg.meizu.com/product/1458617159-29477.png@680x680.jpg",
				"https://storeimg.meizu.com/product/1458617159-29477.png@680x680.jpg",
				"https://storeimg.meizu.com/product/1458617159-29477.png@680x680.jpg",
            ],
        ],   
    },
    {
      id: 9,
      name: '双 USB-C 快充线',
      price: '49',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: '【新款数据线】双 USB-C 接口 | 5A 大电流 | 耐磨编织材料 | E-Marker 芯片',
      image: '//openfile.meizu.com/group1/M00/07/F7/Cgbj0F7jIyOAaKEWAAdLI30DPuc780.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/F7/Cgbj0F7jIyOAaKEWAAdLI30DPuc780.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/F7/Cgbj0F7jIyOAeoHiAARpq7dyb90616.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/08/0D/Cgbj0V7jIyOANnOwAAQ0-i0HQwU710.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/F7/Cgbj0F7jIyOAaKEWAAdLI30DPuc780.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/F7/Cgbj0F7jIyOAaKEWAAdLI30DPuc780.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/F7/Cgbj0F7jIyOAeoHiAARpq7dyb90616.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/08/0D/Cgbj0V7jIyOANnOwAAQ0-i0HQwU710.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/F7/Cgbj0F7jIyOAaKEWAAdLI30DPuc780.png680x680.jpg",
            ],
        ],   
    },
    {
      id: 10,
      name: 'Lifeme PD 快充线',
      price: '69',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: 'USB-C 转 Lightning | MFi 认证 | 3A 大电流 | PD 快充 | 兼容大部分苹果设备',
      image: '//openfile.meizu.com/group1/M00/07/F8/Cgbj0V7Qy2mAVnM6AARv0cdv8JI919.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/F7/Cgbj0F7jIyOAaKEWAAdLI30DPuc780.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/F7/Cgbj0F7jIyOAeoHiAARpq7dyb90616.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/08/0D/Cgbj0V7jIyOANnOwAAQ0-i0HQwU710.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/F7/Cgbj0F7jIyOAaKEWAAdLI30DPuc780.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/F8/Cgbj0V7Qy2mAVnM6AARv0cdv8JI919.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/F8/Cgbj0V7Qy2mAEBbwAAIBsgECyJ8703.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/E2/Cgbj0F7Qy2mAHCR7AAF-Q4JVmJM749.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/F8/Cgbj0V7Qy2mAVnM6AARv0cdv8JI919.png680x680.jpg",
            ],
        ],   
    },
    {
      id: 11,
      name: '超充 USB-C 移动电源',
      price: '169',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: 'USB-C 双向超充 | 22.5W 大功率 | 数字电量显示 | 多快充协议支持',
      image: '//openfile.meizu.com/group1/M00/07/D4/Cgbj0F64-fCANzfvAAMAQSi_H7U780.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/F7/Cgbj0F7jIyOAaKEWAAdLI30DPuc780.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/F7/Cgbj0F7jIyOAeoHiAARpq7dyb90616.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/08/0D/Cgbj0V7jIyOANnOwAAQ0-i0HQwU710.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/F7/Cgbj0F7jIyOAaKEWAAdLI30DPuc780.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/D4/Cgbj0F64-fCANzfvAAMAQSi_H7U780.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8SqAJnzGAAIdgNvV3ig798.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8SWAP6ryAAI6LcsvNns822.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/CA/Cgbj0F6z8SWANuwwAAGpGx8xSwI493.png680x680.jpg",
            ],
        ],   
    },
    {
      id: 12,
      name: '超充 GaN 三口充电器',
      price: '199',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: '65W MAX功率输出 | GaN 芯片 | 安全小巧 | 三口输出',
      image: '//openfile.meizu.com/group1/M00/07/D7/Cgbj0F67s3yAYmI6AAIrMK1gFWU758.png@480x480.jpg',
		images:[
            [
                "https://openfile.meizu.com/group1/M00/07/F7/Cgbj0F7jIyOAaKEWAAdLI30DPuc780.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/F7/Cgbj0F7jIyOAeoHiAARpq7dyb90616.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/08/0D/Cgbj0V7jIyOANnOwAAQ0-i0HQwU710.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/F7/Cgbj0F7jIyOAaKEWAAdLI30DPuc780.png680x680.jpg",
            ],
            [
                "https://openfile.meizu.com/group1/M00/07/D7/Cgbj0F67s3yAYmI6AAIrMK1gFWU758.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/EC/Cgbj0V67s3eAUF1pAANHPpwEc34539.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/EC/Cgbj0V67s32AelFQAAHoZQa-Quw835.png680x680.jpg",
                "https://openfile.meizu.com/group1/M00/07/EC/Cgbj0V67s3eAXzYKAAJIJYoEv8o783.png680x680.jpg",
            ],
        ],   
    },
    {
      id: 13,
      name: 'Micro USB 金属数据线',
      price: '29',
      num: 1,
      color:['普通'],
      model:['普通'],
      disc: 'USB2.0接口 | 支持2A快速充电 | 尼龙扁线 | 兼容主流安卓手机、平板等设备',
      image: '//storeimg.meizu.com/product/1467363452-36956.png@480x480.jpg',
	  images:[
        [
            "https://openfile.meizu.com/group1/M00/07/F7/Cgbj0F7jIyOAaKEWAAdLI30DPuc780.png680x680.jpg",
            "https://openfile.meizu.com/group1/M00/07/F7/Cgbj0F7jIyOAeoHiAARpq7dyb90616.png680x680.jpg",
            "https://openfile.meizu.com/group1/M00/08/0D/Cgbj0V7jIyOANnOwAAQ0-i0HQwU710.png680x680.jpg",
            "https://openfile.meizu.com/group1/M00/07/F7/Cgbj0F7jIyOAaKEWAAdLI30DPuc780.png680x680.jpg",
        ],
            [
                "https://storeimg.meizu.com/product/1467363452-36956.png@680x680.jpg",
                "https://storeimg.meizu.com/product/1467363501-48892.png@680x680.jpg",
                "https://storeimg.meizu.com/product/1467363452-36956.png@680x680.jpg",
                "https://storeimg.meizu.com/product/1467363501-48892.png@680x680.jpg",
            ],
        ],   
    }
  ]

  
app.get("/homebanner",(req,res)=>{
    res.json({code:200,homebanner});
})

app.get("/recommend",(req,res)=>{
    res.json({code:200,recommend});
})

// 手机商品
app.get("/phoneList",(req,res)=>{
    res.json({code:200,phoneList});
})
// 声学商品
app.get("/musicList",(req,res)=>{
    res.json({code:200,musicList});
})
// 配件商品
app.get("/partsList",(req,res)=>{
    res.json({code:200,partsList});
})
// 生活商品
app.get("/lifeList",(req,res)=>{
    res.json({code:200,lifeList});
})


// 商品数据接口
// http://127.0.0.1:3000/goodsList
app.get("/goodsList",(req,res)=>{
    res.json({code:200,phoneList});
})


// 通过id获取商品
// http://127.0.0.1:3000/goodsList/1
app.get("/goodsList/:id",(req,res)=>{
    let data = result.find(item=>item.id == req.params.id);
    res.json({code:200,result:data});
})



// 分类接口
app.get("/category",(req,res)=>{
    var result = [
        {
            id:0,
            iconUrl: "../../image/icon-qiandao.png",
            iconText:"签到"
        },
        {
            id:1,
            iconUrl: "../../image/icon-fujin.png",
            iconText:"附近"
        },
        {
            id:2,
            iconUrl: "../../image/icon-zhanhui.png",
            iconText:"游展"
        },
        {
            id:3,
            iconUrl: "../../image/icon-fuli.png",
            iconText:"福利"
        },
        {
            id:4,
            iconUrl: "../../image/icon-muma.png",
            iconText:"玩乐"
        },
        {
            id:5,
            iconUrl: "../../image/icon-xingxing.png",
            iconText:"周边"
        },
        {
            id:6,
            iconUrl: "../../image/icon-tiyu.png",
            iconText:"体育"
        },
        {
            id:7,
            iconUrl: "../../image/icon-qinzi.png",
            iconText:"亲子"
        }
    ]
    res.json({code:200,result})
})






app.listen(3000,()=>{
    console.log("请访问:http://127.0.0.1:3000");
})