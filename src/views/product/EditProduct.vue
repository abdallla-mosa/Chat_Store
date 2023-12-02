<template>
 <div class="editProduct">
  <h1 class="text-center w-100 mt-4">Edit Product </h1>
  <div class="row">
    <div class="col-3"></div>
    <form action="#" @submit.prevent="updateProduct" v-if="product">
      <div class="form-group">
     <label for="category">Category</label>
        <select class="form-control" id="category" v-model="product.categoryId" required>
            <option :value="category.id" v-for="(category,index) of categories" :key="index" selected>{{category.categoryName}}</option>
        </select>
        </div>
        <div class="form-group">
            <label for="ProductName">Name</label>
            <input id="name" type="text" v-model="product.name" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="description">Description</label>
            <input type="text" id="description" v-model="product.description" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="imageUrl">Image URL</label>
            <input id="imageUrl" type="text" v-model="product.imageURL" class="form-control" required>
        </div>
        <div class="form-group">
            <label  for="price">Price</label>
            <input id="price" type="number" v-model="product.price" class="form-control" required>
        </div> 
        <button class="btn btn-success" type="submit">submit</button>
    </form>
    <div class="col-3" ></div>
  </div>
 </div>
</template>

<script>
import {mapState} from 'vuex'
import axios from 'axios'
import swal from "sweetalert"
export default {
 name:'EditProduct',
 data(){
  return{
    product:null,
  }
 },
 computed:{
  ...mapState(["products","categories","baseURL"])
 },
 methods:{
 async updateProduct(){
  
   await axios.post(`${this.baseURL}product/update/${this.id}`,this.product).then((res)=>{
    this.$store.dispatch("getData")
    this.$router.push({name:"AdminProducts"})
      swal({
        text : "the product Updated successfuly",
        icon : "success"
      })
   })
  }
 },
 mounted(){
   this.id = this.$route.params.id;
  this.product = this.products.find(product => product.id == this.id);
 }
}
</script>

<style>

</style>