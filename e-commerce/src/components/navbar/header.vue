<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg" >
    <div class="container-fluid">
       <a class="navbar-brand" href="#"></a>
       <button class="navbar-toggler" type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
       </button>
       <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div class="navbar-nav ms-auto" >
            <router-link class="nav-link me-5 " aria-current="page" to='/'>  <i class="fas fa-home"></i></router-link> 
            <router-link   class="nav-link" aria-current="page" to='/login'>
               <i :class="loginClasses"  @mouseenter="toggle" @click="logout"></i> 
            </router-link> 
        <!-- <router-link class="nav-link" :to="'/new/'+token "> new product</router-link>
        <router-link class="nav-link" aria-current="page" :to="{name:status}" >{{status}}</router-link> -->
          </div>
      </div>
   </div>
  </nav> 
  
</template>

<script>
import{mapActions, mapGetters} from'vuex'
export default {
  data(){
    return{
      status:'login'
    }
  },
  computed:{
    ...mapGetters(['token']),
    loginClasses(){
       if(this.token){
         return {
           'fas fa-user-check':true    
       }
       }
       else{
        
         return{
           'fas fa-user-times': true,
         }
      }
    },
    
    },
    methods:{
        toggle(){
          if((this.status=='login')&&(this.token))
           this.status='logout'
        },
       ...mapActions(['logout'])
    }
    
    
     

}
</script>

<style scoped>
 i{
   font-size: 2rem;
 }
 li{
   font-size: 1rem;
 }
</style>