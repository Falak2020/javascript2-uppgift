import Vue from 'vue'
import Vuex from 'vuex'
import productsModule from './modules/productsModule'
import getOneProduct from './modules/getOneProduct'
import login from './modules/login'
import register from './modules/register'
import shoppingCart from './modules/shoppingCart'
import postCart from './modules/postCart'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    productsModule,
    getOneProduct,
    login,
    register,
    shoppingCart,
    postCart
  }
})