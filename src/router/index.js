import Vue from 'vue'
import Router from 'vue-router'

import Channel from '@/views/Main/Channel.vue'
import Article from '@/views/Main/Article.vue'
import Error from '@/views/Error.vue'
import Login from '@/views/Main/Login'
import Setting from '@/views/Main/Setting'


import {authToken} from '@/service/getData'
Vue.use(Router)

const routes = [
  {
    path: '/',
    component: () => import('@/views/Main.vue'),
    redirect: '/channel/1',
    children: [
      {
        path: 'login',
        component: Login,
        meta: {
          title: '登录'
        }
      }, {
        path: '404',
        component: Error, 
        meta: {
          title: '未找到页面'
        }
      }, {
        path: 'channel/:id',
        // component: () => import('@/views/Main/Channel.vue')
        meta: {
          title: '列表'
        },
        component: Channel
      }, {
        path: 'article/:id',
        component: Article,
        meta: {
          title: '文章'
        }
      }, {
        path: 'join',
      }, {
        path: 'about'
      }, {
        path: 'setting',
        component: Setting,
        meta: {
          title: '设置',
          requireAuth: true
        }
      }
    ]
  }, {
    path: '/user'
  }
]

const router = new Router({
  routes
})


router.beforeEach((to, from, next) => {
  // 将当前页面的标题设置为to.meta.title
  document.title = to.meta.title

  // 判断是否需要登录
  if (to.matched.some(route => route.meta.requireAuth)) {
    // 判断token是否存在，判断token是否有效
    const token = localStorage.getItem('token')
    if (token) {
      // 判断是否有效 /api/user/token
      authToken().then(res => {
        if (res.data.res_code === 200) {
          next()
        }
      })
    } else {
      next('/login')
    }
  } else {
    // 正常跳转
    next()
  }
})

export default router