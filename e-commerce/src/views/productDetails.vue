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
 data(){
   return{
     quantity:1
   }
 },
methods:{
  ...mapActions(['getProduct','addTo','updateOrder','postCart']),
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
     
      // if(this.statusCode==500)
      // {
      //     this.updateOrder(payload)
      // }
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
},
computed:{
  ...mapGetters(['product','userId','shoppings','token','statusCode'])
},
created(){
  this.getProduct(this.id)
  
}
}
</script>
 
<style>

</style>