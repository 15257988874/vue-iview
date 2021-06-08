import Mock from 'mockjs'
const Random = Mock.Random

export const getUserInfo = () => {
  Mock.mock(/user\/getUserInfo/,'get',{
    userName: 'lux',
    // String
    'a|3-5':'msg',
    'b|2':'msg',
    // Number
    'c|0-100':0,
    'd|0-100.2-3':0,
    'e|122.2':0,
    // Boolean
    'isBuildIn|1-9':false, // min / (min + max)为 false
    'isBuildIn2|1':true, // 50%为true
    // Object
    'object|2-4': {
      '110000': '北京市',
      '120000': '天津市',
      '130000': '河北省',
      '140000': '山西省'
    },
    // Array
    'array|1-10': [
      {
        'name|+1': [
          'Hello',
          'Mock.js',
          '!'
        ],
        'age|+2': 18
      }
    ],
    // Function
    'foo': function() {
      return this.a
    },
    // RegExp
    regExp: /[0-9][A-Z]/,

    /*  数据占位符 */
    // email Random.email(domain?)
    email: Random.email('163.com'),
    // image Random.image( size?, background?, foreground?, format?, text? )
    image: Random.image('60x60','#f00','#fff','png','lux'),
    // dataimage  Random.dataImage( size?, text? )
    dataimage: Random.dataImage('160x160','dataimage'),
    // address
    province: Random.province(),
    city: Random.city(true),
    county: Random.county(true),
    // text
    cparagraph: Random.cparagraph(2),
    // color
    color: Random.color(),
    rgba: Random.rgba(),
    rgba: Random.rgba(),
    // title
    ctitle: Random.ctitle(),
    // date
    date: Random.date('yyyy-MM-dd'),
    time: Random.date('HH:mm:ss'),
    datetime: Random.datetime('yyyy-MM-dd HH:mm:ss'),
    // web
    // ip: Random.ip(),
    ip:'@ip',
    url: Random.url(),
    // helper
  })
}


export const getUserList = () => {
  Mock.mock(/user\/getUserList/,'get',{
    'data|1-10': [
      {
        'id|+1': 0,
        'isVip|1-9':false,
        email:'@email',
        'age|1-100':0,
        // province: '@province',
        // city: '@city(true)',
        county: '@county(true)',
        ip:'@ip',
        name:'@cname'
      }
    ]
  })
}
