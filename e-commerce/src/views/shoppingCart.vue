<template>
 <div class="container mt-5">
    <div v-for="shop in shoppings" :key="shop._id">
        <div class="card p-5 mb-3">
           <div class=" row g-0">
              <div class="col-md-4">
                 <img :src="shop.image" alt="..." class="img-fluid"/>
              </div>
              <div class="col-md-8">
                 <h5 class="card-header">{{shop.name}}</h5>
                 <div class="text-end">
                     <select class="p-2" >
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                     </select>
                 </div>
                 
                 <div class="card-body">
                     <h5 class="card-title">{{shop.short}}</h5>
                 </div> 
                 <div class="text-end">{{shop.price}} kr</div>
              </div>
           </div> 
        </div>
    </div>
 </div>
  
</template>

<script>
import { mapGetters } from 'vuex'
export default {
 computed:{
     ...mapGetters(['shoppings'])
 }
}
</script>

<style>

</style>