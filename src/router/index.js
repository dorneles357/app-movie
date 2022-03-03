import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Guard from '../services/middleware';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    beforeEnter: Guard.auth
  },
/*   {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  }, */
  {
    path: '/upload',
    name: 'Upload',
    component: () => import('../views/Upload.vue')
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: () => import( '../views/Edit.vue')
  },
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
