import axios from '@/axios'

export default {
    state: {
      products:[],
      res:'',
      err:''
    },
    getters:{
      products: state => state.products,
      res: state => state.res,
      err:state=> state.err
    },
    mutations: {
      GET_PRODUCTS(state, products) {
        state.products = products
        },


      ADD_PRO:state=>{
        state.res='Product is added successfully'
        state.err=''
      },

      ERR: state =>{
        state.res=''
        state.err='Fel to add a new product'
      }
    },
    actions: {
      getProducts({ commit }) {
        axios.get('/products')
        .then(response => {
          commit('GET_PRODUCTS', response.data)
        })
        },

      //add new Product
      addProduct({ commit },payload){
       
        axios.post('/products/new',payload.product, {headers:{'Authorization': `Bearer ${payload.token}`}})
        .then(res=> commit('ADD_PRO',res))
        .catch(()=>commit('ERR'))
      }

    }
   
  }