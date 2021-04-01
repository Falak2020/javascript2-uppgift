import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../views/productDetails.vue'
import login from '../views/login.vue'
import shoppingCart from '../views/shoppingCart.vue'
import signup from '../views/register.vue'
import contactUs from '../views/contactUs.vue'
import settings from '../views/userSettings'
import newProduct from '../views/newProduct'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'signup',
    component: signup
  },
  {
    path: '/userSettings',
    name: 'settings',
    component: settings,
    meta: { authorize: true }
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
  {
    path: '/contact-us',
    name: 'contact-us',
    component: contactUs
  },
  {
    path: '/newProduct',
    name: 'newProduct',
    component: newProduct,
    meta: { authorize: true }
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const { authorize } = to.meta
  console.log(to.fullPath)
  let data = JSON.parse(localStorage.getItem("data"))
  
  if(authorize) {
    if(!data){
      next({path: '/login', query: { redirect: to.fullPath }})
    } else {
     if(to.fullPath=="/newProduct"){
     
       if(data.role=="admin")
          next()
        else
        {
           next({path: '/'})
        }   
     }
      else
      next()    
    }
  }
  next()
})


export default router
