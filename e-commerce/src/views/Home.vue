<template>
  <div >
    {{products()}}
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
  name: 'Home',
 
 

methods:{
   ...mapGetters(['products']),
    // products() {
    // return this.$store.state.products
    // }
},
 computed:{
   
  ...mapActions(['getProducts'])
   
},
}
</script>
<style >

</style>