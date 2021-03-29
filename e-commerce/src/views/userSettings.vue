<template>


<div class="mt-5 text-center container">

  <p class="h1 mb-5">Set a new password</p>

  <form action="#!"  @submit.prevent="update">

    <div class="md-form md-outline">
      <input type="password" id="newPass" class="form-control" v-model="password">
      <label data-error="wrong" data-success="right" for="newPass">New password</label>
    </div>

    <div class="md-form md-outline">
      <input type="password" id="newPassConfirm" class="form-control"  v-model="confirmPassword">
      <label data-error="wrong" data-success="right" for="newPassConfirm">Confirm password</label>
    </div>

    <button type="submit" class="btn btn-primary mt-4">Change password</button>

  </form>
    <p class="text-primary mt-3 text-success" v-if="changePassword">{{changePassword}}</p>
    <p class="text-primary mt-3 text-danger" v-if="error">{{error}}</p>
  <div class="d-flex justify-content-between align-items-center mb-2">
   
    <u><router-link to='/login'>Back to Log In</router-link></u>

    <u><router-link to="/register">Register</router-link></u>

  </div>

</div>
  
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data(){
      return{
          password:'',
          confirmPassword:'',
          error:''
     }  
    },
    computed:{
        ...mapGetters(['userId','changePassword'])
    },
    methods:{
        ...mapActions(['updateUser']),
        update(){
          let updated={
             _id:this.userId,
            newPassword:this.password
         }  
         if(this.password===this.confirmPassword)
         this.updateUser(updated) 
         else
          this.error='Error tho change the password'
         this.password=''
         this.confirmPassword=''
        }
        


    }
  
}
</script>

<style>

</style>