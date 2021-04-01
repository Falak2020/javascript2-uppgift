<template>
     <div class="card p-3">
           <div class=" row g-0 ">
              <div class="col-md-3">
                 <img :src="item.shop.image" alt="..." class="img-fluid"/>
              </div>
              <div class="col-md-9">
                 <div class="d-flex justify-content-between mt-3">
                     <h4  >{{item.shop.name}}</h4>
                     
                </div>
                 <div class="card-body">
                     <p class="card-title">{{item.shop.short}}</p>
                     <small><i class="fas fa-truck me-2"></i>Faster delivery</small>
                     
                 </div> 
                 <div class="text-end"> 
                         <label for="number"><strong> QTY = </strong></label>
                         <input type="number" class="p-1" id="number" @change="changeQTY"  v-model="qnt">
                    
                   </div>
              </div>
               
              <div  class="text-end mt-5 d-flex justify-content-between">
                 <strong>Quantity: {{item.quantity}}st </strong>
                 <strong>Price:{{item.quantity}}st X {{item.shop.price}} = {{item.quantity*item.shop.price}} kr</strong> 
                 <p class="text-danger pointer"  @click="Delete"><button class="border-0 bg-transparent text-danger"><i class="fas fa-trash me-2 " ></i></button>Delete order</p>
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
      qnt:this.item.quantity,
     }
 },
 computed:{
     ...mapGetters(['shoppings','userId','token'])
 },
 methods:{

  ...mapActions(['deleteOrder','postCart','deleteDB']),
     
 changeQTY(){

      this.item.quantity= parseInt(this.qnt)
      if(this.qnt<1)
       this.deleteOrder(this.item)
      if(this.userId.length>0){
           let payload={
              _id:this.userId,
               cart:this.shoppings,
               token:this.token
           }

           if(this.shoppings.length==0)
                this.deleteDB(payload)
           else
                this.postCart(payload) //send to DB
       }
   sessionStorage.setItem("shoppingcart", JSON.stringify(this.shoppings))
 },


 Delete(){
       this.deleteOrder(this.item)

       if(this.userId.length>0){
       let payload={
          _id:this.userId,
          cart:this.shoppings,
          token:this.token
       }
       if(this.shoppings.length==0)
          this.deleteDB(payload)  //Delete from db
       else
           this.postCart(payload)
   }
  }
 },
 
    
 
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
.pointer{
   cursor: pointer;
}
</style>