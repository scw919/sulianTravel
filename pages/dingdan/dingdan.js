

var app=getApp();
var arr= [];
var brr=[];
Page({
  data:{
      estateid:0,
      name:"234",
      price:100,
      day:0,
      month:0,
      twoday:0,
      twomonth:0,
      daynight:0,
      room:1,
      plus:"+",
      hehe:"",
      phonenum:"",
      quxiao:'',
      total:0,
      // apikey:"8a53b78c56541fb00156541fb0760000",
      note:"",
      acname:"",
      appkey:"",
      openid:"",
      hotpsn:"",
      hotmobile:110,
      typeid:120,
      typenum:8,
      typename:"精品",
      toView: 'gray',
      scrollTop: 100,
      roomArray:[],
      tip:'',
      buttonDisabled:false,
      modalHidden:true,
      show:false,
      selected:false,
      roomidArr:[],
      viewhover:false,
      isChange:false,
      pageBackgroundColor:'',
      choseArr:[]
  },
  //  loadDetail:function(){
  //   var limit=10;
    
  //   var apikey=this.data.apikey;
  //   var openid="openid";
  //   // var estateid=this.data.estateid;
  //   var room = this.data.room;
  //   var hehe = this.data.hehe;
  //   var note = this.data.note;
  //   var phonenum = this.data.phonenum;
  //   wx.request({          url:'https://k.zx35.com/mhaapi/com/easy/api/act/MYOrder/newOrder.act',
  //     data: {apikey:app.data.apikey,openid:openid,estateid:estateid,room:room,hehe:hehe,note:note,phonenum:phonenum},
  //     method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  //     // header: {}, // 设置请求的 header
  //     success: function(res){
  //        console.log(res);
  //     //  that.setData({movie:mdata});
  //     }
  //   })
  // },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
     console.log(options.estateid);
     console.log(options.name);
     console.log(options.typeid);
     console.log(options.typename);
     console.log(options.price);
     var twoday=app.data.twoday;
     var twomonth=app.data.twomonth;
     var day=app.data.day;
     var month=app.data.month;
     var daynight=app.data.daynight;
     var hehe = wx.getStorageSync('name') ;
     var phonenum= wx.getStorageSync('phone');
     var note= wx.getStorageSync('note');
      this.setData({
        estateid:options.estateid,
        twoday:twoday,
        twomonth:twomonth,
        day:day,
        month:month,
        daynight:daynight,
        hotmobile:phonenum,
        hotpsn:hehe,
        name:options.name,
        typename:options.typename,
        price:options.price,
        typeid:options.typeid
      }); 
      console.log(daynight);

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
  // addCount:function(){
  //     var that=this;
  //     var room=that.data.room;
  //     if(room>=3){
  //       console.log(room)
  //       wx.showModal({
  //           title: '提示',
  //           content: '一个客人最多定三间哦',
  //           success: function(res) {
  //             if (res.confirm) {
  //               console.log('用户点击确定')
  //             }
  //           }
  //        })
  //     }else{
  //       room++;
  //     }  
  //   that.setData({
  //     room:room
  //   })
  //   app.data.room = room;
  // },
//   minusCount:function(){
//       var that=this;
//   var room=that.data.room;
//   if(room==1){

//   }else{
//     room--;
//   }

// that.setData({
//   room:room
// });
//  app.data.room = room;
// },
//房间号
showtap:function(){
  var that=this;
  var modalHidden=that.data.modalHidden;
  var estateid=that.data.estateid;
  var typeid=that.data.typeid;
  var apikey=app.data.apikey;
  var adate = app.data.adate.getFullYear()+"-"+(app.data.adate.getMonth()+1)+"-"+app.data.adate.getDate();
  var ddate = app.data.ddate.getFullYear()+"-"+(app.data.ddate.getMonth()+1)+"-"+app.data.ddate.getDate();

   wx.request({          
     url:'https://wxapi.hotapp.cn/proxy/?appkey=hotapp88385331&url=https://k.zx35.com/mhaapi/com/easy/api/act/MYHome/getHomeRoom.act',
      data: {apikey:app.data.apikey,openid:app.data.openid,estateid:estateid,typeid:typeid,adate:adate,ddate:ddate},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
         console.log(res.data.rtData);
          if(res.data.rtState!=0){
              wx.showToast({
                title: res.data.rtMsrg,
                icon: 'success',
                duration: 2000
              });
              return;
        };
        
         if(res.data.rtData==""){
          wx.showModal({
            title: '提示',
            content: '非常抱歉，此房间已住满',
            success: function success(res) {
              if (res.confirm) {
                console.log(res.comfirm);
                }
              }
            })
          }else{
              var arr=res.data.rtData;
              that.setData({
                modalHidden:false,
                  roomArray:arr
                });
              }
       // for(var k=0 ; k<arr.length; k ++){
       //   vrno.push(String(arr[k].rno));
       // }
        //  var htmlStr = "<view>"+vrno+"</view>";
      }
    });
   
   
},
  modalBindaconfirm:function(){
    arr = [];
    brr=[];
     this.setData({
      modalHidden:true,
      show:false,
      tip:'您点击了【确认】按钮！',
      buttonDisabled:false
    })
  },
  modalBindcancel:function(){
    arr = [];
    brr=[];
     this.setData({
      modalHidden:!this.data.modalHidden,
      tip:'您点击了【取消】按钮！'
    })
  },
  chosen:function(e){
      
       var roomnum = e.target.dataset.id;
       var rno= e.target.dataset.rno;
       var rnoHas = brr.indexOf(String(rno));
       var pos = arr.indexOf(String(roomnum));
       var tmpArray = this.data.roomArray;
     
       if(pos>=0) {
         arr.splice(pos,1);
        
         var roomNum = arr.length;
         for(var i = 0;i<tmpArray.length;i++){
           if(tmpArray[i].rmid==roomnum)tmpArray[i].roomNumber="123";
         }
          this.setData({
           room:roomNum
         });
         app.data.room = roomNum;
       }
       else {
         arr.push(roomnum);
         
          var roomNum = arr.length;
         for(var i = 0;i<tmpArray.length;i++){
           if(tmpArray[i].rmid==roomnum)tmpArray[i].roomNumber=0;
         };
         this.setData({
           room:roomNum
         });
          app.data.room = roomNum;
       };
       if(rnoHas>=0){
          brr.splice(rnoHas,1);
       }else{
          brr.push(rno);
       }
       console.log(brr);

      
       

      this.setData({
        roomidArr:arr,
        roomArray:tmpArray,
        choseArr:brr
      });
      if(roomnum){
        this.setData({
          viewhover:true
        });
        // var curSelRoom = arr.split(",");

      }
      console.log(this.data.roomidArr);
  },
  count:function(){
      wx.showToast({
            title:'不用填哦，房号选择好会自动生成哦',
            icon: 'loading',
            duration: 1000
          });
  },
  //获取电话号码
  getnum:function(e){
    this.setData({
      phonenum:e.detail.value
    })
   },
   getname:function(e){
       this.setData({
      hehe:decodeURI(encodeURI(e.detail.value))
      });
      console.log(e.detail.value);
      console.log(decodeURI(encodeURI(e.detail.value)));
   },
   getnote:function(e){
     this.setData({
       note:decodeURI(encodeURI(e.detail.value))
     })
   },
  //  selected:function(){
  //      this.setData({
  //         selected:true
  //      })
  //  },
   // 判断是否为手机号
    isMobilePhone:function(phone) {
        // your implement
        var re=/^([0-9]{11})|(13[56][0-9]{8})$/;
        if (re.test(phone)) return true;
        else {
            return false;
        }
    },
  tapMove: function(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
   toPay:function(e){ //下单
         wx.showToast({
            title:'加载中，请勿重复点击哦',
            icon: 'loading',
            duration: 1000
          });
    //  this.loadDetail();
      // var that=this; 
    //    if(!phonenum || !this.isMobilePhone(phonenum)){
    //   wx.showToast({
    //     title: '这就不是个电话',
    //     icon: 'loading',
    //     duration: 1000
    //   });
    //   return;
    //  } 
          var hehe=this.data.hehe;
          var phonenum=this.data.phonenum;
      if(hehe&&phonenum){
          var typename=this.data.typename;
         
          var note=this.data.note;
          var total=e.target.dataset.total;
          var room=this.data.room;
          var estateid=this.data.estateid;
          var typeid=this.data.typeid;
          var adate="2017-" + app.data.month + "-"+app.data.day;
          var ddate="2017-" + app.data.twomonth + "-"+app.data.twoday;
          try {
                wx.setStorageSync('total', total);
            } catch (e) {    
            }
          this.setData({
            total:total,
            hehe:hehe,
            phonenum:phonenum,
            note:note,
            estateid:estateid
          });
        console.log(total);
        console.log(phonenum);
        console.log(estateid);
        var openid = wx.getStorageSync('openid');
        var phonenum = this.data.phonenum;
        console.log(openid);
        var roomno=this.data.roomidArr.join(",");
        var price=this.data.price;
        var url=
        'https://wxapi.hotapp.cn/proxy/?appkey=hotapp88385331&url=https://k.zx35.com/mhaapi/com/easy/api/act/MYOrder/newOrder.act';
               wx.request({           
                  url:url,
                  data:{apikey:app.data.apikey,openid:openid,        estateid:estateid,adate:adate,ddate:ddate,typeid:typeid,hotpsn:hehe,hotmobile:phonenum,total:total,typenum:room,note:note,price:price,roomno:roomno}, 
                  method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, 
                  success: function(res){
                    
                    if(res.data.rtState!=0){
                      wx.showToast({
                        title: res.data.rtMsrg,
                        icon: 'loading',
                        duration: 2000
                      });
                      return;
                    }
                  console.log(res.data.rtMsrg);
                  console.log(res.data.rtData);
                  var acdata = res.data.rtData;
                  var daynight=app.data.daynight;
                  console.log(acdata.rsvId);
                  console.log(acdata.rsvno);
              wx.showModal({
                title: '请确认后所填信息',
                content: '请确认是否跳转到支付页面?',
                success: function(res) {
                  if (res.confirm) { 
              //把住店日期 离店日期 住几晚 房间数 姓名 手机号全部记录在案
                // var array= wx.getStorageSync('array');
                    wx.setStorageSync('name', hehe);
                    wx.setStorageSync('rsvId', acdata.rsvId);
                    wx.setStorageSync('rsvno', acdata.rsvno);
                    wx.setStorageSync('typenum', room);
                    wx.setStorageSync('daynight', daynight);
                    wx.redirectTo({
                       url: '../success/success?total='+total+'&estateid='+estateid+'&rsvId='+acdata.rsvId+'&rsvno='+acdata.rsvno+'&payname='+typename,
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
       })
      }else{
            wx.showModal({
            title: '提示',
            content: '房号，名字和电话都要填哦',
            success: function(res) {
              if (res.confirm) {
              
              }
            }
          })
        }
   } 
})