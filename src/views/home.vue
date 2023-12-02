<template>
<div class="wrapper">
  <section class="home">
    <div class="container d-flex justify-content-center align-items-center h-100">
        <div class="content py-3 align-self-center h-50">
            <button class="btn bg-white btn-lg mb-4 text-success">Start Shopping</button>
            <p class="bg-dark p-2 rounded">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Culpa magnam suscipit et accusantium odit necessitatibus, mollitia soluta fugit aut amet 
                quod maiores deleniti nobis ullam natus iure, voluptatum, dolor officia!</p>
        </div>
    </div>
  </section>
  <!-- our top categories section -->
  <div class="container">
  <section class="top_categories mt-5">
    <h2 class="mb-4">Our Top Categories</h2>
    <div class="row">
       <div class="col-12 col-md-6 col-lg-4 mt-3" 
      v-for="index in category_size" :key="index"
      >
         <CategoryBox :category="categories[index-1]"/>
      </div> 
    </div>
  </section>
  <!-- top products  -->
  <section class="top_products mt-5">
  <h2 class="mb-4">Our Top Products</h2>
  <div class="row">
    <div class="col-12 col-md-6 col-lg-4"
     v-for="index in product_size" :key="index" 
    >
      <ProductBox :product="products[index]"/>
    </div>
  </div>
  </section>
  </div>
  </div>
</template>

<script>
import CategoryBox from "../components/category/categoryBox.vue"

import ProductBox from '../components/product/productBox.vue'

import {mapState} from "vuex"

export default {
name:'home',
data(){
  return{
    category_size:0,
    product_size:0
  }
},

components:{
  CategoryBox,
  ProductBox
},

computed:{
  ...mapState(["categories","products"])
},

created(){
  // wait the page content to load and then get some  (top product && top categories) from store
  setInterval(()=>{
    // git 6 categories as top categories
      this.category_size = this.categories.length;
      this.category_size=Math.min(6,this.categories.length)
      //get 6 products as top products
      this.product_size= this.products.length;
      this.product_size = Math.min(6,this.products.length); 
    },0)
}
}
</script>

<style scoped>
.home{
    height:100vh;
    background:url('../assets/images/home.png');
    background-size: cover;
    background-repeat:no-repeat;

}
.content p{
  background-color: #343a40!important;
  color: #fff;
  font-size: 1.2rem;
}
/*mobile design in small screen*/
@media (max-width:767px) {
  .home{
    background-size: cover;
    background-position:center;
  }
  .content p{
  background-color: #343a40!important;
  color: #fff;
  font-size: 1rem;
}
  .top_categories h2{
    font-size: 1.5rem;
  }
  .top_products h2{
    font-size: 1.5rem;
  }
}
</style>