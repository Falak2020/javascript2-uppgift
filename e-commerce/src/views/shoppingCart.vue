<template>
<div class="container">
   <div v-if="shoppings.length>0">
      <div v-for="shop in shoppings" :key="shop._id">
          <cart-detail :shop="shop"/>
      </div>
   </div>
   <div v-else class="card mt-5 p-4 text-center"> 
      <div class="card-header text-info"><i class="fas fa-shopping-bag"></i></div>
      <div class="card-body">
        <p class="card-text">
          Your Shopping Cart is empty - but it does not have to be
       </p>
    <router-link to='/' class="btn btn-primary">Continue Shopping</router-link>
     </div>       
   </div>
    
</div>
 
  
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import cartDetail from '../components/cartDetail.vue'
export default {
  components: { cartDetail },

 computed:{
     ...mapGetters(['shoppings','res','token','userId'])
 },
 methods:{
     ...mapActions(['postCart','updateCart']),
    
         
       
    },
    
    
   //  addCart(){
   //     let payload={
   //      _id:this.userId,
   //      cart:this.shoppings
   //     }
   //     this.postCart(payload)
   //  },
   //  update(){
   //    let payload={
   //      _id:this.userId,
   //      cart:this.shoppings
   //     } 
   //     this.updateCart(payload)
   //  }


}
</script>

<style scoped>
  i{
     font-size: 3rem;
  }
</style>