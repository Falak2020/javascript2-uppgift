<template>
  <div>
    
    <div class="form container mt-5 text-center text-success position-r mt-5" ref="form">
       <div class="i-bg position-a text-center">
       </div>
      
       <form class=" p-3 border "  @submit.prevent="loginUser" >
            <input type="text"  v-model="email" class="mt-3 form-control" placeholder="Enter your email">
            <input type="password"  v-model="password" class="mt-3 form-control" placeholder="Enter your password">
            <button  type="submit" class="btn btn-info form-control mt-5 text-white text-uppercase mb-3">Log in</button>    
            <!-- <small class="text-danger">{{error}}</small> -->
       </form>
       
    </div> 
   
</div>
</template>

<script>
import { mapActions} from 'vuex'
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
 }

}
</script>

<style>

</style>