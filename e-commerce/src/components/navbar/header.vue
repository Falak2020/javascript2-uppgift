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
            <router-link class="nav-link " aria-current="page" to='/' >Home</router-link> 
            <router-link class="nav-link" aria-current="page" to='/login' >Login</router-link> 

        <!-- <router-link class="nav-link" :to="'/new/'+token "> new product</router-link>
        <router-link class="nav-link" aria-current="page" :to="{name:status}" >{{status}}</router-link> -->
          </div>
      </div>
   </div>
  </nav> 
  
</template>

<script>
export default {

}
</script>

<style>

</style>