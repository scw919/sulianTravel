
var app=getApp();

Page({
  data:{
    arr:[],
    month:[],
    year:[],
    one:[],
    past:"",
    logsPage:""
  },
  onLoad:function(options){
    console.log(options.backPage);
    var that=this;
    // 页面初始化 options为页面跳转所带来的参数
   var date=new Date; 
   var year=date.getFullYear();
   var today=date.getDate();
   var day=date.getDay();//星期几
   var month=date.getMonth();
   that.setData({
     past:today,
     logsPage:options.backPage
   })
 
  var arra=[];
  var montharray=[];
  var yeararray=[];
  var pastarray=[];

  if(month>=12){
      month=0;
      year++;
    }
      month++;
      montharray.push(month);
      yeararray.push(year);

 //求出当月第一天在一个月中的星期几值 可以作为当月离第一天的天数
  var firstDay = new Date(year,month,1).getDay();
  console.log(firstDay);
var Array=[];
for(var i=0;i<firstDay;i++){
    Array.push(" ");
}

  //当月最后一天的日期值作为本月的天数
 var monthDay = new Date(year,month,0).getDate();
 console.log(monthDay);
 for(var i=1;i<monthDay+1;i++){
    Array.push(i);
}

that.setData({
  one:Array
})
    

for(var j=1;j<5;j++){
    if(month>12){
      month=1;
      year++;
    }
      month++;
      montharray.push(month);
      yeararray.push(year);
     
  
 //求出当月第一天在一个月中的星期几值 可以作为当月离第一天的天数
  var firstDay = new Date(year,month,1).getDay();
  console.log(firstDay);
var array=[];
for(var i=0;i<firstDay;i++){
    array.push(" ");
}

  //当月最后一天的日期值作为本月的天数
 var monthDay = new Date(year,month,0).getDate();

 for(var i=1;i<monthDay+1;i++){
    array.push(i);
}

arra.push(array);
    
}

that.setData({
  arr:arra,
  month:montharray,
  year:yeararray,
 
})



 
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
  choose:function(e){
      var that=this;
      // app.data.month=month;
      // app.data.day=day;
      console.log(e,2222);

      var item=e.target.dataset;
       var currMonth = new Date().getMonth()+1;
      if(this.data.month[0]<=currMonth && item.id<that.data.past) return;
         app.data.day=item.id;
          var currentPage = getCurrentPages();
          console.log(currentPage);
          
        //  wx.showModal({
        //     title: '提示',
        //     content: '日期不能小于今天哦，请重新选择',
        //     success: function(res) {
              
        //     }
        //   });
       
          
      
      var returnBack = this.data.logsPage;
      // wx.navigateBack({
      //       //  delta:currentPage.length - 1,
      //     // 回退前 delta(默认为1) 页面
      //      success: function(res){
      //         //success
      //          wx.navigateTo({
      //             url:returnBack,
      //             success: function(res){
      //               // success
      //             },
      //             fail: function() {
      //               // fail
      //             },
      //             complete: function() {
      //               // complete
      //             }
      //           })
      //       },
      //       fail: function() {
      //         // fail
      //       },
      //       complete: function() {
      //         //complete
      //       }
        //  })
  },
  // choose:function(e){
  //   var that=this;

  //   console.log(e,2222);

  //   var item=e.target.dataset;

  //   if(item.id<that.data.past) return;
  //   app.data.day=item.id;


  //   wx.navigateBack({
  //   // 回退前 delta(默认为1) 页面
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

  //   // wx.navigateTo({
        
  //   //   url:`../logs/logs?id=${item.id}`,
  //   //   success: function(res){
  //   //     // success
  //   //   },
  //   //   fail: function() {
  //   //     // fail
  //   //   },
  //   //   complete: function() {
  //   //     // complete
  //   //   }
  //   // })
  // },
  allclick:function(e){
    var month=e.currentTarget.dataset.now;
    var day=e.target.dataset.id;
    console.log(month);
    app.data.month=month;
    app.data.day=day;
    var currentPage = getCurrentPages();
      wx.navigateBack({
        //  delta:currentPage.length+1,
      // 回退前 delta(默认为1) 页面
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
})