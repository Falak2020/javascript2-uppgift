import Vue from 'vue'
import Vuex from 'vuex'
import productsModule from './modules/productsModule'
import user from './modules/user'
import shoppingCart from './modules/shoppingCart'


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
    user,
    shoppingCart,
    
  }
})