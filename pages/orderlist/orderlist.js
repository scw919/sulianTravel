
var app=getApp();
var haoArr=[ ];
var haoma = [];
Page({
  data:{
  array:[],
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
  roomarrList:[]
  },
  getOrderInfo:function(){
     wx.showToast({
              title: '加载中',
              icon:'loading',
              duration: 1000,
            });
     var that = this;
    var urls="https://wxapi.hotapp.cn/proxy/?appkey=hotapp88385331&url=https://k.zx35.com/mhaapi/com/easy/api/act/MYOrder/getAllOrder.act";
   

    var sessionid=wx.getStorageSync('sessionid');
    console.log(sessionid);
    // var sessionid = app.data.sessionid;
      wx.request({                  
        url:urls,
        data:{apikey:app.data.apikey,sessionid:sessionid,openid:app.data.openid},  
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, 
        success: function(res){
           console.log(res);
           console.log(res.data.rtData);
           var arrayOrder = res.data.rtData;
          
           for(var i=0;i<arrayOrder.length;i++){
              haoArr.push(arrayOrder[i].roomList);
           }
          //  for(var j=0;j<haoArr.length;j++){
          //     haoma.push(haoArr[i].rno);
          //  }
            that.setData({
            array:arrayOrder,
            roomarrList:haoma
            });
           wx.setStorageSync('item', arrayOrder);
           
         
          }
       })
  },
  onLoad:function(options){
     var rsvid=wx.getStorageSync('rsvId');
    if(!rsvid){
        wx.showModal({
            title: '暂无订单',
            content: '你还没有下单哦',
            success: function(res) {
              if (res.confirm) {
                console.log('确定')
              }
            }
          })
     }
    console.log(app.data.daynight);
    // 生命周期函数--监听页面加载
    this.getOrderInfo(options.rsvId);
    var name = wx.getStorageSync('name');
    var phone = wx.getStorageSync('phone');
    var total = wx.getStorageSync('total');
    this.setData({
            daynight:app.data.daynight,
             name:name,
             phone:phone,
             day:app.data.day,
             month:app.data.month,
             twoday:app.data.twoday,
             twomonth:app.data.twomonth,
             room:app.data.room,
             total:total
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
   