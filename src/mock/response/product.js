import Mock from 'mockjs'

export const getProductList = () => {
  Mock.mock(/product\/getProductList/,'get',{
    'data|10-20': [
      {
        'id|+1':0,
        url:'@url',
        'price|1-10000':0,
        'hasCount|1': true
      }
    ]
  })
}
