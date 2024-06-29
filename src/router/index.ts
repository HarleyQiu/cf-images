import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomePage/index.vue')
    },
    {
      path: '/upload',
      name: 'upload',
      component: () => import('@/views/UploadPage/index.vue')
    },
    {
      path: '/text2img',
      name: 'text2img',
      component: () => import('@/views/TextToImage/index.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    }
  ]
})

export default router
