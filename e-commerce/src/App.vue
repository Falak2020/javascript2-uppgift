<template>
  <div class="bg-light">
    <Appheader /> 
  
    <router-view/>
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
     background-color: #1976D2; }
</style>
