
var app=getApp();
var roomarrList ={};
Page({
  data:{
  item:{},
  really:"",
  daynight:1,
  day:0,
  month:0,
  twoday:0,
  twomonth:0,
  total:0,
  phone:82821219,
  name:"开心",
  room:1,
  defaultSize: 'default',
  primarySize: 'default',
  warnSize: 'default',
  disabled: false,
  plain: false,
  loading: false,
  roomarray:[]
  },
  getOrderInfo:function(rsvId){
     var that = this;
    var urls="https://wxapi.hotapp.cn/proxy/?appkey=hotapp88385331&url=https://k.zx35.com/mhaapi/com/easy/api/act/MYOrder/getOrderInfo.act";
    var rsvid=rsvId;
     var sessionid=wx.getStorageSync('sessionid');
    // var sessionid=app.data.sessionid;
    console.log(sessionid);
    console.log(rsvId);
    // var sessionid = app.data.sessionid;
       wx.showToast({
              title: '加载中',
              icon:'loading',
              duration: 1000,
            });
      wx.request({                  
        url:urls,
        data:{apikey:app.data.apikey,sessionid:sessionid,                              rsvid:rsvid,openid:app.data.openid},  
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, 
        header:{"content-type":'application/x-www-form-urlencoded'},
        success: function(res){
           console.log(res);
           var arrayOrder = res.data.rtData;
           var roomarr=res.data.rtData.roomList;

            that.setData({
               item:arrayOrder,
            // roomarray:roomarr
            });
            var rrr=[];
            for(var i=0;i<roomarr.length;i++){
                rrr.push(roomarr[i].rno);
            }
            // return roomarr;
            // console.log(roomarrList);
            console.log(arrayOrder);
            that.setData({
               roomarray : rrr
            })
          }
       })
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    this.getOrderInfo(options.rsvId);
    var name = wx.getStorageSync('name');
    var phone = wx.getStorageSync('phone');
    var tian = wx.getStorageSync('daynight');
    console.log(tian);
    this.setData({
            daynight:tian,
             name:name,
             phone:phone,
             day:app.data.day,
             month:app.data.month,
             twoday:app.data.twoday,
             twomonth:app.data.twomonth,
             room:app.data.room
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
  //取消订单
  cancelOrder:function(){
      var rsvId = wx.getStorageSync('rsvId');
      var openId = wx.getStorageSync('openid');
       wx.request({                  
        url:"https://wxapi.hotapp.cn/proxy/?appkey=hotapp88385331&url=https://k.zx35.com/mhaapi/com/easy/api/act/MYOrder/cancelOrder.act",
        data:{
          apikey:app.data.apikey,
          openid:openId,                             
          rsvid:rsvId
           },  
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, 
        success: function(res){
           console.log(res);
           
       
          }
       })
  }
})
   