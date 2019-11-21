// pages/user/user.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
     userinfo:{
       'username':'--',
       'userheaderimg':'../static/img/headerimg.jpg',
       'money':'0.00',
       'intemoney':'0.00',
       'isrenzheng':'0'
     },
     ordernumber:{
       'paymentnumber':1,
       'deliverynumber':0,
       'receivingnumber':1,
       'evaluatenumber':0,
       'salenumber':0,
     }
  },
  // 退出
  loginout:function(){
    wx.showModal({
      title: '提示',
      content: '确定退出吗？',
      success(res) {
        if (res.confirm) {
          wx.removeStorage({
            key: 'token',
            success(res) {
              wx.redirectTo({
                url: '/pages/login/login'
              })
            }
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let username = 'userinfo.username'
    let userheaderimg = 'userinfo.userheaderimg'
    this.setData({
      [username]: app.globalData.userInfo.nickName,
      [userheaderimg]: app.globalData.userInfo.avatarUrl
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.data.userinfo.username = app.globalData.userInfo.nickName
    this.data.userinfo.userheaderimg = app.globalData.userInfo.avatarUrl
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.data.userinfo.username = app.globalData.userInfo.nickName
    this.data.userinfo.userheaderimg = app.globalData.userInfo.avatarUrl
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