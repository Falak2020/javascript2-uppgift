export default{
    state: {
        shoppings:[],
        newPrice:1,
    },
    getters:{
        shoppings:state=>state.shoppings,
        newPrice:state=>state.newPrice,
    },
    mutations: {
        ADD_TO:(state,shop)=>{
            state.shoppings.push(shop)
        },
        CALCULATE:(state,params)=>{
           state.newPrice=params.select*params.price
           console.log(state.newPrice)
        }
    },
    actions: {
        addTo:({commit},shop)=>{
            commit('ADD_TO',shop)
        },
        calculate:({commit},params)=>{
            commit('CALCULATE',params)
        }
    }
    
  }