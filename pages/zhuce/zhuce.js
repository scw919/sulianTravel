var app=getApp();

Page({
  data:{
     items: [
      {name: '1', value: '女'},
      {name: '2', value: '男', checked: 'true'},
      {name: '0', value: '未知'},
  
    ],
    noworno:"true",
    telephone:"",
    vcode:"",
    psw:"",
    noname:"false",
    apikey:'8a53b78c56541fb00156541fb0760000',
    ma:'获取验证码',
    back:0,
    name:''
  },
  onLoad:function(options){
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
  // },//获取电话号码
  getnum:function(e){
   
   
   this.setData({
     telephone:e.detail.value
   })},
   makesure:function(e){
    var vcode=e.detail.value;
    this.setData({
      vcode:vcode
    })

  },
  radioChange:function(e){
    console.log(e);
  },
  //获取验证码
  getVerifyCode:function(){
    
    var that=this;
     if(that.data.back>0) {return};
    var apikey=this.data.apikey;
    var telenum=this.data.telephone;
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
              duration: 1000,
            });
wx.request({

url:'https://wxapi.hotapp.cn/proxy/?appkey=hotapp88385331&url=https://k.zx35.com/mhaapi/com/easy/api/act/MYSms/send.act',
  data: {apikey:app.data.apikey,mobile:telenum},
  method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  // header: {}, // 设置请求的 header
  success: function(res){
  console.log(res,'success');

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
    console.log('fail');
  },
  complete: function() {
    
  }
})
  },myname:function(e){
   var that=this;
      var apikey=this.data.apikey;
     var telenum=this.data.telephone;
     var vcode=this.data.vcode;
     var name=e.detail.value;
     that.setData({
       name:name
     })
    if(vcode&&telenum){
    
wx.request({
  url:'https://wxapi.hotapp.cn/proxy/?appkey=hotapp88385331&url=https://k.zx35.com/mhaapi/com/easy/api/act/MYSms/verify.act',
  data: {
    apikey:app.data.apikey,
    mobile:telenum,
    vcode:2323
  },
  method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  // header: {}, // 设置请求的 header
  success: function(res){
    // success
    console.log('正确了');

    that.setData({
        noworno:false
     })
  },
  fail: function() {
    // fail
     cosonle.log('失败了');
     that.setData({
       noname:true
     })
  },
  complete: function() {
    // complete
  }
})
    }
  },
  
  
  //获取到密码
  getpsw:function(e){
var psw=e.detail.value;
    this.setData({
      psw:psw
    })

        
    

   


  },
  //立即注册
  zhuce:function(){
    var apikey=this.data.apikey;
    var telenum=this.data.telephone;
    var psw=this.data.psw;
    var name=this.data.name;
    var vcode=this.data.vcode;
    if(telenum=='' || telenum.length<11){
      wx.showToast({title: '请输入正确手机号',icon:'',duration: 1000});
      return ;
    }
     if(vcode==''){
      wx.showToast({title: '请输入验证码',icon:'',duration: 1000});
      return ;
    }
    if(name==''){
      wx.showToast({title: '请输入姓名',icon:'',duration: 1000});
      return ;
    }
   
    if(psw==''){
      wx.showToast({title: '请输入密码',icon:'',duration: 1000});
      return ;
    }
    
    console.log(name);
        if(telenum&&psw){
      wx.request({
     url:'https://wxapi.hotapp.cn/proxy/?appkey=hotapp88385331&url=https://k.zx35.com/mhaapi/com/easy/api/act/MYRegister/reg.act?',         
        data: {openid:app.data.openid,mobile:telenum,apikey:app.data.apikey,vcode:vcode,passwd:psw,name:name},
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          header: {passwd:psw}, // 设置请求的 header
          success: function(res){
            console.log(res);
            app.data.sessionid = res.data.rtData.sessionid;
            if(res.data.rtState!=0){
              wx.showToast({
                title: res.data.rtMsrg,
                icon:'loading',
                duration: 1000,
              });
                return ;
            }
            var success=true;
            wx.setStorageSync('login', success);
              wx.setStorageSync('phone',telenum);
              wx.setStorageSync('name',name);

                  // success
            wx.showToast({
              title: '注册成功啦',
              icon:'',
              duration: 1000,
            });
            setTimeout(function(){
              wx.navigateBack({
                delta: 1, // 回退前 delta(默认为1) 页面
                success: function(res){
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
                fail: function() {
                  // fail
                },
                complete: function() {
                  // complete
                }
              })
            },1000);
          },
          fail: function(fail) {
            // fail
            console.log(fail);
          },
          complete: function() {
            // complete
          }
        })
       }else{
          wx.showToast({
              title: '资料填写不完整哦',
              icon:'loading',
              duration: 1000,
            });
       }
    },
     // 判断是否为手机号
    isMobilePhone:function(phone) {
        var re=/^([0-9]{11})|(13[56][0-9]{8})$/;
        if (re.test(phone)) return true;
        else {
            return false;
        }
    }
})