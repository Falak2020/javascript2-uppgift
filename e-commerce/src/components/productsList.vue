<template>

    <router-link  :to="{ path: '/details/'+product._id}" class="card">
    
        <img :src="product.image" class="card-img-top" alt="..." style="height:300px"/>
         <div class="card-body">
                <h5 class="card-title">{{product.name}}</h5>
                <p class="card-text">
                  {{product.short}}
                </p>
         </div>
    
    </router-link>

  <!-- <div >
      
</div> -->
 
  <!-- <div >
      <router-link  :to="{ path: '/details/'+product._id}">
         
            <div class="card">
              <img :src="product.image" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">{{product.name}}</h5>
                <p class="card-text">
                  {{product.short}}
                </p>
              </div>
            </div>
        
      </router-link>
  </div> -->
</template>
<script>
export default {
  props:['product']
}
</script>

<style>
  .card-bg{
   background-color: #9adbf7;
   cursor: pointer; 
 }
</style>