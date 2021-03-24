// import axios from 'axios'
// export default {
//     state: {
//       res:'',
//       userCart:[]
//     },
//     getters:{
//       res:state=>state.res
//     },
//     mutations: {
//      SAVE:(state,res)=>{
//        state.result=res
//        console.log('res'+state.result)
//      },
     
//     },
//     actions: {
//       postCart:({commit},payload)=>{
//        axios.post('http://localhost:9999/api/shoppings/add',{
//          _id:payload._id,
//          cartContents:payload.cart
//        })
       
//        .then(res=>commit('SAVE',res.data))
//          .catch(()=>{
//           let url='http://localhost:9999/api/shoppings/'+payload._id
//               console.log(url)
//             fetch(url, {
//                 method: 'PUT',
//                 headers: {
//                   'Content-type': 'application/json; charset=UTF-8',   
//                 },
//                 body: JSON.stringify({
//                 cartContents:payload.cart,
//             })
//           })
//           .then(res=>res.json())
//           .then(data=>commit('UPDATE',data))  
//         }) 
//       }
    
      
      
// }
 
// }   