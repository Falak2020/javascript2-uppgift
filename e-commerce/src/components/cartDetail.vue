<template>
<div class="mt-5">
   <div class="card p-5 mb-3">
           <div class=" row g-0">
              <div class="col-md-4">
                 <img :src="shop.image" alt="..." class="img-fluid"/>
              </div>
              <div class="col-md-8">
                 <h5 class="card-header">{{shop.name}}</h5>
                 <div class="text-end">
                 </div> 
                 
                 <div class="card-body">
                     <h5 class="card-title">{{shop.short}}</h5>
                 </div> 
              </div>
               <div class="text-end">
                   <button class="btn btn-info" @click="add" >add</button>
                    <button class="btn btn-danger ms-2" @click="remove">remove</button> 
               </div>
              <div v-if="newPrice==0" class="text-end mt-5">{{shop.price}} kr</div>

              <div  v-else class="text-end mt-5">{{newPrice}} kr</div>
           </div> 
        </div>
        
</div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
 props:['shop'],
 data(){
     return{
      myPrice:this.shop.price,
      i:1,
      newPrice:0
     }
 },
 computed:{
     ...mapGetters(['newShoppings','shoppings'])
 },
 methods:{
  add(){  
     this.i += 1
      this.myPrice=this.shop.price*this.i 
      console.log(this.i)
      console.log(this.myPrice)
       let order={
          _id:this.shop._id,
          name:this.shop.name,
          short:this.shop.short,
          desc:this.shop.desc,
          price:this.myPrice,
          image:this.shop.image
       }
        this.change(order)
        this.takePrice()
  },
  remove(){
       this.i -= 1
       if(this.i==0){
          this.deleteOrder(this.shop)
       }
       else{
           this.myPrice=this.shop.price*this.i
           console.log(this.i)
           console.log(this.myPrice)

       }
  },
  ...mapActions(['change','deleteOrder']),
   takePrice(){
      this.newShoppings.forEach(element => {
         if(element._id==this.shop._id){
            this.newPrice=element.price
       }
         
      });
   },

 }
}
</script>

<style>

</style>