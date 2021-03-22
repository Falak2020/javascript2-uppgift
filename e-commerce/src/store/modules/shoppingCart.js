export default{
    state: {
        shoppings:[],
        newPrice:0,

      
    },
    getters:{
        shoppings:state=>state.shoppings,
        newPrice:state=>state.newPrice,
      

    },
    mutations: {
        ADD_TO:(state,shop)=>{
            state.shoppings.push(shop)
        },
       
     CHANGE:(state,newPrice)=>{
            state.newPrice=newPrice
        },
        DELETE:(state,shop)=>{
            state.shoppings=state.shoppings.filter(order=>order._id!=shop._id)
            console.log(state.shoppings)
        }
    },
    actions: {
        addTo:({commit},shop)=>{
            commit('ADD_TO',shop)
        },
        change:({commit},newPrice)=>{
            commit('CHANGE',newPrice)
        },
        deleteOrder:({commit},shop)=>{
            commit('DELETE',shop)
        }
    }
    
  }