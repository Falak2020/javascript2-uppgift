<template>
<div>
  <!--SEARCH-->
  <div class="input-group container mt-3">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
    aria-describedby="search-addon" v-model="searchVal" @keyup="search(searchVal)"/>
  <button type="button" class="btn bg text-white">search</button>
</div>
  <div class="container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-5 m-auto">

       <div v-for="product in filteredProducts" :key="product._id" class=" col " >
           <products-list :product="product"/>
       </div>  
   </div>
</div>
   
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
import productsList from '../components/productsList.vue'
export default {
 components: { productsList },
  name: 'Home',
  data(){
    return{
      searchVal:''
    }
  },
  methods: {
    ...mapActions(['getProducts','search'])
  },
  computed: {
    ...mapGetters(['products','searchValue','filteredProducts'])
  },
  created() {
    this.getProducts()
    this.searchVal = this.searchValue
  },
  

}
</script>
<style >

</style>