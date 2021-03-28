<template>
  <div>
    <form  class="container mt-5 bg-light p-5 "  @submit.prevent="createProduct" ref="form">
        <p class="h4">Enter a new product</p>
        <input type="text" id="name" class="mt-3 form-control" placeholder="Enter products name" v-model="product.name">
        <input type="text" id="short" class="mt-3 form-control" placeholder="Enter short description about product" v-model="product.short">
        <input type="text" id="desc" class="mt-3 form-control" placeholder="Enter your description about product" v-model="product.desc">
        <input type="text" id="price" class="mt-3 form-control" placeholder="Enter the price of product" v-model="product.price">
        <input type="text" id="img" class="mt-3 form-control" placeholder="Enter the link of the image" v-model="product.image">
        <button type="submit" class="btn btn-info form-control mt-5 text-white text-uppercase" id="btn-send" >send</button>
        <p class=" mt-3 text-success" v-if="res">{{res}}</p>
        <p class=" mt-3 text-danger" v-else>{{err}}</p>
  </form>
  </div>
</template>
<script>
 import {mapActions, mapGetters} from 'vuex'
export default {
 data(){
   return{
     product:{
        name:'',
        short:'',
        desc:'',
        price:'',
        image:''
     }
   }
 },
 computed:{
    ...mapGetters(['token','res','err'])
 },
 methods:{
     ...mapActions(['addProduct']),
    createProduct(){
     let newproduct={
       name:this.product.name,
       short:this.product.short,
       desc:this.product.desc,
       price:this.product.price,
       image:this.product.image
     }
     let payload={
         product:newproduct,
         token:this.token
     }
     this.addProduct(payload)
      this.product.name=''
      this.product.short=''
      this.product.desc=''
      this.product.price=''
      this.product.image=''
    }   
    
 },
 destroyed(){
     
 }

}
</script>

<style>

</style>