<template>
  <div  class="container"> 
    <div class="border p-5 bg-white mt-5">
      <h5 class="mb-3">Welcome to our e-commerce website, please enter your user information</h5>
          <form class=" p-3"  @submit.prevent="loginUser" >
             
               <input type="email" placeholder="Enter your email" class="form-control border mb-4" v-model="email" />
               <input type="password"  class="form-control border" v-model="password" placeholder="Enter your password"/>
         
               <button  type="submit" class="btn btn-info form-control mt-5 text-white text-uppercase mb-3">Log in</button>    
               <div class="text-center mt-2">
                  <p>Not a member? <router-link to="/register">Register</router-link></p>
             </div>
         </form>
    </div>
   
    <small class="text-danger">{{error}}</small>  
  </div>
</template>
<script>
import { mapActions, mapGetters} from 'vuex'

export default {
  
    data(){
        return{
        
            email:'',
            password:''
        }    
    },
    methods:{
       ...mapActions(['login','getUserCart','clearValue']),
       loginUser(){
         let user={
           email: this.email,
           password: this.password,
         }
        let route = this.$route.query.redirect
        let payload = {
            user:user,
            route:route,
        }
        
        this.login(payload)
       
       },
       getCard(){
           if(this.token.length>0){
           let id=this.userId
           this.getUserCart(id)
        }
       }
    },
    computed:{
      ...mapGetters(['token','error','username','userId']),

    },
    destroyed(){
      this.getCard()
      this.clearValue()
    }
}
</script>

<style>

</style>