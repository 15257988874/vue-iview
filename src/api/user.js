import axios from './index'

export const Login = (data) => axios.request({
  url: 'loginManage/login',
  data,
  method: 'post'
})
