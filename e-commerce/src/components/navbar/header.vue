<template>
  <!-- <nav class="navbar navbar-expand-lg navbar-dark bg" >
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
            <router-link class="pos-r nav-link me-5 " aria-current="page" to='/shoppingCart'> 
               <i class=" fas fa-shopping-cart"></i>
               <span class="text-danger pos-a d-flex align-items-center justify-content-center"> {{shoppings.length}} </span>
            </router-link> -->
            <!-- <router-link   class="nav-link" aria-current="page" to='/login'> 
               <i :class="loginClasses"  @mouseenter="toggle" @click="logout"></i> 
            </router-link> -->
           <!-- <div class="dropdown nav-link" >
            <i :class="loginClasses"  @mouseenter="toggle" 
            id="dropdownMenu2" data-mdb-toggle="dropdown" aria-expanded="false">
            </i>
            
             <ul class="dropdown-menu " aria-labelledby="dropdownMenu2">
                <li class="dropdown-item" @click="logout()" ><router-link to='/userLogin' >{{status}}</router-link></li>
            </ul>
          </div>  -->
        <!-- <router-link class="nav-link" :to="'/new/'+token "> new product</router-link>
        <router-link class="nav-link" aria-current="page" :to="{name:status}" >{{status}}</router-link> -->
          <!-- </div>
      </div>
   </div>
  </nav> 
   -->
<div>
 <nav class="navbar navbar-expand-lg navbar-dark bg">
  <div class="container-fluid">
    <a class="navbar-brand logo" href="#"><img src="../../assets/picatshu1.png" alt=""> Pokemon.se</a>
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link me-5 " aria-current="page" to='/'>  <i class="fas fa-home"></i><span class="ms-1">Home</span></router-link>
        </li>
        <li class="nav-item">
          <router-link class=" nav-link me-5 " aria-current="page" to='/shoppingCart'> 
               <i class=" fas fa-shopping-cart"> </i><span class="ms-1 pos-r"> Shopping Cart<span v-if="cartNumber" class="pos-a pt-1">{{cartNumber}} </span></span>
          </router-link>
        </li>
        <li class="nav-item dropdown nav-link" >
          <a 
            class="nav-link dropdown-toggle d-inline"
            id="navbarDropdown"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false">
           <i :class="loginClasses"  @mouseenter="toggle"></i>
              <span class="ms-1">User Acount</span> 
           </a>
          <!-- Dropdown menu -->
          <ul  class="dropdown-menu p-3 " aria-labelledby="navbarDropdown">
            <li  @click="logoutUser" class="text-center mb-2" ><router-link to='/userLogin' class="text-dark " >{{status}}</router-link></li>
            <li  class="text-center"><router-link to='/signup' class="text-dark " >Sign up</router-link></li>
          </ul>   
        </li>
        <li>
           <router-link class="nav-link me-5 " aria-current="page" to='/contact-us'><i class="far fa-address-book"></i><span class="ms-1">Contact Us</span></router-link>
        </li>
       </ul>
       
    </div>
    
  </div>
</nav>
   
</div>
</template>

<script>
import{mapActions, mapGetters} from'vuex'
export default {
  data(){
    return{
    }
  },
  computed:{
    ...mapGetters(['token','status','shoppings','res','userId','cartNumber']),
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
       ...mapActions(['logout','postCart','updateCart','clearUserCart']),
       logoutUser(){  
         this.logout() 
         this.clearUserCart()
      }
      
    }
    
}
</script>

<style scoped>

 li{
   font-size: 1rem;
 }
 .pos-r{
   position: relative;
 }
 .pos-a{
   position: absolute;
   top:-15px;
 }
.logo{
  font-family:serif;
  color: yellow;
  font-size: 1.5rem;
  

}
span span {
    background-color: rgb(233, 13, 13);
    width:30px;
    height: 30px;
    border-radius: 50%;
    text-align: center;
    color: #ffffff;
  }
 img{
   width:50px;  
 }


</style>