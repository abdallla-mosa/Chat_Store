<template>
<section class="container mt-5">
  <h1 class="text-center mb-5">wishlist</h1>
  <div class="row">
    <div v-for="product of products" :key="product.id" class="col-12 col-lg-4 col-md-6">
      <ProductBox :product="product"/>
    </div>
  </div>
</section>
</template>

<script>
import ProductBox from '../../components/product/productBox.vue'
import {mapState} from "vuex"
export default {
  name:'wishlist',
  data(){
    return{
        products:null,
        token:null
    }
  },
  computed:{
    ...mapState(["wishlist"])
  },
  components:{ProductBox},
  
  mounted(){
    this.token=localStorage.getItem("token");
    this.products = this.wishlist;
  }
}
</script>

<style>

</style>