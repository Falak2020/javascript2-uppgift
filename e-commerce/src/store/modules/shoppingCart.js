import axios from '@/axios'
export default{
    state: {
        shoppings:[],
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
        
        SAVE:()=>{
            console.log('the object is updated') 
        },

        USER_CART:(state,data)=>{
            state.shoppings=data
        },

        
        CLEAR:(state)=>{
            state.shoppings=[]
        },
        DEL_DB:()=>{
          console.log('the object is deleted from DB')
        }

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
         axios.get('/shoppings/'+id)//if there is an object in db with the same id then make update otherwise send the data
         .then(res=>{

           if(res.data){
            commit('SAVE')
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
             console.log(res)
           })
           } }) 
        
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

  //Delete the shopping cart from db
     deleteDB:({commit},payload)=>{
     
       axios.delete('/shoppings/'+payload._id,
        {headers:{'Authorization': `Bearer ${payload.token}`}})
       .then(res=>{
         commit('DEL_DB',res)})

     }
    }
    
  }