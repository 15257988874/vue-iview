import axios from './index'

export const Login = (data) => axios.request({
  url: 'loginManage/login',
  data,
  method: 'post'
})

export const getUserInfo = (data) => axios.request({
  url: 'user/getUserInfo',
  data,
  method: 'get'
})
export const getUserList = (data) => axios.request({
  url: 'user/getUserList',
  data,
  method: 'get'
})

