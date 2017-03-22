
var app=getApp();
Page({
  data:{
      estateid:0,
      ineed:[true,false,false,false],
        day:0,
        month:0,
        twoday:0,
        twomonth:0,
        daynight:0,
        apikey:"8a53b78c56541fb00156541fb0760000",
        movie:[
          {
            name:"时尚大床房",
            minprice:500
          },
            {
            name:"牛逼双床房",
            minprice:400
          },
            {
            name:"崧泽马荣床",
            minprice:1000
          },
            {
            name: "就是得劲床",
            minprice:200
          },],
          fav:'star',
          bedname:"",
          price:0,
          imgindex:0
    },
  loadinfo:function(){
    var limit=10;
    var that=this;
    var apikey=that.data.apikey;
    var openid="openid";
    var adate='2017-01-17';
    var ddate='2017-01-30';
    var estateid=this.data.estateid;
    wx.request({
        url:'https://wxapi.hotapp.cn/proxy/?appkey=hotapp88385331&url=http://k.zx35.com/mhaapi/com/easy/api/act/MYHome/getHomeTypeByEstateId.act',
      //  url : "http://k.zx35.com:8182/pisapi/v1/api.do?method=getProvinces",
      data: {apikey:apikey,openid:openid,adate:adate,ddate:ddate,estateid:estateid},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
         console.log(res);
         console.log(res.data);
        console.log(res.data.rtData);
        var mdata = res.data.rtData;
       that.setData({movie:mdata});
      }
    })
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载

    console.log(options.id);
      var twoday=app.data.twoday;
      var twomonth=app.data.twomonth;
      var day=app.data.day;
      var month=app.data.month;
      var daynight=app.data.daynight;
      this.setData({
        estateid:options.id,
        twoday:twoday,
        twomonth:twomonth,
        day:day,
        month:month,
        daynight:daynight
      });
       this.loadinfo();
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
  share:function(){
    this.onShareAppMessage();
  },
  call:function(){
    wx.makePhoneCall({
      phoneNumber: '123456',
      success: function(res) {
        // success
        console.log(res);
      }
    })
  },
  hotline:function(){
   wx.makePhoneCall({
    phoneNumber: '0517-86881212', //仅为示例，并非真实的电话号码
    success:function(res){
      console.log(res);
    }
  });
  },
  favEvent: function(e) {
   
    if (this.data.fav === 'star') {
      this.setData({
        fav:'like'
      });
      return;
    }

    this.setData({
      fav: 'star'
    });
  },
  cellclick:function(e){
    console.log();
    var array=[];
    for(var i=0;i<4;i++){

      if(i==e.currentTarget.dataset.id){
         array.push(true);
      }else{
         array.push(false);
      }
     
    }
    this.setData({
      ineed:array
    })
  },
  yuding:function(e){
    console.log(e);
    var price=e.target.dataset.id;
    var name=e.target.dataset.name;
    var succe=wx.getStorageSync('login');
    console.log(succe);
    if(succe){


      console.log('突然这是咋回事');
wx.navigateTo({
      url: `../dingdan/dingdan?price=${price}&&name=${name}`,
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
      wx.showModal({
        title: '您还未登录',
        content: '不登陆咋预定呢',
        success: function(res) {
          if (res.confirm) {
            wx.navigateTo({
            url: '../myorder/myorder',
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
        }
      })
    }
  }
})