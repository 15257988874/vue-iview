import Home from '../views/Home.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    alias: '/home_alias',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/argu/:name',
    name: 'Argu',
    component: () => import('../views/Argu.vue')
  },
  {
    path: '/parent',
    component: () => import('../views/Parent.vue'),
    redirect: '/parent/child', // 重定向到第一个子路由
    children: [
      {
        path: 'child', // 嵌套路由时子路由不需要写斜杠
        component: () => import('../views/Child.vue')
      }
    ]
  },
  {
    path: '/named_view',
    components: { // 命名视图直接花括号
      default: () => import('../views/Child.vue'),
      email: () => import('../views/Email.vue'),
      tel: () => import('../views/Tel.vue')
    }
  },
  {
    path:'/store',
    component: () => import('../views/Store.vue')
  },
  {
    path: '/home_redirect',
    redirect: '/'
  }
]

export default routes

// 动态路由 命名路由 嵌套路由 命名视图 路由别名 路由重定向
