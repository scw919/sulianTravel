//index.js
//var util = require("../../utils/util")

var util='https://wxapi.hotapp.cn/proxy/?appkey=hotapp11377340&url='


//获取应用实例
var app = getApp()
Page({
  data: {
    lists: [
      // {
      //   imgUrl: util+"http://photocdn.sohu.com/20160306/mp62095218_1457238787147_3.jpeg",
      //   title: "台北特色民宿",
      //   info: "高山流水，梅花三弄，夕阳箫鼓，汉宫秋月，阳春白雪，渔樵问答，胡笳十八拍，广陵散，平沙落雁，十面埋伏。",
       
      //   uName: "张珊珊",
      //   isVideo: true,
      //   videoUrl: util.ossAliyuncs + "/videos/VID20161029121958.mp4",
      //   browse: 13299,
      //   like: 595,
      //   comment: 789,
      //   time: "刚刚"
      // },
      // {
      //   imgUrl: util + "http://photocdn.sohu.com/20160306/mp62095218_1457238787147_5.jpeg",
      //   title: "女儿乡：台北旅店",
      //   info: "九九八十一难，最难过的，其实是女儿国这一关，女儿乡的台北旅店，幽静与静谧的完美融合。",
       
      //   uName: "麦田的守望者",
      //   browse: 32499,
      //   like: 222,
      //   comment: 789,
      //   time: "1小时前"
      // },
      // {
      //   imgUrl: util + "http://photocdn.sohu.com/20160306/mp62095218_1457238787147_6.jpeg",
      //   title: "你好：台北旅店",
      //   info: "位在苗栗标榜以人本与自然永续共生的生态建筑民宿「树也ChooArt Villa」，不仅本身就是一栋绿建筑，入住者更可在大片山林中呼吸著芬多精、欣赏著园区内种植的多种原生植物，并从屋顶花园观察到生物跳岛与廊道等生态造景，享受顶级且完整的生态之旅。",
        
      //   uName: "雨碎江南",
      //   isVideo: true,
      //   videoUrl: util.ossAliyuncs + "/videos/%E7%8A%AF%E9%94%99-%E5%8F%8C%E7%AE%A1%E5%B7%B4%E4%B9%8C.mp4",
      //   browse: 4299,
      //   like: 2113,
      //   comment: 789,
      //   time: "昨天"
      // },
      // {
      //   imgUrl: util+ "http://photocdn.sohu.com/20160306/mp62095218_1457238787147_7.jpeg",
      //   title: "南投「秋山居」",
      //   info: "位在南投的「秋山居」特色在园区内的浓浓唐风以及大片玻璃窗美景，加上使用在地新鲜食材、工法细緻、摆盘诗意的无菜单佳餚，提供中国风的奢华享受。",
       
      //   uName: "小丸子",
      //   isVideo: true,
      //   videoUrl: util.ossAliyuncs + "/videos/%E8%BD%A6%E7%AB%99-%E5%8F%8C%E7%AE%A1%E5%B7%B4%E4%B9%8C.mp4",
      //   browse: 3299,
      //   like: 80,
      //   comment: 352,
      //   time: "2016-08-12"
      // },
      {
        imgUrl: util + "http://photocdn.sohu.com/20160306/mp62095218_1457238787147_8.jpeg",
        title: "屏东垦丁「船帆石866villa」",
        info: "也受许多台湾网友青睐的「船帆石866villa」，因为villa外牆有许多大型仙人掌植栽充满异国风情，且在私人隐私的设计下足功夫，受到许多名人的喜爱，堪称全馆服务更胜五星级的享受。",
      
        uName: "丶Song",
        browse: 23299,
        like: 810,
        comment: 221,
        time: "2016-12-13"
      },
      {
        imgUrl: util + "http://photocdn.sohu.com/20160306/mp62095218_1457238787147_11.jpeg",
        title: "台北九份「水湳洞Ample Villa」",
        info: "想起来武林外传里有一集，老白他们挖地道，小六拉这个曲，最后老白掉地道里了哈哈哈哈哈",
     
        uName: "狂凝眉",
        browse: 3599,
        like: 134,
        comment: 12,
        time: "2016-12-12"
      },
      {
        imgUrl: util + "http://photocdn.sohu.com/20160306/mp62095218_1457238787147_13.jpeg",
        title: "　南投清境农场 都铎式的「老英格兰庄园」",
        info: "塞上旧约终成空，夜阑魂归应梦同。纵死未肯忘心盟，何妨濡沫泥涂中。雁字依稀相思浓，女儿痴情谁与共？从此相见殊参商，却无画图忆姣容。地匝万芦一鸿起，老翅不回缘情重。碧落黄泉两孤冢，君自南北我西东。”写了个同人，唱起来佶屈聱牙，但似乎比原歌词稍微贴合一点。",
        
        uName: "Sarbanes-Oxley",
        browse: 3299,
        like: 80,
        comment: 789,
        time: "2016-12-12"
      },
      {
        imgUrl: util + "http://photocdn.sohu.com/20160306/mp62095218_1457238787147_25.jpeg",
        title: "花莲东海岸「斯图亚特海洋庄园」",
        info: "特别美",
       
        uName: "Sarbanes-Oxley",
        browse: 3299,
        like: 80,
        comment: 789,
        time: "2016-12-12"
      }
    ],


list:[
      {
        imgUrl: util+"http://image.peoplearts.cn/Admin/Upload/Image/20160523/v_12294950477.jpg",
        title: "台北特色民宿",
        info: "高山流水，梅花三弄，夕阳箫鼓，汉宫秋月，阳春白。",
       
        uName: "张珊珊",
        isVideo: true,
        videoUrl: util.ossAliyuncs + "/videos/VID20161029121958.mp4",
        browse: 13299,
        like: 595,
        comment: 789,
        time: "刚刚"
      },
      {
        imgUrl: util + "http://img.mp.itc.cn/upload/20161108/37794d2c7b8c431284645179bca0dcb2_th.jpeg",
        title: "女儿乡:台北旅店",
        info: "九九八十一难，最难过的，其实是女儿国这一关。",
       
        uName: "麦田的守望者",
        browse: 32499,
        like: 222,
        comment: 789,
        time: "1小时前"
      },
      {
        imgUrl: util + "http://photocdn.sohu.com/20160306/mp62095218_1457238787147_6.jpeg",
        title: "你好：台北旅店",
        info: "位在苗栗标榜以人本与自然永续共生的生态建筑民宿",
        
        uName: "雨碎江南",
        isVideo: true,
        videoUrl: util.ossAliyuncs + "/videos/%E7%8A%AF%E9%94%99-%E5%8F%8C%E7%AE%A1%E5%B7%B4%E4%B9%8C.mp4",
        browse: 4299,
        like: 2113,
        comment: 789,
        time: "昨天"
      },
      {
        imgUrl: util+ "http://photocdn.sohu.com/20160306/mp62095218_1457238787147_7.jpeg",
        title: "南投「秋山居」",
        info: "位在南投的「秋山居」特色在园区内的浓浓唐风以及大片玻璃窗美景",
       
        uName: "小丸子",
        isVideo: true,
        videoUrl: util.ossAliyuncs + "/videos/%E8%BD%A6%E7%AB%99-%E5%8F%8C%E7%AE%A1%E5%B7%B4%E4%B9%8C.mp4",
        browse: 3299,
        like: 80,
        comment: 352,
        time: "2016-08-12"
      }],










    controls: true//是否显示播放控件
  },
  onLoad: function (options) {

  },
  //下拉刷新
  onPullDownRefresh: function () {

  },
  //上拉加载
  onReachBottom: function () {

  },
  //点击video对象播放当前视频
  play: function (e) {
    //当前对象索引
    var index = e.currentTarget.id.split("-")[1],
      lists = this.data.lists,
      video = wx.createVideoContext(e.currentTarget.id);
    //当前video对象 isPlay设置     
    lists[index].isPlay = !!lists[index].isPlay ? false : true;

    console.log(lists[index].isPlay)

    //isPlay为true 执行播放操作
    if (lists[index].isPlay) {
      //播放当前video对象时其他video对象全部停止
      lists.forEach(function (item, i) {
        if (item.isVideo) {
          var video = wx.createVideoContext("vds-" + i);
          video.pause();
          //设置其他其他video对象isPlay为false
          if (i != index)
            item.isPlay = false;
        }
      });
      video.play();
    } else {
      video.pause();
    }
  },
  //进入详情
  detail: function (e) {
    console.log(e.currentTarget.dataset.title)
    // wx.navigateTo({
    //   url: '../details/detail?id=' + e.currentTarget.dataset.id + '&title=' + e.currentTarget.dataset.title
    // })
  }
})
