<template>
  <div class="container" >
      <div  ref="form" class="text-center text-success border bg-light mt-5" >
            <form class="container mt-3  p-3"  @submit.prevent="newUser" >
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
     this.registerUser(this.user)
     this.user=''
   }
  },
  destroyed(){
    this.clearValue()
  }

}
</script>

<style>

</style>