<template>
  <div>
    <div class="main">
      <div class="conter">
        <table>
          <thead>
            <th>订单服务</th>
            <th>服务支持</th>
            <th>媒体中心</th>
            <th>关注我们</th>
          </thead>
          <tbody>
            <tr>
              <td><a href="#">购买指南</a></td>
              <td><a href="#">零售门店</a></td>
              <td><a href="#">新闻动态</a></td>
              <td><a href="#">新浪微博</a></td>
            </tr>
            <tr>
              <td><a href="#">送货政策</a></td>
              <td><a href="#">自主服务</a></td>
              <td><a href="#">官方视频</a></td>
              <td><a href="#">官方微博</a></td>
            </tr>
            <tr>
              <td><a href="#"></a></td>
              <td><a href="#">维修门店</a></td>
              <td><a href="#">图片资源</a></td>
              <td><a href="#">荣誉奖项</a></td>
            </tr>
          </tbody>
        </table>
        <div class="lian">
          <div class="tel">400 - 603 - 5000</div>
          <div class="time">周一到周五 9:00 - 18:00</div>
          <div class="btn">在线帮助</div>
        </div>
      </div>
      <div class="bottom">
        <span class="fir">Copyright © 2020 smartisan.com 版权所有</span>
        <span>锤子商城隐私政策</span>
        <span>资质证照</span>
        <div>
          <span class="fir">京 ICP 备 19048576 号 - 1</span>
          <span>京公网安备 11010502039854号</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main{
  width: 100%;
  background-color: #fff;
  height: 300px;
  margin-top: 20px;
  .conter{
    width: 1200px;
    height: 150px;
    padding-top: 30px;
    margin: 0 auto;
    border-bottom: 2px solid #fafafa;
    position: relative;
    table{
      thead{
        
        th{
          font-size: 14px;
          width: 200px;
          text-align: left;
        }
      }
      tbody{
        
        tr{
          height: 20px;
          a:hover{
            color: #5079d9;
          }
        }
      }
    }
    .lian{
      position: absolute;
      top: 30px;
      right: 10px;
      .tel{
        font-size: 24px;
        color: #5079d9;
        font-weight: bold;
      }
      .time{
        color: #999999;
        text-align: center;
      }
      .btn{
        width: 150px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        color: #5079d9;
        background-color: #fafafa;
        border: 1px solid #d0d0d0;
        font-weight: bold;
        border-radius: 5px;
        margin-top: 10px;
      }
    }
  }
  .bottom{
    width: 1200px;
    margin: auto;
    margin-top: 10px;
    span{
      padding-right: 10px;
      padding-left: 10px;
      border-left: 1px solid #cccccc;
    }
    .fir{
      padding-left: 0;
      border-left: none;
    }
  }
}
</style>