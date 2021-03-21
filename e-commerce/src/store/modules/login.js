import axios from 'axios'

export default ({
    state: {
      token:'',
      error:'',
      status:'login',
      username:'',
      userId:''
    },
    getters:{
      token: state => state.token,
      error: state => state.error,
      status:state=> state.status,
      username:state=>state.username,
      userId:state=>state.userId,

    },
    mutations: {
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
      login({ commit },payload) {
           axios.post('http://localhost:9999/api/users/login', {
              email:payload.email,
              password:payload.password
        })
        .then(response => {
          commit('GET_TOKEN', response.data)
        })
        .catch(()=> commit('GET_ERROR'))
        },
      logout({commit}){
       commit('DELETE_TOKEN')
      },
      
    }
   
  })