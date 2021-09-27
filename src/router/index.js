import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login.vue'
import Home from '@/components/home/home.vue'
import User from '@/components/user/user.vue'
import Echarts from '@/components/echarts/echarts.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'login',
      path: '/',
      component: Login
    },
    {
      name: 'home',
      path: '/home',
      component: Home,
      children: [
        {
          name: 'user',
          path: '/user',
          component:User
        },
        {
          name: 'echarts',
          path: '/echarts',
          component:Echarts
        }
      ]
    }
  ]
})
