<template>
   <div class="card p-3">
           <div class=" row g-0 ">
              <div class="col-md-4">
                 <img :src="item.shop.image" alt="..." class="img-fluid"/>
              </div>
              <div class="col-md-8">
                 <h2 class="mt-5" >{{item.shop.name}}</h2>
                 <div class="text-end">
                 </div> 
                 
                 <div class="card-body">
                     <p class="card-title">{{item.shop.short}}</p>
                 </div> 
              </div>
               <div class="text-end">
                   <button class="btn btn-bg text-white" @click="add" >+</button>
                    <button class="btn btn-bg ms-2 text-white" @click="remove">-</button> 
               </div>
              <div  class="text-end mt-5 d-flex justify-content-between"><strong>Quantity: {{item.quantity}}st </strong><strong>Price: {{item.quantity*item.shop.price}} kr</strong> </div> 
           </div> 
          <hr class="solid">
        </div>
       


</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
 props:['item'],
 data(){
     return{
      myPrice:this.item.shop.price,
      i:1,
      newPrice:0,
     }
 },
 computed:{
     ...mapGetters(['shoppings','userId'])
 },
 methods:{
  add(){ 
     this.item.quantity+=1 
     this.myPrice=this.item.quantity*this.item.shop.price
    if(this.userId.length>0){
       let payload={
          _id:this.userId,
          cart:this.shoppings
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

  },
  remove(){
     this.item.quantity-=1 
     if(this.item.quantity==0){
        this.deleteOrder(this.item)
     }
     this.myPrice=this.item.quantity*this.item.shop.price
  },
  ...mapActions(['deleteOrder','postCart','updateCart']),

 }
}
</script>

<style scoped>
 .btn-bg{
    background-color: gray;
 }
 hr.solid {
  border-top: 3px solid #bbb;
}
</style>