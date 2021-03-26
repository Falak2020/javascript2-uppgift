<template>

   <div  class="card hover-shadow h-100  p-3">
        <img :src="product.image" class="card-img-top img-fluid "/>
      <div class="card-body ">
           <h5 class="card-title text-decoration-underline text-color">{{product.name}}</h5>
           <p class="card-text">
               {{product.price}} kr
           </p>
            <p class="card-text">
               {{product.short}}
            </p>     
      </div>
       <div class="text-end  d-flex justify-content-between">
                <router-link type='btn' class="btn btn-info" :to="{ path: '/productDetails/'+product._id}">More Details</router-link>
                <button   @click="addToCart"><i class="fas fa-shopping-bag"></i></button>    
      </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props:['product'],
  data(){
    return{
      quantity:1
    }
  },
  computed:{
    ...mapGetters(['shoppings','userId','res','shoppings','token'])
  },
  methods:{
    ...mapActions(['addTo','postCart','updateCart']),
     addToCart(){
       let cart={
         shop:this.product,
         quantity:this.quantity
       }
      this.addTo(cart)
      //Now add to database 
      if(this.userId.length>0){
       let payload={
          _id:this.userId,
          cart:this.shoppings,
          token:this.token
       }
      this.postCart(payload)
      //      if(this.res){
      //        console.log('Cart is add successfully')
      //      }
      //      else{
      //        let payload={
      //         _id:this.userId,
      //         cart:this.shoppings 
      //     } 
      //   this.updateCart(payload)
      // }
       
      
      }
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
 img{
   height: 350px;
 }
 
</style>