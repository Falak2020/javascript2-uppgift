<template>
  <div class="page-container" >
    <Appheader/> 
    <div class="container mt-3 h-100">
       <router-view/>
     </div> 
     <div class="footer">
       <appfooter />
     </div>
    
  </div>
</template>
<script>
import Appheader from'./components/navbar/header'
import appfooter from './components/navbar/footer'
import {mapActions, mapGetters} from 'vuex'
export default {
   components:{
     Appheader,
     appfooter
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
    .page-container {
      position: relative;
      min-height: 100vh;
}
    .footer{
       
           position: absolute;
            bottom: 0;
            width: 100%;
          
    }
</style>
