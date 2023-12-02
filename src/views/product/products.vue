<template>
  <div class="container">
    <header class="text-center mt-4 posititon-relative w-100 d-flex flex-column justify-content-center align-items-end">
        <h2 class="text-center w-100">Our Products</h2>
        <button v-show="$route.name=='AdminProducts'" class="btn btn-outline-success w-25"><RouterLink :to="{name:'AddProduct'}">Add New Product</RouterLink></button>
    </header>
    <div class="row">
        <div class="col-12 col-lg-4 col-md-6 mt-3" v-for="product of products" :key="product.id">
            <Product :product="product"/>
        </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"
import Product from "../../components/product/productBox.vue"
export default {
 name:'products',
 computed:{
   ...mapState(["products"])
 },
 components:{
    Product
 }
}
</script>

<style>
  
</style>