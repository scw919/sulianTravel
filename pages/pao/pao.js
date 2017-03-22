
var app=getApp();
Page({
  data:{
  array:{},
  really:"",
  daynight:2
  },
  getOrderList:function(){
    var that = this;
    var url = "https://wxapi.hotapp.cn/proxy/?appkey=hotapp88385331&url=https://k.zx35.com/mhaapi/com/easy/api/act/MYOrder/getAllOrder.act";
          wx.request({           
            url:url,
            data:{apikey:app.data.apikey,sessionid:app.data.sessionid}, 
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, 
            success: function(res){
                      var listData=res.data.rtData;
                      console.log(res);
                      that.setData({array:listData});
                     }
      })
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
   var array= wx.getStorageSync('array');
   console.log(array);
    // name:"234",
    //   price:100,
    //     day:0,
    //   month:0,
    //   twoday:0,
    //   twomonth:0,
    //   daynight:0,
    //   room:1,
    //   plus:"+",
    //   hehe:"近平",
    //   phonenum:"110"
    this.setData({
      array:array,
      daynight:app.data.daynight
    });
    //  this.getOrderList();
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
  // }
})