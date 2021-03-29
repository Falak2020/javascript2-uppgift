<template>
  <div>
     <form action="" @submit.prevent="update">
       <input type="text" v-model="password">
       <button type="submit"  class="btn btn-info">update</button>
   </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data(){
      return{
          password:''
     }  
    },
    computed:{
        ...mapGetters(['userId'])
    },
    methods:{
        ...mapActions(['updateUser']),
        update(){
          let updated={
             _id:this.userId,
            newPassword:this.password
         }  
         console.log(updated)
         this.updateUser(updated) 
        }
        


    }
  
}
</script>

<style>

</style>