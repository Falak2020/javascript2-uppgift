import axios from 'axios'

export default ({
    state: {
      token:'',
      
    },
    getters:{
      token: state => state.token
      
    },
    mutations: {
      GET_Token(state,token) {
        state.token = token
        console.log(token)
        }
    },
    actions: {
      login({ commit },payload) {
          console.log(payload.email)
          console.log(payload.password)
        axios.post('http://localhost:9999/api/users/login', {
           
              email:payload.email,
              password:payload.password
        })
        .then(response => {
          commit('GET_Token', response.data.token)
        })
        }
    }
   
  })