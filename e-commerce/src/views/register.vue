<template>
  <div class="container border bg-light" >
      <div  ref="form" class="text-center  mt-5" >
            <form class="container mt-3  p-3"  @submit.prevent="newUser" >
              <p class="h2">Are you a new customer?</p>
              <p class="h4 mb-4">Register you now </p>
               <input type="text" v-model="user.firstName" class="mt-3 form-control" placeholder="Enter your firstname">
               <input type="text" v-model="user.lastName" class="mt-3 form-control" placeholder="Enter your lastname">
               <input type="text" v-model="user.email" class="mt-3 form-control" placeholder="Enter your email">
               <input type="password" v-model="user.password" class="mt-3 form-control" placeholder="Enter your password">
               <button  type="submit" class="btn btn-info form-control mt-5 text-white text-uppercase">register</button>
           </form>
       </div>
       <small class="text-danger" v-if="errormsg">{{errormsg}}</small>
       <h5 class="text-success" v-else>{{result}}</h5>
  </div>
</template>

<script>
import{mapActions,mapGetters} from'vuex'
export default {
  data(){
    return{
      user:{
        firstName:'',
        lastName:'',
        email:'',
        password:''
      }
    }
  },
  computed:{
    ...mapGetters(['result','errormsg'])
  },
  methods:{

...mapActions(['registerUser','clearValue']),
   newUser(){
     if(this.user.firstName!=''&&this.user.lastName!=''&&this.user.email!=''&&this.user.password!='')
     this.registerUser(this.user)
     this.user.firstName='',
     this.user.lastName='',
     this.user.email='',
     this.user.password=''
   }
  },
  destroyed(){
    this.clearValue()
  }

}
</script>

<style>

</style>