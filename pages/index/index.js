const api = require('../../utils/Api.js');
Page({
  data: {
    background: ['banner1', 'banner2', 'banner3'],
    vertical: true,
    autoplay: true,
    interval: 2000,
    duration: 500,
    newproduct:[
      { 'title': '马卡龙巧克力', 'currimg': '../static/img/shopimg.jpg', 'proid': '1'},
      { 'title': '一缕抹茶 奶香四溢', 'currimg': '../static/img/shopimg.jpg', 'proid': '2'},
      { 'title': '马卡龙还是那个马卡龙', 'currimg': '../static/img/shopimg.jpg', 'proid': '3' },
      { 'title': '马卡龙巧克力马卡龙巧克力', 'currimg': '../static/img/shopimg.jpg', 'proid': '4' },
    ],
    advimg:'../static/img/banner2.jpg',
    messagearray:[
      { 'title': '新店开张 欢迎来品尝', 'discript': '一家超暖心的店', 'newsid': '1', 'newimg':'../static/img/shopimg.jpg'},
      { 'title': '马卡龙制作流程', 'discript': '一个关于马卡龙的教学视频', 'newsid': '1', 'newimg': '../static/img/shopimg.jpg' },
      { 'title': '不一样的四季【马卡龙】', 'discript': '一家超暖心的店', 'newsid': '1', 'newimg': '../static/img/shopimg.jpg' },
      { 'title': '你好，再次遇见', 'discript': '一个关于马卡龙的教学视频一家超暖心的店一个关于马卡龙的教学视频', 'newsid': '1', 'newimg': '../static/img/shopimg.jpg' },
    ],
    classification:[
      { 'title': '零食', 'ico':'../static/img/ico1.png','id':'1'},
      { 'title': '奶制品', 'ico': '../static/img/ico2.png', 'id': '2' },
      { 'title': '蔬菜', 'ico': '../static/img/ico3.png', 'id': '3' },
      { 'title': '海鲜', 'ico': '../static/img/ico4.png', 'id': '4' },
    ]
  },
  onLoad: function (options) {
    //console.log(wx.getStorageSync('token'))
    //api.login({'username':'111'})
    if (!wx.getStorageSync('token')){
      wx.showModal({
        title: '提示',
        content: '请稍后重试！',
        success(res) {
          if (res.confirm) {
            wx.redirectTo({
              url: '/pages/login/login'
            })
          }
        }
      })
    }
  },
})