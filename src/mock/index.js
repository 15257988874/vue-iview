import Mock from 'mockjs'
// import { getUserInfo } from './response/user'
// import { baseURL } from '@/config'
// Mock.mock(baseURL + 'user/getUserInfo', 'post', getUserInfo)
// Mock.mock(/user\/getUserInfo/, 'get', getUserInfo)
Mock.setup({
  // timeout: '1000-5000'
  timeout: 0
})

const mockList = require.context('./response', true, /.js$/)
mockList.keys().forEach(key => {
  let el = mockList(key)
  for (const i in el) {
    if (Object.hasOwnProperty.call(el, i)) el[i]()
  }
})
export default Mock
