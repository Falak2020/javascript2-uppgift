<template>
 
     
  <div>
      <div  class="mt-5 container">
       <!-- <button class="btn me-1" :class="loginClasses" @click="change('LogIn')">Login</button>
       <button class="btn " :class="registerClasses" @click="change('register')">Register</button>  -->
   </div>
  <component class="container " :is="comp" />
 </div>
</template>

<script>
import LogIn from '../components/login'
import register from '../components/register'

export default {
 components: {
    LogIn,
    register 
 },
 data(){
    return{
       comp:'register',
       log: false,
       register: true,
      
    }  
 },
 methods:{
   change(val){
     this.comp=val
     switch(val){
       case 'LogIn':
         this.log=true
         this.register=false
         break
        case 'register':
          this.log=false
          this.register=true
     }
   }
 },
 computed: {
    loginClasses() {
      return {
        'btn-primary': this.log,
        'btn-outline-primary': !this.log
      }
    },
    registerClasses() {
      return {
        'btn-primary': this.register,
        'btn-outline-primary': !this.register
      }
    }
  }
}
</script>

<style>

</style>

