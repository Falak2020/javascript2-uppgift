<template>
  <div class="container border bg-light mt-5" >
      <div  ref="form" class="text-center p-5 " >
            <form class="container mt-3 "  @submit.prevent="newUser" >
              <p class="h2">Are you a new customer?</p>
              <p class="h4 mb-4">Register you now </p>
              <input type="text" id="firstname" class="form-control mb-3 border" v-model="user.firstName" placeholder="First Name" />
              <input type="text" id="lastname" class="form-control border mb-3" v-model="user.lastName" placeholder="Last Name"/>
              <input type="email" id="email" class="form-control border mb-3" v-model="user.email" placeholder="Email" />
              <input type="password" id="password" class="form-control border" v-model="user.password" placeholder="Password"/>    
              <div class="mt-3">
                <select class="form-control" v-model="user.role"> 
                  <option value="role">Select Role</option>
                  <option value="user">user</option>
                  <option value="admin">admin</option>
                </select>
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
        password:'',
        role:'role'
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