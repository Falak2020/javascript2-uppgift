import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../views/productDetails.vue'
import login from '../views/userLogin.vue'
import shoppingCart from '../views/shoppingCart.vue'
import signup from '../views/signUp.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/userLogin',
    name: 'login',
    component: login
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  },
  {
    path: '/shoppingCart',
    name: 'shoppingCart',
    component: shoppingCart
  },
  
  {
    path: '/productDetails/:id',
    name: 'Details',
    component: Details,
    props:true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
