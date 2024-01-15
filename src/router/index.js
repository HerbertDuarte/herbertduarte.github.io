import { createRouter, createWebHistory } from 'vue-router'
import IndexPageVue from '@/Pages/IndexPage.vue'
import ThanksVue from '@/Pages/Thanks.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: IndexPageVue
    },
    {
      path: '/thanks',
      name: 'thanks',
      component: ThanksVue
    }
  ]
})

export default router
