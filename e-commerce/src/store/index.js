import Vue from 'vue'
import Vuex from 'vuex'
import productsModule from './modules/productsModule'
import getOneProduct from './modules/getOneProduct'
import login from './modules/login'
import register from './modules/register'

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
    register
  }
})