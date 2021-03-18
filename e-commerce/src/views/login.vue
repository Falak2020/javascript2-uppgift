<template>
  <div class="container">
    <div v-if="!token">
      <h5 class="my-5">Welcome to our e-commerce website, please enter your user information</h5>
      

          <h3 class="text-color">Log in</h3>
          <form class=" p-3 border bg-white "  @submit.prevent="loginUser" >
            <input type="text"  v-model="email" class="mt-3 form-control" placeholder="Enter your email">
            <input type="password"  v-model="password" class="mt-3 form-control" placeholder="Enter your password">
            <button  type="submit" class="btn btn-info form-control mt-5 text-white text-uppercase mb-3">Log in</button>    
         </form>
         <div class="mt-5 text-center">
          New user: <router-link to='/login/register'>register</router-link>
        </div>
    </div>
     <div v-else class="text-success text-center mt-5"><h2>The authenticatin is successful</h2></div>
        
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
       ...mapActions(['login']),
       loginUser(){
        let payload = {
            email: this.email,
            password: this.password,
        }
        this.login(payload)
       }
    },
    computed:{
      ...mapGetters(['token','error'])
    }

}
</script>

<style>

</style>