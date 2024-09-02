import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import GetAllView from '@/views/GetAllView.vue'
import GetSingle from '@/views/GetSingle.vue'
import InsertView from '@/views/InsertView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/product/getAll',
      name: 'product_get_all',
      component: GetAllView
    },
    {
      path: '/product/get/:id',
      name: 'product_get',
      component: GetSingle
    },
    {
      path: '/product/insert/',
      name: 'product_insert',
      component: InsertView
    },
  ]
})

export default router
