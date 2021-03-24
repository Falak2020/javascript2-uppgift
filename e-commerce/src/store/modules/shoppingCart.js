import axios from 'axios'
export default{
    state: {
        shoppings:[],  
    },
    getters:{
        shoppings:state=>state.shoppings,
        newPrice:state=>state.newPrice,
        newShoppings:state=>state.newShoppings,
        cartNumber:state=>{
          let counter=0
           state.shoppings.forEach(element => {
               counter+=element.quantity
           });
           return counter
        },
        totalPrice:state=>{
            let total=0
            state.shoppings.forEach(element=>{
                total+=element.quantity*element.shop.price
            })
            return total
        }
    },
    mutations: {
        ADD_TO:(state,{shop,quantity})=>{
            let exists=state.shoppings.find(item=>item.shop._id===shop._id)
            if(exists){
                exists.quantity+=1      
            }
            else{
             state.shoppings.push({shop,quantity})
            }
        },
       
        DELETE:(state,item)=>{
            state.shoppings=state.shoppings.filter(order=>order.shop._id!=item.shop._id)
            
        },
        USER_CART:(state,data)=>{
            state.shoppings=data
        },


    },
    actions: {
        addTo:({commit},{shop,quantity})=>{
            commit('ADD_TO',{shop,quantity})
        },
       
        deleteOrder:({commit},item)=>{
            commit('DELETE',item)
        },
        getUserCart:({commit},id)=>{
            console.log(id)
            let url='http://localhost:9999/api/shoppings/'+id
            console.log(url)
            axios.get(url)
            .then((res)=>{
              commit('USER_CART',res.data.cartContents)
            })
          },
       
    }
    
  }