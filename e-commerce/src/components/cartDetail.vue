<template>
<div>
   <div class="card p-5 mb-3">
           <div class=" row g-0">
              <div class="col-md-4">
                 <img :src="shop.image" alt="..." class="img-fluid"/>
              </div>
              <div class="col-md-8">
                 <h5 class="card-header">{{shop.name}}</h5>
                 <div class="text-end">

                   
                     <!-- <select class="p-2" @change="calPrice(shop)" v-model="select">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                     </select> -->
                 </div> 
                 
                 <div class="card-body">
                     <h5 class="card-title">{{shop.short}}</h5>
                 </div> 
                 <!-- <div v-if="!select"  class="text-end">{{shop.price}} kr</div>
                 <div v-else class="text-end">{{newPrice}} kr</div> -->
              </div>
              <!-- <div class="text-end">
                  <select class="p-2" @change="calPrice(shop)" v-model="select">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                  </select>
               </div> -->
               <div class="text-end">
                   <button class="btn btn-info" @click="add" >add</button>
                    <button class="btn btn-danger ms-2" @click="remove">remove</button> 
               </div>
             <!-- <div v-if="newPrice>0" class="text-end mt-5">{{newPrice}} kr</div>
             <div v-else class="text-end mt-5">{{shop.price}} kr</div> -->

             
              <div class="text-end mt-5">{{myPrice}} kr</div>
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
      i:1
     }
 },
 computed:{
     ...mapGetters(['newPrice','shoppings','newPrice'])
 },
 methods:{
  add(){  
     this.i += 1
     
      this.myPrice=this.shop.price*this.i 
      console.log(this.i)
      console.log(this.myPrice)
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
        
    //   this.myPrice-=this.shop.price
    //    this.shop.price=this.myPrice

  },
  ...mapActions(['change','deleteOrder']),
   takePrice(){
       this.change(this.shop.prce)
   }
 }
}
</script>

<style>

</style>