
let host = 'http://47.93.49.254:7040'
const apiRequest = (url, method, data) => {     //接收所需要的参数，如果不够还可以自己自定义参数
  let header = { 'Authorization': wx.getStorageSync('token') }
  let promise = new Promise(function (resolve, reject) {
    wx.request({
      url: host+url,
      data: data ? data : null,
      method: method,
      header: header ? header : { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        //接口调用成功
        resolve(res);    //根据业务需要resolve接口返回的json的数据
      },
      fail: function (res) {
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
        // fail调用接口失败
        // reject({ errormsg: '网络错误,请稍后重试', code: -1 });
      }
    })
  });
  return promise;  //注意，这里返回的是promise对象
}

module.exports = apiRequest;
