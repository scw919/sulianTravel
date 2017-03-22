var md = require('../../utils/md5.js');
var app = getApp();
Page({
  data:{
    menuarr:[{
      currentpage:"0",
      text:"普通登陆"
    },{
      currentpage:"1",
      text:"手机动态码登录"
    }],
    currentMenuID:"0",
    pagenow:"0",
    telephone:"",
    vcode:"",
    ma:'获取验证码',
    back:0,
    backPage:"",
    password:123456,
    sessionid:'',
    versionCode:88
 
  },
  onLoad:function(options){
    console.log(options.backPage);
    app.data.backPage = options.backPage;
    this.setData({backPage:options.backPage});
    // 生命周期函数--监听页面加载
    
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
  swmove:function(e){
    this.setData({
      currentMenuID:e.detail.current
    })
  },
  bindchange:function(e){   
      var current=e.target.id;
      this.setData({
        pagenow:current
      })
    },
    //获取电话号码
  getnum:function(e){
    this.setData({
      telephone:e.detail.value
    })
  },
  makesure:function(e){
      var vcode=e.detail.value;
      this.setData({
        vcode:vcode
      })
    },
    //验证码登录
    loadup:function(){
       var telenum=this.data.telephone;
       var vcode=this.data.vcode;
       var sessionida = app.data.sessionid;
       console.log(sessionida);
        wx.showModal({
            title: '提示',
            content: '已注册过的用户才可用验证码登录哦',
            success: function(res) {
              if (res.confirm) {
                  // if(sessionida){
                    wx.request({
//url:'https://k.zx35.com/mhaapi/com/easy/api/act/MYSms/verify.act',
                        url:
                'https://wxapi.hotapp.cn/proxy/?appkey=hotapp11377340&url=https://k.zx35.com/mhaapi/com/easy/api/act/MYRegister/loginmv.act',
                      data: {
                        apikey:app.data.apikey,
                        mobile:telenum,
                        vcode:vcode,
                        openid:app.data.openid,
                        ttype:"c"
                      },
                      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
                  // header: {}, // 设置请求的 header
                      success: function(res){
                    // success
                        console.log(res);
                        if(res.data.rtState!=0){
                          wx.showToast({
                            title: res.data.rtMsrg,
                            icon: 'success',
                            duration: 1000
                          });
                          return;
                        }           
                        var add=res.data.rtData.sessionid;
                        console.log(add);
                        
                        app.data.sessionid = add;
                        var aversionCode=res.data.rtData.versionCode;
                        
                        app.data.versionCode = aversionCode;
                        var success=true;
                        
                        wx.setStorageSync('login', success);
                        wx.setStorageSync('phone',telenum);
                        // wx.setStorageSync('sessionid', res.data.rtData.sessionid);
                        wx.setStorageSync('sessionid', add);
                        wx.setStorageSync('versionCode', aversionCode);
                        wx.setStorageSync('name',name);

                        wx.navigateBack({
                        delta: 1, // 回退前 delta(默认为1) 页面
                        success: function(res){
                            wx.navigateTo({
                              url: app.data.backPage,
                              success: function(res){
                                  //success
                              },
                              fail: function() {
                                //fail
                              },
                              complete: function() {
                                //complete
                              }
                          })
                        },
                        fail: function() {
                            //fail
                        },
                        complete: function() {
                            //complete
                        }
                    })
                  },
                  fail: function(res) {
                    // fail
                    console.log(res);
                  },
                  complete: function() {
                    // complete
                  }
                })
              //  }else{
              //      wx.showToast({
              //           title:'先注册才能用验证码登录哦',
              //           icon: 'loading',
              //           duration: 2000
              //         });
              //         // return;
              //       setTimeout(function(){
              //         wx.navigateBack({
              //           delta: 1, // 回退前 delta(默认为1) 页面
              //           success: function(res){
              //               wx.navigateTo({
              //                 url: '../zhuce/zhuce',
              //                 success: function(res){
              //                   // success
              //                 },
              //                 fail: function() {
              //                   // fail
              //                 },
              //                 complete: function() {
              //                   // complete
              //                 }
              //               })
              //           },
              //           fail: function() {
              //             // fail
              //           },
              //           complete: function() {
              //             // complete
              //           }
              //         })
              //     },1000);
              //  }
                
              }
            }
          })  
     
  },
  phoneDataChange:function(e){
    this.setData({
      telephone:e.detail.value
    })
   },
    getpasd:function(e){
      
    this.setData({
      password:e.detail.value
    })
  },

  //登录 用户密码登录
  loadin:function(){
    var apikey=this.data.apikey;
    var telenum=this.data.telephone;
    var password=this.data.password;
    var passwd=md.hex_md5(password);
    console.log(telenum,password);
      
    if(telenum && password){
      wx.request({
         //url:'https://k.zx35.com/mhaapi/com/easy/api/act/MYRegister/loginms.act',
      url:'https://wxapi.hotapp.cn/proxy/?appkey=hotapp11377340&url=https://k.zx35.com/mhaapi/com/easy/api/act/MYRegister/loginms.act',
        data: {openid:app.data.openid,apikey:app.data.apikey,mobile:telenum,passwd:passwd,ttype:"c"},
       method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
       // header: {}, // 设置请求的 header
       success: function(res){
         // success
         console.log(res);
          if(res.data.rtState!=0){
              wx.showToast({
                title: res.data.rtMsrg,
                icon: 'success',
                duration: 2000
              });
              return;
            }      
    //      console.log(res,'success');
          if(res.data.rtState==0){
              var success=true;
               var add=res.data.rtData.sessionid;
              console.log(add);
              
              app.data.sessionid = add;
              var aversionCode=res.data.rtData.versionCode;
              
              app.data.versionCode = aversionCode;
              var success=true;
              
              wx.setStorageSync('login', success);
              wx.setStorageSync('phone',telenum);
              // wx.setStorageSync('sessionid', res.data.rtData.sessionid);
              wx.setStorageSync('sessionid', add);
              wx.setStorageSync('versionCode', aversionCode);
                wx.showToast({
                  title: '加载中',
                  icon: 'loading',
                  duration: 2000
                });
              wx.navigateBack({
                  delta: 1, // 回退前 delta(默认为1) 页面
                  success: function(res){
                    // success
                    wx.navigateTo({
                      url: app.data.backPage,
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
                  fail: function(res) {
                    // fail
                  
                  },
                  complete: function() {
                    // complete
                  }
                })
            }
            else
            {
              wx.showModal({
                title: '提示',
                content: '账号或密码错误',
              })
           }
       },
       fail: function(res) {
         // fail
           console.log(res,'fail');
       },
       complete: function() {
         // complete
       }
     })
  
    }
  },
   //获取验证码
  getVerifyCode:function(){
    var that=this;
    if(that.data.back>0){
       return;
    }
    // var apikey=that.data.apikey;
    var telenum=that.data.telephone;
    if(!telenum || !that.isMobilePhone(telenum)){
      wx.showToast({
        title: '这就不是个电话',
        icon: 'loading',
        duration: 1000
      });
      return;
     }
     wx.showToast({
            title: '加载中，请勿重复点击哦',
            icon:'loading',
            duration: 1000
          }); 
    //  wx.networkTimeout();
    wx.request({
      url:'https://wxapi.hotapp.cn/proxy/?appkey=hotapp11377340&url=https://k.zx35.com/mhaapi/com/easy/api/act/MYSms/send.act?',
      data: {openid:app.data.openid,apikey:app.data.apikey,mobile:telenum},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
     
      success: function(res){
        console.log(res);
        var num=60;
        var time= setInterval(function(){
          num--;
          var hehe=num+'秒后重发';
          that.setData({
            ma:hehe,
            back:num
          })
          if(num<=0){
            clearInterval(time);
            that.setData({
              ma:'重新获取'
            })
          }
        },1000);
      },
      fail: function() {
         wx.showToast({
          title:'提示',
          content:'请求超时'
        })
      },
      complete: function() {
      }
    })
    },
    //注册
  
    zhuce:function(){
        wx.redirectTo({
          url: '../zhuce/zhuce',
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
      // 判断是否为手机号
    isMobilePhone:function(phone) {
        // your implement


        var re=/^([0-9]{11})|(13[56][0-9]{8})$/;
        if (re.test(phone)) return true;
        else {
          
            return false;
        }
    }
})