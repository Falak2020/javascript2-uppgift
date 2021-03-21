export default{
    state: {
        shoppings:[],
        newPrice:1,
        selected:''
    },
    getters:{
        shoppings:state=>state.shoppings,
        newPrice:state=>state.newPrice,
        selected:state=>state.selected,

    },
    mutations: {
        ADD_TO:(state,shop)=>{
            state.shoppings.push(shop)
        },
        CALCULATE:(state,params)=>{
           state.newPrice=params.select*params.price
           state.selected=params.select
        }
    },
    actions: {
        addTo:({commit},shop)=>{
            commit('ADD_TO',shop)
        },
        calculate:({commit},params)=>{
            commit('CALCULATE',params)
        },
    }
    
  }