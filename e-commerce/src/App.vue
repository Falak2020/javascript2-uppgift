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

export default {
   components:{
     Appheader
   }
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
