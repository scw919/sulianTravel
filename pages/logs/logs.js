//logs.js
// var util = require('../../utils/util.js')
var app=getApp();
Page({
  data: {
    logs: [],
    nighttime:1,
    reducecolor:"black",
    address:"",
    month:1,
    today:1,
    day:1,
    tormmer:1, 
    now:1,
    twomonth:1,
    twoday:1,
    year:2016,

    allday:['日','一','二','三','四','五','六'],
    region:'店家服务',
    menu:{},
    hotel:"酒店",
    city:'我附近',
    num:0
    

  },
  onLoad: function (e) {
  var that=this;
 if(e.now){
   console.log(e.now);
  that.setData({
  hotel:e.now
})
  }

  


  

 var date=new Date;
   var year=date.getFullYear();
    var month=date.getMonth();
   var today=date.getDate();
   var day=date.getDay();//星期几
   //var daya = new Date(year,month,today).getDay();
  // console.log(daya);
   console.log(day);
   that.gettommer(day,1);

     month++;
     if(month>12){
      month=1;
      year++;
     
    }
//本月共多少天
 var monthDay = new Date(year,month,0).getDate();
 that.gettwo(monthDay,month,today);

//  var mingtian=today+1;
//  console.log(monthDay);
// var mingyue=month;
// if (mingtian>monthDay) {
// 	console.log("-----");
//  	mingtian=1;
//  	mingyue=month+1;
//  	 if(mingyue>12){
//  	 	console.log(mingyue);
//       mingyue=1;
//     }
 	
//  };
//  that.setData({
//  		twoday:mingtian,
//  		twomonth:mingyue
//  	})

    var allday=that.data.allday;
   
   that.setData({
     month:month,
     today:today,
     day:allday[day],
     //day:allday[daya],

   })



  },
  onShow:function(e){
      var that=this;

  console.log(app.data.menus);
if(app.data.menus){
that.setData({
  region:'已选定',
  // menu:e.id
})
}

if(app.data.city){
  that.setData({
     city:app.data.city
  })
}

if(app.data.day){ 

      var date=new Date();
      var year=date.getFullYear();
      var month=date.getMonth();
    // var day=date.getDate();

      month++;
  
      if(month>12){
        month=1;
        year++;
      }
      if(app.data.month){
          month=app.data.month;
      }
  //本月共多少天
  var monthDay = new Date(year,month,0).getDate();
        //被点击入住的日期
    var today=app.data.day;
    that.gettwo(monthDay,month,today);
    ///一星期的数组
    var allday=that.data.allday;
    //
    //2 31 5 2016
    var firstDay = new Date(year,month,today).getDay();
      that.gettommer(firstDay,1);
      that.setData({
            today:today,
            day:allday[firstDay],
            nighttime:1,
            month:month,
            year:year
           // now:firstDay
         })
    }
  }, 
  chooseDate:function(e){
    
     console.log("number=" +  this.data.num);
     var returnUrl = "../logs/logs";
    if(this.data.num < 3){
       this.data.num++;
        wx.navigateTo({
            url: '../mypen/mypen?backPage=' + encodeURIComponent(returnUrl),
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
            title: '提示',
            content: '最多选3次哦，如需再选要先返回首页哦',
            success: function(res) {
              
            }
          })
    }
    
  },
  bindreduce:function(){
  	var that=this;
    if(that.data.nighttime>1){
that.data.nighttime--;
if(that.data.nighttime==1){
  that.setData({
    reducecolor:"grey"
  })
}
    var date=new Date();
 var year=that.data.year;
    var num=that.data.nighttime;
    that.gettommer(this.data.now,-1);
  
    var move=that.data.twoday-1;
       var twomonth=that.data.twomonth;
        console.log(move,year);
        if (move<=0) {
       
        twomonth--;
   
       	if (twomonth<=0) {
       		year--;
       		twomonth=12
       	};
    var monthDay = new Date(year,twomonth,0).getDate();
        	move=monthDay;
       };
    that.setData({
        nighttime:this.data.nighttime,
         twoday:move,
        twomonth:twomonth,
        year:year
    })
    } 
  },
  bindplus:function(){
    var that=this;
        var date=new Date();
        that.data.nighttime++;
        var num=this.data.nighttime;
        //6 1 4
        that.gettommer(that.data.now,1);
          var move=that.data.twoday+1;
          var twomonth=that.data.twomonth;
          var year=that.data.year;
          var monthDay = new Date(year,twomonth,0).getDate();
          if (move>monthDay) {
            move=1;
          twomonth++;
            if (twomonth>=12) {
              twomonth=1
              year++;
            };
          };
      that.setData({
            twoday:move,
            twomonth:twomonth,
            year:year
      })
    if(that.data.nighttime>0){
    that.setData({
          reducecolor:"black",
            nighttime:that.data.nighttime
        })
    } 
  },
  //获取地理位置
  reverseloca:function(){
    var that=this;
    wx.chooseLocation({
      success: function(res){
          console.log(res);
          wx.setStorageSync('latitude', res.latitude);
          wx.setStorageSync('longitude',res.longitude);
          wx.setStorageSync('address',res.name);
          app.data.city="我附近";
          that.setData({
            address:res.address,
            city:'我附近' 
          });
          var latitude=res.latitude;
          var longitude=res.longitude;
          app.data.longitude = res.longitude;
          app.data.latitude = res.latitude;
          if(wx.getStorageSync('longitude')==longitude||wx.getStorageSync('latitude')==latitude){
                that.setData({
    
                address:wx.getStorageSync('address'),
              })
          return;
        }
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  gettommer:function(day,num){
    var that=this;
        var tormmer=day+num;
        if (tormmer<0) {
          tormmer=6
        }; 
      tormmer=Math.abs(tormmer)%7;
    var allday=that.data.allday;
    
          that.setData({
          now:tormmer,
          tormmer:allday[tormmer]
         })
      },
  //  onShareAppMessage: function() {
  //   // 用户点击右上角分享
  //   return {
  //     title: 'title', // 分享标题
  //     desc: 'desc', // 分享描述
  //     path: 'path' // 分享路径
  //   }
  // },
   //我附近的酒店和选择地点
  mynear:function(){
       wx.navigateTo({
         url: '../switchcity/switchcity',
         success: function(res){
         }
       })
  },gettwo:function(monthDay,month,today){
  	var that=this;
var mingtian=today+1;

var mingyue=month;
if (mingtian>monthDay) {
	
 	mingtian=1;
 	mingyue=month+1;
 	 if(mingyue>12){
      mingyue=1;
    }
 	
 };
 that.setData({
 		twoday:mingtian,
 		twomonth:mingyue
 	})

  },
  yuding:function(){
      var twoday=this.data.twoday;
      var twomonth=this.data.twomonth;
      var day=this.data.today;
      var month=this.data.month;
      var daynight=this.data.nighttime;
      app.data.daynight=daynight;
      console.log(app.data.daynight);
      app.data.menus='';
      app.data.twoday=twoday;
      app.data.twomonth=twomonth;
      app.data.day=day;
      app.data.month=month;
      var year = new Date().getFullYear();
      app.data.adate = new Date(year,month-1,day);
      app.data.ddate = new Date(year,twomonth-1,twoday);
      
      var all=this.data.city+'的'+this.data.hotel;
      console.log(all);
      if(this.data.address == ""){
         wx.showToast({
            title:'先要定位方可预定哦',
            icon:'loading',
            duration: 1000,
          
          });
         this.reverseloca();
          wx.redirectTo({
              url: `../hotel/hotel?name=${all}`,
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
      }
       else
            {
              wx.redirectTo({
                    url: `../hotel/hotel?name=${all}`,
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
            } 
        
      },
      myregion:function(){
        var menu=this.data.menu;
        wx.navigateTo({
              url: `../thing/index?id${menu}`,
              success: function(res){
                // success
              }
            })
          },
          clickme:function(){
            wx.showToast({
              title:'点击加减按钮会自动更新退房时间哦',
              icon:'loading',
              duration: 2000,
          
          });
          }
})

// wx.getLocation({
//       type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
//       success: function(res){
//             // success
//             var latitude=res.latitude;
//             var longitude=res.longitude;
//             app.data.longitude = res.longitude;
//             app.data.latitude = res.latitude;

//             if(wx.getStorageSync('longitude')==longitude||wx.getStorageSync('latitude')==latitude){
//               that.setData({
              
//               address:wx.getStorageSync('address'),
//             })
//         return;
//             } 
//         else{
//           that.reverseloca();
//         }
          
//       },
//       fail: function() {
//         // fail
//       },
//       complete: function() {
//         // complete
//       }
//     })

