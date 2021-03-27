<template>
  <div class="container">
    
    <div v-if="!token" class="border p-5 bg-white mt-5">
      <h5 class="mb-3">Welcome to our e-commerce website, please enter your user information</h5>
          <form class=" p-3"  @submit.prevent="loginUser" >
             <div class="form-outline mb-4">
               <input type="email" id="email" class="form-control border-bottom mb-3" v-model="email" />
               <label class="form-label" for="email">Email Address</label>
              </div>
            <div class="form-outline mb-4">
               <input type="password" id="password" class="form-control border-bottom" v-model="password" />
               <label class="form-label" for="password">Password</label>
            </div>
            <button  type="submit" class="btn btn-info form-control mt-5 text-white text-uppercase mb-3">Log in</button>    
            <div class="text-center mt-2">
               <p>Not a member? <router-link to="/register">Register</router-link></p>
            </div>
         </form>
    </div>
    <div v-else class="text-success text-center mt-5">
       <h3>Welcome {{username}}, have a nice time in our site</h3>
       <home/>
    </div>
    <small class="text-danger">{{error}}</small>  
  </div> 
</template>
<script>
import { mapActions, mapGetters} from 'vuex'
import Home from './Home.vue'
export default {
  components: { Home },
    data(){
        return{
        
            email:'',
            password:''
        }    
    },
    methods:{
       ...mapActions(['login','getUserCart']),
       loginUser(){
        let payload = {
            email: this.email,
            password: this.password,
        }
        this.login(payload)
        
       },
       getCard(){
         console.log(this.token)
           if(this.token.length>0){
           let id=this.userId
           this.getUserCart(id)
        }
       }
    },
    computed:{
      ...mapGetters(['token','error','username','userId']),

    },
    updated(){
      this.getCard()
    }
}
</script>

<style>

</style>