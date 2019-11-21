// pages/shop/shop.js
const order = ['demo1', 'demo2', 'demo3']
Page({

  /**
   * 页面的初始数据
   */
  data: {
    native:0,
    classification:[
      { 'id': 1, 'title':'超值精选' },
      { 'id': 2, 'title': '女装' },
      { 'id': 3, 'title': '美妆' },
      { 'id': 4, 'title': '内衣' },
      { 'id': 5, 'title': '手机' },
      { 'id': 6, 'title': '鞋靴' },
      { 'id': 7, 'title': '生鲜' },
      { 'id': 8, 'title': '进口' },
      { 'id': 9, 'title': '百货' },
      { 'id': 10, 'title': '数码' },
      { 'id': 11, 'title': '男装' },
      { 'id': 12, 'title': '包饰' },
      { 'id': 13, 'title': '运动' },
      { 'id': 5, 'title': '美家' },
      { 'id': 6, 'title': '母婴' },
      { 'id': 7, 'title': '食品' },
      { 'id': 8, 'title': '家电' },
      { 'id': 9, 'title': '电脑' },
      { 'id': 9, 'title': '汽车' },
    ],
    classlist:[
      { 'title': '零食', 'ico': '../static/img/ico1.png', 'id': '1' },
      { 'title': '奶制品', 'ico': '../static/img/ico2.png', 'id': '2' },
      { 'title': '蔬菜', 'ico': '../static/img/ico3.png', 'id': '3' },
      { 'title': '海鲜', 'ico': '../static/img/ico4.png', 'id': '4' },
      { 'title': '零食', 'ico': '../static/img/ico1.png', 'id': '1' },
      { 'title': '奶制品', 'ico': '../static/img/ico2.png', 'id': '2' },
      { 'title': '蔬菜', 'ico': '../static/img/ico3.png', 'id': '3' },
      { 'title': '海鲜', 'ico': '../static/img/ico4.png', 'id': '4' },
      { 'title': '零食', 'ico': '../static/img/ico1.png', 'id': '1' },
      { 'title': '奶制品', 'ico': '../static/img/ico2.png', 'id': '2' },
    ],
    advimg:'../static/img/banner2.jpg',
    shoplist:[
      { 'title': '马卡龙巧克力', 'currimg': '../static/img/shopimg.jpg', 'proid': '1', 'hottitle': '双11', 'price': '10.00', 'paynum': '16666', 'naticeclass': [],'naticeclassname':'特别产品'},
      { 'title': '一缕抹茶 奶香四溢', 'currimg': '../static/img/shopimg.jpg', 'proid': '2', 'hottitle': '聚划算', 'price': '10.00', 'paynum': '123458745', 'naticeclass': [], 'naticeclassname': '特别产品'},
      { 'title': '马卡龙还是那个马卡龙', 'currimg': '../static/img/shopimg.jpg', 'proid': '3', 'hottitle': '', 'price': '10.00', 'paynum': '1589', 'naticeclass': ['实木', '特别制造'], 'naticeclassname': ''},
      { 'title': '马卡龙巧克力马卡龙巧克力马卡龙巧克力马卡龙巧克力', 'currimg': '../static/img/shopimg.jpg', 'proid': '4', 'hottitle': '', 'price': '10.00', 'paynum': '123', 'naticeclass': [], 'naticeclassname': '特别产品'},
    ]
  },
  //点击导航高亮
  swiperNav:function(e){
    this.setData({ 'native':e.target.dataset.i})
    // console.log()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})