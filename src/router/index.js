import { createRouter, createWebHistory } from 'vue-router'
import Info from '@/views/Info.vue'
import Demo from '@/views/Demo.vue'
import Home from '@/components/Home.vue'
import Product from '@/components/Product.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    // Mỗi một đường dẫn sẽ tương ứng 1 object. Trong object bắt buộc phải có: path
    // và component
    {
      path: '/info',
      component: Info,
    },
    {
      path: '/demo',
      component: Demo,
    },
    {
      path: '/product',
      component: Product,
    },
  ],
})

export default router
