import axios from '@/axios'

export default {
    state: {
      products:[],
      product:null,
      res:'',
      err:'',
      searchVal:'',
      sorted:[]
    },
    getters:{
      products: state => state.products,
      res: state => state.res,
      err:state=> state.err,
      product: state => state.product,
      filteredProducts: state => {
        return state.products.filter(product => product.name.toLowerCase().match(state.searchVal.toLowerCase()))
      },
      searchValue: state => state.searchVal,
      sorted: state=> state.sorted
    },
    mutations: {
      GET_PRODUCTS(state, products) {
        state.products = products
      },

      GET_PRODUCT(state, product) {
        state.product = product
      },

      ADD_PRO:state=>{
        state.res='Product is added successfully'
        state.err=''
      },

      ERR: state =>{
        state.res=''
        state.err='Fel to add a new product'
      },
      SEARCH: (state, val) => {
        state.searchVal = val
      },

      SORT: (state,data)=>{
        state.sorted=data
       
      }
    },
    actions: {
      //Get all the products
      getProducts({ commit }) {
        axios.get('/products/limit/9')
        .then(response => {
          commit('GET_PRODUCTS', response.data)
        })
        },

     //Get one Product
     getProduct({ commit },id) {
      axios.get('/products/'+id)
      .then(response => {
        commit('GET_PRODUCT', response.data)
      })
      },

      //add new Product
      addProduct({ commit },payload){
       
        axios.post('/products/new',payload.product, {headers:{'Authorization': `Bearer ${payload.token}`}})
        .then(res=> commit('ADD_PRO',res))
        .catch(()=>commit('ERR'))
      },

      search: ({commit}, val) => {
        commit('SEARCH', val)
      },

      sort:({commit})=>{
        axios.get('/products/price/sort')
        .then(res=>{
         
          commit('SORT',res.data)})
        
      }

    }
   
  }