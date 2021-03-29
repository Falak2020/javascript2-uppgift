import axios from '@/axios'
import router from '@/router'
export default {
    state: {
      token:'',
      error:'',
      status:'Login',
      userId:'',
      result:'',
      errormsg:'',
      role:'',
      changePassword:''
    },
    getters:{
      token: state => state.token,
      error: state => state.error,
      status:state=> state.status,
      userId:state=>state.userId,
      result:state=>state.result,
      errormsg:state=>state.errormsg,
      role: state=> state.role,
      changePassword : state=> state.changePassword
    },
    mutations: {
      RESULT_TRUE:(state)=>{
        state.errormsg=''
        state.result='User created successfully'
       
      },
      ERROR_USER:state=>{
        state.result=''
        state.errormsg='Fel to create the email is already registered try again'
        
      },
      CLEAR_VALUE:state=>{
        state.result=''
        state.errormsg=''
      },
      GET_TOKEN(state,data) {
        state.error=''
        state.token = data.token
        state.userId = data.userId 
        state.role = data.role
        state.status = 'Logout'
      },

      GET_ERROR(state) {
        state.error = 'Incorrect email or password'
      },

      DELETE_TOKEN(state) {
        state.token='' ,
        state.status='Login',
        state.role='user'
        localStorage.removeItem('data')
      },

      CHECK_USER:state=>{
        try{
         
          let data = JSON.parse(localStorage.getItem("data"))

          let token=data.token
          let id = data.userId
          if(token){
             state.token=token,
             state.userId=id
             state.role = data.role
             state.status='Logout'
         }
        else{
             state.token='',
             state.userId=''
             state.status='Login'
             state.role='user'
        }
        }
        catch{(err)=>console.log(err)}
      },
      UPDATED:(state,status)=>{
        if(status==200)
        state.changePassword='The password is changed successfully'
        else
        state.changePassword='Error to change the password'
      }
    },
    actions: {

    registerUser:async({dispatch,commit},user)=>{
      console.log(user.role)
      const payload = {
        email: user.email,
        password: user.password
      }
      try{
        const res =   await axios.post('/users/register',user)
        dispatch('login', payload)
        console.log(res)
        if(res.status==201){
           commit('RESULT_TRUE')
           
        }
        
      }
      catch{
        commit('ERROR_USER')
      }
      
    },


    clearValue:({commit})=>{
        commit('CLEAR_VALUE')
    },
     
    login({ commit },payload) {
           axios.post('/users/login', payload.user)
        .then(response => {
         
          localStorage.setItem("data", JSON.stringify(response.data))
          commit('GET_TOKEN',response.data)

          if(payload.route) {
            router.push(payload.route)
          } else {
            router.push('/')
          }

          // setTimeout(function(){ router.push('/') }, 2000);
         
        })
        .catch(()=> commit('GET_ERROR'))
      },


    logout({commit}){
       commit('DELETE_TOKEN')
    },

    checkUser({commit}){
      commit('CHECK_USER')
    },


    //Change Password

    updateUser({commit},updated){
      let newPassword=updated.newPassword
      console.log(newPassword)
      axios.put('/users/'+updated._id,{
         passwordHash:updated.newPassword
      }
      )
      .then(res=>{
        commit('UPDATED',res.status)
        console.log(res)
      })
    }

    }
   
  }