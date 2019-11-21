// pages/login/login.js
const api = require('../../utils/Api.js');
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      username:'',
      password:'',
  },
  // 提交表单内容
  formSubmit:function(e){
    let params = e.detail.value
    //存储token
    wx.setStorageSync('token', '2223332125')
    //跳转到首页
    wx.switchTab({
      url: '/pages/index/index'
    })
  },
  //微信授权登录
  getUserInfo: function (e) {
    console.log(e.detail.userInfo)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    //存储token
    wx.setStorageSync('token', '2223332125')
    //跳转到首页
    wx.switchTab({
      url: '/pages/index/index'
    })
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