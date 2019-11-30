import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@views/home'),
    children: [
      {
        name: 'home-product',
        path: 'product/:id',
        component: () => import('@views/product')
      }
    ]
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@views/cart')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('@views/category')
  },
  {
    path: '/personal',
    name: 'Personal',
    component: () => import('@views/personal')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@views/search')
  },
  { path: '*', name: 'deafult', redirect: '/home' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
