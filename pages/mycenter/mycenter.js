
//获取应用实例
var app = getApp()
Page({
  data:{
   

  userInfo:{},
// picture: "../../images/0414couser.png",
name: "单刀",
// 1.菜单栏数据
  items:[
      {
       icon:'../../images/my_order@2x.png',
       text:'我的订单'
    },

    // {
    //     icon:'../../images/my_wallet@2x.png',
    //    text:'我的优惠券',
    //    arrow:'../../image/0106arrow3x.png'
    // },

    //   {
    //     icon:'../../images/my_teacher@2x.png',
    //    text:'我的奖品'
    // },
    
    //   {
    //     icon:'../../images/my_collecte@2x.png',
    //    text:'我的酒店'
    // },
    
    //   {
    //     icon:'../../images/my_about@2x.png',
    //    text:'关于点评'
    // },
    
    //   {
    //     icon:'../../images/0128award@2x.png',
    //    text:'推荐有礼'
    // }
  ],

    
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
   var that=this;
 
 //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      console.log(userInfo);
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
   
 
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
  findout:function(e){
    

     var dast=e.currentTarget.dataset.id;
     var index=e.currentTarget.dataset.index;
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
     else
     {
           //  if(index==0){
        wx.navigateTo({
            url: `../queryOrder/queryOrder?rsvId=${rsvid}`,
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
        //    }else{
        //  wx.navigateTo({
        //     url: `../emerty/emerty?id=${dast}`,
        //     success: function(res){
        //       // success
        //     },
        //     fail: function() {
        //       // fail
        //     },
        //     complete: function() {
        //       // complete
        //     }
        //   })
        //    }
    
     }
  },
  loadup:function(){
      var that=this;
      wx.showModal({
      title: '确定退出吗',
      
      success: function(res) {
        if (res.confirm) {
          var fail=false;
          wx.setStorageSync('login', fail);
          wx.navigateBack({
            delta: 1, // 回退前 delta(默认为1) 页面
            success: function(res){
              
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
  },
  clear:function(){
      wx.showModal({
        title: '提示',
        content: '确定清理数据吗',
        success: function(res) {
          if (res.confirm) {
            wx.clearStorage()
          }
        }
      })         
    }
})


