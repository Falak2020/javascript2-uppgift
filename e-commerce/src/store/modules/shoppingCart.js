import axios from '@/axios'
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
            
            state.statusCode=res.statusCode
           
        },

        USER_CART:(state,data)=>{
            state.shoppings=data
        },

        
        CLEAR:(state)=>{
            state.shoppings=[]
        },

    },
    ////////////////////////////////////////////////
    actions: {
      // add order to the shopping cart
        addTo:({commit},{shop,quantity})=>{
            commit('ADD_TO',{shop,quantity})
          },
          
      // delete order from shopping cart
        deleteOrder:({commit},item)=>{
            commit('DELETE',item)
        },

      //send shopping cart to database
        postCart:({commit},payload)=>{
         let id=payload._id
         axios.get('/shoppings/'+id)
         .then(res=>{
           commit('SAVE',res)
           if(res.data){
             axios.put('/shoppings/'+payload._id,
                 {cartContents:payload.cart},
                  {headers:{'Authorization': `Bearer ${payload.token}`}} )
                  .then(res=>console.log(res))
             
           }
           else{
            axios.post('/shoppings/add',{
              _id:payload._id,
             cartContents:payload.cart
           },
           {headers:{'Authorization': `Bearer ${payload.token}`}}
           )
           
           .then(res=>{
             commit('SAVE',res.data)
             console.log(res)
           })
           } }) 
        
          // axios.post('/shoppings/add',{
          //         _id:payload._id,
          //         cartContents:payload.cart
          //       },
          //       {headers:{'Authorization': `Bearer ${payload.token}`}}
          //       )
                
          //       .then(res=>{
          //         commit('SAVE',res.data)
          //         console.log(res)
          //       })
          //       .catch(()=>{
                  
          //              axios.put('/shoppings/'+payload._id,
          //               {cartContents:payload.cart},
          //               {headers:{'Authorization': `Bearer ${payload.token}`}}
                        
          //               )
          //               .then(res=>console.log(res))
          //        }) 
               },
           

 // Bring the users shopping cart from database 
        getUserCart:({commit},id)=>{
           
            let url='http://localhost:9999/api/shoppings/'+id

            axios.get(url)
            .then((res)=>{
              if(res.data)
              commit('USER_CART',res.data.cartContents)
            })
          },
 //Clear shopping cart when the user log out
        clearUserCart({commit}){
          commit('CLEAR')
        },

       
    }
    
  }