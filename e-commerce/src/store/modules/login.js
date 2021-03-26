import axios from '@/axios'

export default {
    state: {
      token:'',
      error:'',
      status:'login',
      username:'',
      userId:'',
      result:'',
      errormsg:''
    },
    getters:{
      token: state => state.token,
      error: state => state.error,
      status:state=> state.status,
      username:state=>state.username,
      userId:state=>state.userId,
      result:state=>state.result,
      errormsg:state=>state.errormsg

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
        state.token = data.token,
        state.username = data.username
        state.userId = data.userId 
        state.status = 'logout'
      },
      GET_ERROR(state) {
        state.error = 'Incorrect email or password'
      },
      DELETE_TOKEN(state) {
        state.token='' ,
        state.status='login'
      }
    },
    actions: {

    registerUser:async({dispatch,commit},user)=>{
      const payload = {
        email: user.email,
        password: user.password
      }
      try{
        const res =   await axios.post('/users/register',user)
        dispatch('login', payload)
        console.log(res)
        if(res.status==201)
         commit('RESULT_TRUE')
      }
      catch{
        commit('ERROR_USER')
      }
      
    },


    clearValue:({commit})=>{
        commit('CLEAR_VALUE')
    },
     
    login({ commit },payload) {
           axios.post('/users/login', payload)
        .then(response => {
          commit('GET_TOKEN', response.data)
          
        })
        .catch(()=> commit('GET_ERROR'))
      },


    logout({commit}){
       commit('DELETE_TOKEN')
    },

    }
   
  }