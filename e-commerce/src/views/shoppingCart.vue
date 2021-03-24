<template>
<div class="container mt-3"  >
   <div v-if="shoppings.length>0">
      <div v-for="item in shoppings" :key="item.shop._id">
          <cart-detail :item="item" />
      </div>
      <div class="bg-white p-5 d-flex justify-content-around">Total:{{totalPrice}} <button class="btn bg text-white">Pay Now</button></div>
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
     ...mapGetters(['shoppings','res','token','userId','totalPrice'])
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