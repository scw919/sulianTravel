//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  getOpenId:function (){
    if(wx.getStorageSync('openid')){
          app.data.openid = wx.getStorageSync('openid');
    }
    else {
      wx.login({  
          success: function (loginCode) {  
            var appid = 'wxc717f90d7834d236'; //填写微信小程序appid  
            var secret = '4ac562bb55ec1740601053076dd52a63'; //填写微信小程序secret  
          console.log(loginCode);
            //调用request请求api转换登录凭证  
            wx.request({  
              url:'https://api.weixin.qq.com/sns/jscode2session?appid='+appid+'&secret='+secret+'&grant_type=authorization_code&js_code='+loginCode.code,
              header: {  
                  'content-type': 'application/json'  
              },  
              success: function(res) {  
                console.log(res.data.openid); //获取openid  
                console.log(res.data.session_key); //获取openid
                app.data.openid = res.data.openid;
                console.log(app.data.openid);
                wx.setStorageSync('openid',res.data.openid)
                wx.setStorageSync('session_key',res.data.session_key)
              }  
            })  
          }  
        })
    }  
  },

  onLoad: function () {
    this.getOpenId();
  //   var that = this
  //   //调用应用实例的方法获取全局数据
  //   app.getUserInfo(function(userInfo){
  //     //更新数据
  //     that.setData({
  //       userInfo:userInfo
  //     })
  //   })
      // this.getOpenId();

 },
 gethouse:function(e){
    var hotel="";
    if(e.target.dataset.id==1){
        hotel="民宿";
      }else{
        hotel="酒店";
      }
    wx.navigateTo({
        url: `../logs/logs?now=${hotel}`,
        success: function(res){
          // success
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
    })
 },
 //订单列表
 myorder:function(){

 var log=wx.getStorageSync('login') ;
 if(log){
   
   wx.navigateTo({
     url:`../orderlist/orderlist`,
     success: function(res){
       // success
     },
     fail: function() {
       // fail
     },
     complete: function() {
       // complete
     }
   })
 }else{
    wx.showToast({
      title: '您尚未登录',
      icon:'loading',
      duration: 1000,
    
    });
    setTimeout(function(){
      wx.navigateTo({
          url: '../myorder/myorder?backPage=../orderlist/orderlist',
          success: function(res){
            
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
      },1000);
   } 
 },
 getnearhotel:function(){

  wx.showToast({
    title: '定位成功',
  icon:'',
    duration: 1000,
  
  });

   wx.navigateTo({
     url: '../hotel/hotel',
     success: function(res){
       // success
     },
     fail: function() {
       // fail
     },
     complete: function() {
       // complete
     }
   })
 },
 getcenter:function(){
    var that=this;
    var log=wx.getStorageSync('login') ;
    if(log){
      wx.navigateTo({
        url: '../mycenter/mycenter',
        success: function(res){
          // success
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
      })
    }else{
 wx.showToast({
      title: '您尚未登录',
      icon:'loading',
      duration: 1000,
    
    });
    setTimeout(function(){
      wx.navigateTo({
          url: '../myorder/myorder?backPage=../mycenter/mycenter',
          success: function(res){
            
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
      },1000);
    }
  }
 
})
