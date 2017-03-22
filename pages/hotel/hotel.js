//movice.js
//先获取实例
var app=getApp();
Page({
  data:{
    movie:[],
    lastid:0,
    num:"nimabi",
    morehidden:true,
    bedname:"",
    price:0,
    imgindex:0,
    defaultImg:
           "http://mha.zx35.com/mha/attachment/i3/27_1481792356478_1.jpg"
  },
  loadmore:function(offset){
    var limit=10;
    var that=this;
    // var longitude = wx.getStorageSync('longitude');
    // var latitude = wx.getStorageSync('latitude');
    var longitude = app.data.longitude ;
     var latitude = app.data.latitude;
    var lolastr = longitude+","+latitude;
    wx.request({
        url:'https://wxapi.hotapp.cn/proxy/?appkey=hotapp11377340&url=https://k.zx35.com/mhaapi/com/easy/api/act/MYHome/getHomeEstate.act',
 //url:'https://k.zx35.com/mhaapi/com/easy/api/act/MYHome/getHomeEstateByUser.act',
      data: {apikey:app.data.apikey,openid:app.data.openid,longlati:lolastr},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        var mdata=res.data.rtData;
        console.log(mdata);
        // var oldArr=that.data.movie;
        // var newArr=oldArr.concat(mdata)
        // var len=newArr.length;
        // that.setData({lastid: newArr.length})
         that.setData({movie:mdata})
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
       

      }
    })
  },
  onLoad:function(options){
     
     wx.setNavigationBarTitle({
      title:options.name,
      success: function(res) {
        // success
      }
    })
    var that=this;
    // 页面初始化 options为页面跳转所带来的参数
    this.loadmore(0);
     
  },
  onReady:function(){
    // 页面渲染完成
   
  },
  onShow:function(){
    // 页面显示
  
  },
  onHide:function(){
    // 页面隐藏
    
  },
  onUnload:function(){
    // 页面关闭
  
  },
  showmore:function(event){
    var that=this;
    var num=that.data.lastid;
    //草拟吗
    //取 page 中的data 里的数据 要使用 this.data.lastid
      wx.showModal({
        title: '提示',
        content: '只有这么多了',
        success: function(res) {
          if (res.confirm) {
            that.setData({
            morehidden:false

             })
          }
        }
      })
  },
  cellclick:function(e){
    //  bedname = e.target.dateset.bedname;
    //  price = e.target.dateset.price;
    //  imgindex = e.target.dateset.imgindex;
    //  this.setData({
    //    bedname:bedname,
    //    price:price,
    //    imgindex:imgindex
    //  });
    //  wx.navigateTo({
    //   url: `../detail/detail`,
    //   success: function(res){
    //     // success
    //   },
    //   fail: function() {
    //     // fail
    //   },
    //   complete: function() {
    //     // complete
    //   }
    // })
  },
  //去预定
  // bookHotel:function(){
  //    wx.redirectTo({
  //      url: '../detailfor/detailfor',
  //      success: function(res){
  //        // success
  //      },
  //      fail: function() {
  //        // fail
  //      },
  //      complete: function() {
  //        // complete
  //      }
  //    })
  // }
})

 