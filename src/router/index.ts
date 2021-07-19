import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Home from '#/Home.vue'
import Category from '#/Category.vue'
import Social from '#/Social.vue'
import Profile from '#/Profile.vue'
import Sign from '#/Sign.vue'
import OrderList from '#/OrderList.vue'
import OrderDetail from '#/OrderDetail.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
  },
  {
    path: '/social',
    name: 'Social',
    component: Social,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/sign',
    name: 'Sign',
    component: Sign,
  },
  {
    path: '/order-list',
    name: 'OrderList',
    component: OrderList,
  },
  {
    path: '/order-detail',
    name: 'OrderDetail',
    component: OrderDetail,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
