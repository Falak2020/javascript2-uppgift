<template>
  <div v-if="product!=null" class="container" >
    <div class="card mt-5" >
      <div class="row g-0">
         <div class="col-md-4">
           <img :src="product.image" alt="..." class="img-fluid"/>
         </div>
         <div class="col-md-8">
           <div class="card-body">
             <h5 class="card-title">{{product.name}}</h5>
             <p class="card-text">
               price: {{product.price}} kr
             </p>
             <p class="card-text">
               {{product.short}}
             </p>
             <p class="card-text">
               {{product.desc}}
             </p>
             <p class="card-text">
              <small class="text-muted">{{product.modified}}</small>
            </p>
            <button class="btn btn-primary" @click="addToCart"><i class="fas fa-shopping-cart me-1"></i>add to cart</button>
           </div>
          </div>
       </div>
    </div>
  </div>
</template>

<script>
import{mapGetters, mapActions} from 'vuex'
export default {
 props:['id'],

methods:{
  ...mapActions(['getProduct','addTo']),
    addToCart(){
      this.addTo(this.product)
    }
},
computed:{
  ...mapGetters(['product'])
},
created(){
  this.getProduct(this.id)
  
}
}
</script>
 
<style>

</style>