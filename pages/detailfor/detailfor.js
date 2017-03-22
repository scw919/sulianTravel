
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
        address:"正在定位",
        movie:[],
        fav:'star',
        price:0,
        imgindex:0,
        name:"",
        desc:"",
        code:5,
        phone:82821818,
        longitudeHotel:0,
        latitudeHotel:0,
        defaultSrc:
"http://mha.zx35.com/mha/attachment/i3/27_1481791642567_1.jpg",
        headImg:"",
        scaleWidth:"",
        scaleHeight:""

    },
  loadinfo:function(){
    var limit=10;
     var that=this;
    var adate="2017-" + app.data.month + "-"+app.data.day;
    var ddate="2017-" + app.data.twomonth + "-"+app.data.twoday;
    var estateid=this.data.estateid;
    var openid = wx.getStorageSync('openid');
    
    wx.request({ 
    url:'https://wxapi.hotapp.cn/proxy/?appkey=hotapp88385331&url=https://k.zx35.com/mhaapi/com/easy/api/act/MYHome/getHomeTypeByEstateId.act',
      data: {apikey:app.data.apikey,openid:openid,adate:adate,ddate:ddate,estateid:estateid},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
         if(res.data.rtState!=0){
              wx.showToast({
                title: res.data.rtMsrg,
                icon: 'loading',
                duration: 2000
              });
              return;
            }      

        console.log(res.data.rtData);
        var mdata = res.data.rtData;
       that.setData({movie:mdata});
      }
    })
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
     console.log(options.headImg);
      console.log(options.id);
      var twoday=app.data.twoday;
      var twomonth=app.data.twomonth;
      var day=app.data.day;
      var month=app.data.month;
      var daynight=app.data.daynight;
      
      app.data.hotelLonglati = options.longlati;

      var jingwei = app.data.hotelLonglati;
      console.log(jingwei);

      var llarr = jingwei.split(",");
      var longitude = Number(llarr[0]);
      var latitude = Number(llarr[1]);

      this.setData({
        estateid:options.id,
        twoday:twoday,
        twomonth:twomonth,
        day:day,
        month:month,
        daynight:daynight,
        name:options.name,
        code:options.code,
        desc:options.desc,
        phone:options.phone,
        longitudeHotel : longitude,
        latitudeHotel : latitude,
        headImg:options.headImg
      });
      app.data.hotelphone = this.data.phone;
      
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
  getHotelLocation:function(){
     wx.showToast({
        title:'加载中，请勿重复点击哦',
        icon:'loading',
        duration: 1000,
          
      });
    wx.openLocation({
      latitude: this.data.latitudeHotel,
      longitude: this.data.longitudeHotel,
      scale: 28
    })
  },
  // gpsLocation:function(){
  //    wx.getLocation({
  //       type: 'wgs84',
  //       success: function(res) {
  //         console.log(res);
  //         var latitude = res.latitude;
  //         var longitude = res.longitude;
  //         var speed = res.speed;
  //         var accuracy = res.accuracy;
  //       }
  //     })
  // },
  // onShareAppMessage: function() {
  //   // 用户点击右上角分享
  //   return {
  //     title: 'title', // 分享标题
  //     desc: 'desc', // 分享描述
  //     path: 'path' // 分享路径
  //   }
  // },
  // share:function(){
  //   wx.showModal({
  //       title: '温馨提示',
  //       content: '请点击右上角按钮实现分享',
  //       success: function(res) {
  //         if (res.confirm) {
  //           console.log('用户点击确定');
  //         }
  //       }
  //     })
  // },
  // share:function(){
  //   this.onShareAppMessage();
  // },
  
  call:function(){
      wx.showToast({
          title:'加载中，请勿重复点击哦',
          icon:'loading',
          duration: 1000,
        
       });
    var num =  app.data.hotelphone;
    wx.makePhoneCall({
      phoneNumber:app.data.hotelphone,
      success: function(res) {
        // success
        console.log(res);
      }
    })
  },
  hotline:function(){
      wx.showToast({
        title:'加载中，请勿重复点击哦',
        icon:'loading',
        duration: 1000,
          
      });
   wx.makePhoneCall({
    phoneNumber:app.data.hotelphone, //仅为示例，并非真实的电话号码
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
    for(var i=0;i<this.data.movie.length;i++){

      if(i==e.currentTarget.dataset.id){
         array.push(true);
        //  this.setData({
        //    scaleWidth:200,
        //    scaleHeight:200
        //  });
      }else{
         array.push(false);
      }
     
    }
    console.log(array);
    this.setData({
      ineed:array
    });
  
  },
  yuding:function(e){
    console.log(e);
    var typeid=e.target.dataset.typeid;
    var typename=e.target.dataset.typename;
    var typecode=e.target.dataset.typecode;
    var price=e.target.dataset.price;
    var succe=wx.getStorageSync('login');
    // var vurl = "../dingdan/dingdan?estateid="+this.data.estateid+"&name="+this.data.name+"&typeid="+typeid+"&typename="+typename+"&typecode="+typecode+"&price="+price;
    var aurl = "../dingdan/dingdan?estateid="+this.data.estateid+"&name="+this.data.name+"&typeid="+typeid+"&typename="+typename+"&typecode="+typecode+"&price="+price;
    var vurl="..detailfor/detailfor";
    console.log(succe);
    if(succe){
      // console.log('突然这是咋回事');
      wx.redirectTo({
            url: aurl,
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
        content: '不登录咋预定呢',
        success: function(res) {
          if (res.confirm) {
            wx.navigateTo({
            url: '../myorder/myorder?backPage='+encodeURIComponent(vurl),
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