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
     }
    },
    actions: {
      postCard:({commit},cart)=>{
        
       axios.post('http://localhost:9999/api/shoppings/add',{
         
         cartContents:cart
       })
       
       .then(res=>commit('SAVE',res.data))
      }
     

    },
    
  }