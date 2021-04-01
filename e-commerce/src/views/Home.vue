<template>
<div>
  <!--SEARCH-->
     <div class="input-group container mt-3">
        <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
          aria-describedby="search-addon" v-model="searchVal" @keyup="search(searchVal)"/>
         <button type="button" class="btn bg text-white">search</button>
         <button type="botton" ref="btnSort" class="btn btn-info ms-2" @click="sortNow" >sort </button>
      </div>
     
      <div v-if="!sortkort">
        <div  class="container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-5  m-auto">
         <div  v-for="(product,index) in filteredProducts" :key="product._id" class=" col" >
           <products-list v-if="index<limitationList"  :product="product"/>
         </div>   
        </div>
        <div class=" mt-3 " :class="textShow">
            <i :class="showclass" ref="btn"  @click="Show" class="i-style ">Show More</i>
         </div>
      </div>
       <!--when we click on sort-->
      <div v-else>
         <div  class="container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-5 m-auto">
         <div  v-for="product in sorted" :key="product._id" class=" col " >
           <products-list :product="product"/>
         </div>
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
      searchVal:'',
      sortkort:false,
      limitationList:9,
      more:true,
      less:false
    }
  },
  methods: {
    ...mapActions(['getProducts','search','sort']),
    sortNow(){
      if(!this.sortkort){
       this.sortkort= !this.sortkort,
       this.sort()
       this.$refs.btnSort.textContent='un sort'
      }
      else{
          this.sortkort= !this.sortkort,
          this.$refs.btnSort.textContent='sort'
      }
      
    },
    Show(){
       if (this.limitationList <this.products.length) {
         this.limitationList = this.products.length
         this.more=false
         this.less=true
         this.$refs.btn.textContent='Show Less'
       }else{
        this.limitationList = 6
        this.more=true
        this.less=false
        this.$refs.btn.textContent='Show More'
      }
     }
  
  },
  computed: {
    ...mapGetters(['products','searchValue','filteredProducts','sorted']),
    showclass(){
      if(this.more){
        return {
          'fas fa-angle-right text-info ':true
        }
      }
      else{
        return {
          'fas fa-less-than text-success':true
        }
      }
    },
    textShow(){
      if(this.more){
        return {
          'text-end':true
        }
      }
      else{
        return {
          'text-start':true
        }
      }
    }
  },
  created() {
    this.getProducts()
    this.searchVal = this.searchValue
  },
  

}
</script>
<style scoped>
 
 .i-style{
   font-size: 1.5rem;
   cursor: pointer;
 }
</style>