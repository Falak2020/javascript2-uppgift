import axios from '@/axios'

export default ({
    state: {
      products:[]
    },
    getters:{
      products: state => state.products
      
    },
    mutations: {
      GET_PRODUCTS(state, products) {
        state.products = products
        }
    },
    actions: {
      getProducts({ commit }) {
        axios.get('/products')
        .then(response => {
          commit('GET_PRODUCTS', response.data)
        })
        }
    }
   
  })