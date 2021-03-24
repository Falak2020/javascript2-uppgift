import axios from 'axios'

export default ({
    state: {
     result:'',
     errormsg:''
    },
    getters:{
     result:state=>state.result,
    errormsg:state=>state.errormsg
    },
    mutations: {
      RESULT_TRUE:(state,message)=>{
          state.result=message
      },
      ERROR_USER:state=>{
          state.errormsg='Fel to create the email is already registered try again'
          console.log(state.errormsg)
      },
      CLEAR_VALUE:state=>{
          state.result=''
          state.errormsg=''
      }
    },
    actions: {
      registerUser:({commit},user)=>{
             axios.post('http://localhost:9999/api/users/register',{
              firstName:user.firstName,
              lastName:user.lastName,
              email:user.email,
              password:user.password
            })
            .then(response=>{
                commit('RESULT_TRUE',response.data.message)
            })
            . catch (()=>commit('ERROR_USER'))  
          },
          clearValue:({commit})=>{
             commit('CLEAR_VALUE')
        }
          
    }
   
  })