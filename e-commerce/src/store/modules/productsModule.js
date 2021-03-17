import axios from 'axios'

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
        console.log(products)
        }
    },
    actions: {
      getProducts({ commit }) {
        axios.get('http://localhost:9999/api/products')
        .then(response => {
          commit('GET_PRODUCTS', response.data)
        })
        }
    }
   
  })