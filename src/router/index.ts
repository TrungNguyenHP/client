import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import Domains from '@/pages/Domains.vue'
import RegisterDomain from '@/pages/RegisterDomain.vue'
import Checkout from '@/pages/Checkout.vue'
import Contact from '@/pages/Contact.vue'
import Transfer from '@/pages/Transfer.vue'
import Renew from '@/pages/Renew.vue'
import Profile from '@/pages/Profile.vue'
import UserServices from '@/pages/UserServices.vue'
import Login from '@/pages/Login.vue'
import Register from '@/pages/Register.vue'
import GuestLayout from '@/layouts/GuestLayout.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import OrderSuccess from '@/pages/OrderSuccess.vue'
const routes = [
  {
    path: '/',
    component: DefaultLayout,
    meta: { requiresAuth: true },
    children: [
      { path: '', name: 'Home', component: Home },
      { path: 'domains', name: 'Domains', component: Domains },
      { path: 'registerdomain/:domain', name: 'RegisterDomain', component: RegisterDomain },
      { path: 'checkout', name: 'Checkout', component: Checkout },
      { path: 'contact', name: 'Contact', component: Contact },
      { path: 'transfer', name: 'Transfer', component: Transfer },
      { path: 'renew', name: 'Renew', component: Renew },
      { path: 'profile', name: 'Profile', component: Profile },
      { path: 'profile/userservices', name: 'UserServices', component: UserServices },
      { path: 'OrderSuccess', name: 'OrderSuccess', component: OrderSuccess },
    ],
  },
  {
    path: '/login',
    component: GuestLayout,
    children: [
      { path: '', name: 'Login', component: Login },
    ],
  },
  {
    path: '/register',
    component: GuestLayout,
    children: [
      { path: '', name: 'Register', component: Register },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Chặn truy cập nếu chưa đăng nhập
router.beforeEach((to, _, next) => {
  const isAuthenticated = localStorage.getItem('loggedIn') === 'true'
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router
