<template>
     <div class="card p-3">
           <div class=" row g-0 ">
              <div class="col-md-3">
                 <img :src="item.shop.image" alt="..." class="img-fluid"/>
              </div>
              <div class="col-md-9">
                 <div class="d-flex justify-content-between mt-3">
                     <h2  >{{item.shop.name}}</h2>
                     <div class="text-end"> 
                   <!-- <button class="btn btn-bg text-white" @click="add" >+</button> -->
                         <label for="number"> QTY = </label>
                         <input type="number" id="number" @click="changeQTY"  v-model="qnt">
                    <!-- <button class="btn btn-bg ms-2 text-white" @click="remove">-</button>  -->
                   </div>
                </div>
                 
                 
                 <div class="card-body">
                     <p class="card-title">{{item.shop.short}}</p>
                     <small><i class="fas fa-truck me-2"></i>Faster delivery</small>
                     
                 </div> 
              </div>
               
              <div  class="text-end mt-5 d-flex justify-content-between">
                 <strong>Quantity: {{item.quantity}}st </strong>
                 <strong>Price: {{item.quantity*item.shop.price}} kr</strong> 
                 <p class="text-danger"><button class="border-0 bg-transparent text-danger" @click="Delete"><i class="fas fa-trash me-2 " ></i></button>Delete order</p>
                 
              </div> 

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

      qnt:this.item.quantity

     }
 },
 computed:{
     ...mapGetters(['shoppings','userId','token'])
 },
 methods:{
//   add(){ 
//      this.item.quantity+=1 
  
//      this.myPrice=this.item.quantity*this.item.shop.price
//     if(this.userId.length>0){
//        let payload={
//           _id:this.userId,
//           cart:this.shoppings
//        }
//       this.postCart(payload)
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
   //  }

//   },
//   remove(){
//      this.item.quantity-=1 
//      if(this.item.quantity==0){
//         this.deleteOrder(this.item)
//      }
//      this.myPrice=this.item.quantity*this.item.shop.price
//   },
  ...mapActions(['deleteOrder','postCart']),
 changeQTY(){
    if(this.qnt>this.item.quantity){
       this.item.quantity+=1 
    }
    else{
      this.item.quantity-=1 
      if(this.item.quantity==0){  //delete item when quantity is 0
        this.deleteOrder(this.item)
       }
    }

   if(this.userId.length>0){
       let payload={
          _id:this.userId,
          cart:this.shoppings,
          token:this.token
       }
      this.postCart(payload)
   }
 },
 Delete(){
       this.deleteOrder(this.item)
  }
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
img{
   max-height: 200px;
}
</style>