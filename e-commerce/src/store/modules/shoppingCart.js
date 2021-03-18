export default{
    state: {
        shoppings:[]
    },
    getters:{
        shoppings:state=>state.shoppings
    },
    mutations: {
        ADD_TO:(state,shop)=>{
            state.shoppings.push(shop)
        }
    },
    actions: {
        addTo:({commit},shop)=>{
            commit('ADD_TO',shop)
        }
    }
    
  }