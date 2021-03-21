import axios from 'axios'
export default {
    state: {
      res:''
    },
    getters:{
      res:state=>state.res
    },
    mutations: {
     SAVE:(state,res)=>{
       state.result=res
     },
     UPDATE:()=>{

     }
    },
    actions: {
      postCard:({commit},payload)=>{
        console.log(payload._id)
       axios.post('http://localhost:9999/api/shoppings/add',{
         _id:payload._id,
         cartContents:payload.cart
       })
       
       .then(res=>
        commit('SAVE',res.data))
    },
    updateCart:({commit},payload)=>{
      let url='http://localhost:9999/api/shoppings/'+payload._id.toString()
      let newCart={
        _id:payload._id,
        cartContents:payload.cart
      }
      console.log(newCart)
      console.log(url)
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          
        },
        body: JSON.stringify({
        newCart,
    })
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
    commit('UPDATE',data)})
  
       
    }
  }
  }