import axios from './index'

export const getProductList = data =>axios.request({
  url: 'product/getProductList',
  data,
  method: 'get'
})
