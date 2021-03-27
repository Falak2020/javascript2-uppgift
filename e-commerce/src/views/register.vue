<template>
  <div class="container border bg-light mt-5" >
      <div  ref="form" class="text-center p-5 " >
            <form class="container mt-3 "  @submit.prevent="newUser" >
              <p class="h2">Are you a new customer?</p>
              <p class="h4 mb-4">Register you now </p>
              <div class="form-outline">
                  <input type="text" id="firstname" class="form-control mb-3 border" v-model="user.firstName" />
                  <label class="form-label" for="firstname">First name</label>
              </div>
              <div class="form-outline">
                   <input type="text" id="lastname" class="form-control border mb-3" v-model="user.lastName"/>
                   <label class="form-label" for="lastname">Last name</label>
              </div>
              <div class="form-outline mb-4">
                  <input type="email" id="email" class="form-control border mb-3" v-model="user.email" />
                  <label class="form-label" for="email">Email address</label>
              </div>
              <div class="form-outline mb-4">
                  <input type="password" id="password" class="form-control border" v-model="user.password" />
                  <label class="form-label" for="password">Password</label>
              </div>
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