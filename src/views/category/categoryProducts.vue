<template>
    <div class="category container h-100">
     <div class="row mt-5" v-if="category.products">
       <header class="col-12 text-center mb-4">
            <h2 class="mb-4">{{category.categoryName}}</h2> 
            <h5>{{category.products.length}} products found</h5>
        </header >
        <div class="col-12 col-md-6 col-lg-4" v-for="product of category.products" :key="product.id">
            <ProductBox :product="product"/>
        </div> 
    </div>
     <div v-else class="h-100 d-flex justify-content-center">
        <img class="w-75" src="https://tradebharat.in/assets/catalogue/img/no-product-found.png" alt="">
    </div>
 </div>
</template>

<script>
import ProductBox from '../../components/product/productBox.vue'
import {mapState} from "vuex"
export default {
  name:'categoryProducts',
  data(){
    return{
        category:{},
        categoryIndex:null,
        id:null
    }
  },
  components:{ProductBox},
    computed:{
        ...mapState(["categories"])
    },  
    mounted(){
        this.id = this.$route.params.id;
        this.categoryIndex = this.categories.findIndex(category => category.id == this.id);
        this.category = this.categories[this.categoryIndex];
    }
}
</script>

<style>

</style>