import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login'
import Home from './components/Home'

Vue.use(Router)

const router = new Router({
    routes: [
       {
         path: '/',
         redirect: '/login'
       },
       {
         path: '/login',
         component: Login
       },
       {
         path: '/home',
         component: Home
       }
    ]
})

router.beforeEach((to, from, next) => {
      // to 将要访问的路径
      // from 代表从哪个路径跳转而来
      // next 是一个函数，向下执行符合条件的函数
      // next('路径') 强制跳转

      if (to.path === '/login') return next()
      // 获取token
      const tokenStr = window.sessionStorage.getItem('token')
      if (tokenStr) return next('/login')
      next()
})

export default router
