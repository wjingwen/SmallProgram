import apiRequest from './AipConfig'

//登录接口的调用
let login = (data) => {
  return new Promise((resolve, reject) => {
    resolve(apiRequest('/dljy-userservice/external/login', 'post', data))
  })
}

//注册接口的调用
let register = (data) => {
  return new Promise((resolve, reject) => {
    resolve(apiRequest('/', 'get', data))
  })
}

//最后需要将具体调用的函数暴露出，给具体业务调用

module.exports =  {
  login: login,
  register: register
}