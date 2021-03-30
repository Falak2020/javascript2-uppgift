<template>
<div class="container mt-3"  >
   <div v-if="shoppings.length>0" class="row" >
      <div class="col col-md-8">
         <div v-for="item in shoppings" :key="item.shop._id">
            <cart-detail :item="item" />
         </div>
      </div>
      
      <div class="col col-md-4 mt-5 ">
         <div class="bg-white p-3 text-center">
            <div class="mb-3">
               <h3 >Total amount</h3>
                <div class="d-flex justify-content-around mt-2"><div> Total:</div><div> {{totalPrice}} kr</div> </div>
                <div class="d-flex justify-content-around mt-2"><div> Frakt:</div><div> Free</div> </div>
                <hr>
                <div class="d-flex justify-content-around mt-2"><strong>Total amount (incl. moms)</strong><div> {{totalPrice}} kr</div> </div>
            </div> 
            <button class="btn btn-orange text-white mt-3 form-control">go to checkout</button>
          </div>
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
     ...mapGetters(['shoppings','res','token','userId','totalPrice'])
 },
 methods:{
     ...mapActions(['postCart','updateCart']),
        
    },
    
}
</script>

<style scoped>
  i{
     font-size: 3rem;
  }
  .btn-orange{
     background-color: #FF6F00;
     font-size: 1rem;
     font-weight: bold;
  }
  .btn-orange:hover{
     background-color: #E65100;
  }
</style>