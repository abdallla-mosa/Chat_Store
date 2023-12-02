<template>
<div class="addProduct mt-4">
  <h1 class="text-center">Add New Product</h1>
  <div class="row">
    <div class="col-3"></div>
    <form action="#" class="col-6" @submit.prevent="addProduct">
        <div class="form-group">
        <label for="category">Category</label>
        <select class="form-control" id="category" v-model="categoryId" required>
            <option :value="category.id" v-for="(category,index) of categories" :key="index" >{{category.categoryName}}</option>
        </select>
        </div>
        <div class="form-group">
            <label for="ProductName">Name</label>
            <input id="name" type="text" v-model="name" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="description">Description</label>
            <input type="text" id="description" v-model="description" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="imageUrl">Image URL</label>
            <input id="imageUrl" type="text" v-model="imageURL" class="form-control" required>
        </div>
        <div class="form-group">
            <label  for="price">Price</label>
            <input id="price" type="number" v-model="price" class="form-control" required>
        </div>
        <button class="btn btn-success">submit</button>
    </form>
    <div class="col-3"></div>
  </div>
</div>
</template>

<script>
import axios from "axios"
import swal from 'sweetalert'
import {mapState} from 'vuex'
export default {
  name:"AddProduct",
  data()
  {
    return{
        id:null,
        category:null,
        category:null,
        name:null,
        description:null,
        imageURL:null,
        price:null
    }
  },
  computed:{
    ...mapState(["baseURL","categories"])
  },
    methods:{
        async addProduct(){
            const newProduct ={
                id:this.id,
                categoryId:this.categoryId,
                category:this.category,
                name:this.name,
                description:this.description,
                imageURL:this.imageURL,
                price:this.price
            }
            axios.post(`${this.baseURL}product/add`,newProduct).then(()=>{
                this.$store.dispatch("getData");
                this.$router.push("products")
                swal({
                text:"Product is Added Successfuly",
                icon:'success'
                })
            })
        }
    }
}
</script>

<style>

</style>