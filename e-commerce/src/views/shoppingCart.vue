<template>
 <div class="container mt-5">
    <button @click="addCart">add</button>
    <div v-for="shop in shoppings" :key="shop._id">
        <div class="card p-5 mb-3">
           <div class=" row g-0">
              <div class="col-md-4">
                 <img :src="shop.image" alt="..." class="img-fluid"/>
              </div>
              <div class="col-md-8">
                 <h5 class="card-header">{{shop.name}}</h5>
                 <div class="text-end">
                     <select class="p-2" v-model="select" @change="calPrice(shop.price)">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                     </select>
                 </div>
                 
                 <div class="card-body">
                     <h5 class="card-title">{{shop.short}}</h5>
                 </div> 
                 <div v-if="!select"  class="text-end">{{shop.price}} kr</div>
                 <div v-else class="text-end">{{newPrice}} kr</div>
              </div>
           </div> 
        </div>
    </div>
 </div>
  
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
 data(){
     return{
        select:'',
     }
 },
 computed:{
     ...mapGetters(['shoppings','newPrice','res','token'])
 },
 methods:{
     ...mapActions(['calculate','postCard']),
     calPrice(price){
        let params={
            select:parseInt(this.select),
            price
        }
        this.calculate(params)
    },
    addCart(){
      //  let payload={
      //   _id:this.token,
      //   cart:this.shoppings
      //  }
      console.log(this.shoppings)
       this.postCard(this.shoppings)
    }

 }
}
</script>

<style>

</style>