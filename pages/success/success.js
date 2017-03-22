var app=getApp();
Page({
  data:{
   time:"",
   total:0,
   rsvid:88,
   rsvno:99,
  //  id:"wx46f29b1dbe09571d",
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    var actotal = options.total;
    // console.log(actotal);
    // console.log(options.estateid);
    // console.log(options.rsvId);
    // console.log(options.rsvno);
    // console.log(options.payname);
    
    this.setData({
      total:actotal,
      rsvid:options.rsvId,
      rsvno:options.rsvno,
      payname:options.payname
    })
    var that=this;
   var zong=60;
//   var timer= setInterval(function(){
//      if(zong<=0){
//       clearInterval(timer);
//       that.backhome();
//     }else{ 
//        zong--;
//     }
    
   
//     if(zong<10){
//        var time="00:00:0"+zong;
//     }else{
//  var time="00:00:"+zong;
//     }
   
//  that.setData({
//    time:time,
//    total:total
//  })

//    },1000);
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
   
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
   
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
   
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
   
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
   
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
   
  },
  // onShareAppMessage: function() {
  //   // 用户点击右上角分享
  //   return {
  //     title: 'title', // 分享标题
  //     desc: 'desc', // 分享描述
  //     path: 'path' // 分享路径
  //   }
  // },
  paymoney:function(){//点击立即支付，微信支付
      wx.showToast({
        title: '跳转微信支付，请勿重复点击哦',
        icon: 'loading',
        duration: 2000
      });
     
     var url =      "https://wxapi.hotapp.cn/proxy/?appkey=hotapp88385331&url=https://k.zx35.com/mhaapi/com/easy/wx/mha/act/MYWxxcxApi/getWCPay.act";
    //  var id=this.data.id;
     var orderid = wx.getStorageSync('rsvno');
      var payamnt = wx.getStorageSync('total');
      var payname = this.data.payname;
      var openid = wx.getStorageSync('openid');
      console.log(openid);
         wx.request({           
          url:url,
          data:{apikey:app.data.apikey,openid:openid,id:3,                      payname:payname,orderid:orderid,payamnt:payamnt}, 
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, 
          success: function(res){
                console.log(res.data);
                //var MD5Util = require('../../utils/md5.js');  
                //var sign = '';  
                //var signA = "appId=wxc717f90d7834d236"+"&nonceStr="+res.data.nonceStr+"&package=prepay_id="+res.data.prepayId+"&signType=MD5&timeStamp="+res.data.timestamp;  
                // var signB = signA+"&key="+app.key;  
                //var signB = signA+"&key="+app.data.apikey; 
                //  sign=MD5(signB).toUpperCase();
                //sign = MD5Util.MD5(signB).toUpperCase();  
                wx.requestPayment({  
                    nonceStr: res.data.rtData.nonceStr,  
                    // package: "prepay_id="+res.data.rtData.prepayId, 
                    package: res.data.rtData.packages,  
                    signType: 'MD5',  
                    timeStamp: res.data.rtData.timeStamp,      
                    paySign: res.data.rtData.paySign,//<strong><span style="color:#ff0000;">五个字段参与签名(区分大小写)：appId,nonceStr,package,signType,timeStamp（需要注意的是，这5个参数签名排序的顺序按照ASCII字典序排序）</span></strong>  
                    success: function(res){  
                      console.log("支付成功");  
                    },  
                    fail: function() {  
                    },  
                    complete: function() {  
                    }  
                  })  
            
            }
        })
   

  },
  //点击回到主页面按钮
  backhome:function(){
   wx.navigateBack({
     delta: 6, // 回退前 delta(默认为1) 页面
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
  //点击查看订单按钮
  checkout:function(){
       var turl = `../queryOrder/queryOrder?rsvId=${this.data.rsvid}`;
      // var turl = `../pao/pao?rsvId=${this.data.rsvid}`;
      wx.redirectTo({
      url:turl,
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
  
    }
     //把住店日期 离店日期 住几晚 房间数 姓名 手机号全部记录在案
            // var array= wx.getStorageSync('array');
            // wx.setStorageSync('name', hehe);
    //         if(!array){
    //           var array=[];
    //         }
    //       array.push(this.data);
    //       wx.setStorageSync('array', array);
}) ;
require('../../utils/md5.js')