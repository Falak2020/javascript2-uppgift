import axios from 'axios'

export default ({
    state: {
      token:'',
      error:''
    },
    getters:{
      token: state => state.token,
      error: state => state.error
      
    },
    mutations: {
      GET_TOKEN(state,token) {
        state.token = token
        },
      GET_ERROR(state) {
        state.error = 'Incorrect email or password'
        },
      DELETE_TOKEN(state) {
        state.token='' 
      }
    },
    actions: {
      login({ commit },payload) {
           axios.post('http://localhost:9999/api/users/login', {
              email:payload.email,
              password:payload.password
        })
        .then(response => {
          commit('GET_TOKEN', response.data.token)
        })
        .catch(()=> commit('GET_ERROR'))
        },
      logout({commit}){
       commit('DELETE_TOKEN')
      }
    }
   
  })