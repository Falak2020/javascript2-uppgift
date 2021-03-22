<template>

   <div  class="card hover-shadow text-color">
      <router-link  :to="{ path: '/details/'+product._id}">
        <img :src="product.image" class="card-img-top" alt="..." style="height:350px"/>
      </router-link>
      <div class="card-body ">
           <h5 class="card-title text-decoration-underline">{{product.name}}</h5>
           <p class="card-text">
               {{product.price}} kr
           </p>
            <p class="card-text">
               {{product.short}}
            </p>
            <div class="text-end ">
                <button   @click="addToCart"><i class="fas fa-shopping-bag"></i></button>
            </div>
           
      </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props:['product'],
  computed:{
    ...mapGetters(['shoppings'])
  },
  methods:{
    ...mapActions(['addTo']),
     addToCart(){
      this.addTo(this.product)
    }
  }
}
</script>

<style scoped>
  .card-bg{
   background-color: #9adbf7;
   cursor: pointer; 
 }
 i{
   font-size: 2rem;
 }
 button{
   background: transparent;
   border: none;
 }
 
</style>