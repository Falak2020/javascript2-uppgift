export default{
    state: {
        shoppings:[],
        newPrice:0,
        newShoppings:[]
    },
    getters:{
        shoppings:state=>state.shoppings,
        newPrice:state=>state.newPrice,
        newShoppings:state=>state.newShoppings

    },
    mutations: {
        ADD_TO:(state,shop)=>{
            state.shoppings.push(shop)

        },
       
     CHANGE:(state,order)=>{
             state.newShoppings=state.newShoppings.filter(shop=>shop._id!=order._id)
             state.newShoppings.push(order)
             state.newPrice=order.price
        },
        DELETE:(state,shop)=>{
            state.shoppings=state.shoppings.filter(order=>order._id!=shop._id)
            
        }
    },
    actions: {
        addTo:({commit},shop)=>{
            commit('ADD_TO',shop)
        },
        change:({commit},order)=>{
            commit('CHANGE',order)
        },
        deleteOrder:({commit},shop)=>{
            commit('DELETE',shop)
        }
    }
    
  }