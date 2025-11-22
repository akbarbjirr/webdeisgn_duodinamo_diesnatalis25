import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/HomePage.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/AboutPage.vue')
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import('@/pages/EventsPage.vue')
  },
  {
    path: '/articles',
    name: 'Articles',
    component: () => import('@/pages/ArticlesPage.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/pages/ContactPage.vue')
  },
  {
    path: '/tips',
    name: 'Tips',
    component: () => import('@/pages/TipsPage.vue')
  },
  {
    path: '/education',
    name: 'Education',
    component: () => import('@/pages/EducationPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Selalu scroll ke atas saat navigasi ke page baru
    return { top: 0, behavior: 'smooth' }
  }
})

export default router