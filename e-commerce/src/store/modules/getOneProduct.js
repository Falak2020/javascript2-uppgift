import axios from '@/axios'

export default ({
    state: {
      product:null
    },
    getters:{
      product: state => state.product
      
    },
    mutations: {
      GET_PRODUCT(state, product) {
        state.product = product
        }
    },
    actions: {
      getProduct({ commit },id) {
        axios.get('/products/'+id)
        .then(response => {
          commit('GET_PRODUCT', response.data)
        })
        }
    }
   
  })