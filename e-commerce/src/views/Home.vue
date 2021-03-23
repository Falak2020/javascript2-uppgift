<template>
   <div class="container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-5 m-auto">
       <div v-for="product in products" :key="product._id" class=" col " >
           <products-list :product="product"/>
       </div>  
   </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
import productsList from '../components/productsList.vue'
export default {
 components: { productsList },
  name: 'Home',
 
  methods: {
    ...mapActions(['getProducts'])
  },
  computed: {
    ...mapGetters(['products'])
  },
  created() {
    this.getProducts()
  }

}
</script>
<style >

</style>