<template>
  <div class="mb-5" >
    <Appheader/> 
    <div class="container mt-3">
       <router-view/>
    </div> 
  </div>
</template>
<script>
import Appheader from'./components/navbar/header'
import {mapActions, mapGetters} from 'vuex'
export default {
   components:{
     Appheader
   },
   computed:{
     ...mapGetters(['userId','token'])
   },
   methods:{
     ...mapActions(['checkUser','getUserCart']),
   },

   created(){
     this.checkUser()
     if(this.token)
     this.getUserCart(this.userId)
   },
   
 }
</script>

<style>
     *{
     box-sizing: border-box;
     margin:0;
     padding:0;
    }
   .bg{
     background-color: #1976D2;
    }
    html,body{
      background-color: rgb(247, 243, 238);
    }
    .text-color{
      color: #0D47A1;
    }
</style>
