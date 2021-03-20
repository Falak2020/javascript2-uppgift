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
      postCard:({commit},payload)=>{
        console.log(payload._id)
       axios.post('http://localhost:9999/api/shoppings/add',{
         _id:payload._id,
         cartContents:payload
       })
       
       .then(res=>commit('SAVE',res.data))
      }
     

    },
    
  }