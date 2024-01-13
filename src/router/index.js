import { createRouter, createWebHistory } from 'vue-router'
import IndexPageVue from '@/Pages/IndexPage.vue'
import AboutPageVue from '@/Pages/AboutPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: IndexPageVue
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPageVue
    }
  ]
})

export default router
