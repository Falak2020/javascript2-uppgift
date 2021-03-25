import axios from 'axios'
export default{
    state: {
        shoppings:[],
        statusCode:0,
        userCart:[]

    },
    getters:{

        shoppings:state=>state.shoppings,
        statusCode:state=>state.statusCode,
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
        
        SAVE:(state,res)=>{
            console.log(res.statusCode)
            state.statusCode=res.statusCode
            console.log(state.statusCode)
        },

        USER_CART:(state,data)=>{
            state.shoppings=data
        },

        
        CLEAR:(state)=>{
            state.shoppings=[]
        }

    },
    actions: {
        addTo:({commit},{shop,quantity})=>{
            commit('ADD_TO',{shop,quantity})
        },
       
        deleteOrder:({commit},item)=>{
            commit('DELETE',item)
        },

        postCart:({commit},payload)=>{
                axios.post('http://localhost:9999/api/shoppings/add',{
                  _id:payload._id,
                  cartContents:payload.cart
                },
                {headers:{'Authorization': `Bearer ${payload.token}`}}
                )
                
                .then(res=>commit('SAVE',res.data))
                  .catch(()=>{
                   let url='http://localhost:9999/api/shoppings/'+payload._id
                       console.log(url)
                     fetch(url, {
                         method: 'PUT',
                         headers: {
                           'Content-type': 'application/json; charset=UTF-8', 
                           'Authorization': `Bearer ${payload.token}`
                         },
                         body: JSON.stringify({
                         cartContents:payload.cart,
                     })
                   })
                   .then(res=>res.json())
                   .then(data=>commit('UPDATE',data))  
                 }) 
               },
           
//update users shopping cart
           updateOrder:({commit},payload)=>{

              let url='http://localhost:9999/api/shoppings/'+payload._id
           
                fetch(url, {
                    method: 'PUT',
                    headers: {
                      'Content-type': 'application/json; charset=UTF-8', 
                      'Authorization':`Bearer${payload.token}`
                    },
                    body: JSON.stringify({
                    cartContents:payload.cart,
                })
              })
              .then(res=>res.json())
              .then(data=>commit('UPDATE',data))  
            
           },
 // Bring the users shopping cart from database 
        getUserCart:({commit},id)=>{
           
            let url='http://localhost:9999/api/shoppings/'+id

            axios.get(url)
            .then((res)=>{
              commit('USER_CART',res.data.cartContents)
            })
          },
 //Clear shopping cart when the user log out
        clearUserCart({commit}){
          commit('CLEAR')
        }
       
    }
    
  }