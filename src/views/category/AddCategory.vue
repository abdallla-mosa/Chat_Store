<template>
<div class="addCategory container">
  <h1 class="text-center mt-4 ">Add Categoey</h1>
<div class="row">
  <div class="col-3"></div>
  <form action="#" class="form-group col-6" @submit.prevent="addCategory">
    <div class="form-group" >
      <label for="CategoryName" >Category Name </label>
      <input type="text" id="CategoryName" v-model="categoryName" class="form-control">
    </div>
    <div class="form-group">
      <label for="CategoryName">Description </label>
      <input type="text" id="CategoryName" v-model="description" class="form-control">
    </div>
    <div class="form-group">
      <label for="CategoryName"> Image URL</label>
      <input type="text" id="CategoryName" v-model="imageURL" class="form-control">
    </div>
     <button class="btn btn-success">Submit</button>
  </form>
  <div class="col-3"></div>
</div>
</div>

</template>
<script>
import axios from "axios"
import swal from 'sweetalert';
import {mapState} from 'vuex'
export default {
  name:"AddCategory",
  data(){
    return{
      categoryName : null,
      description : null,
      imageURL : null,
    }
  },
  computed:{
    ...mapState(['baseURL'])
  },
  methods :{
    async addCategory(){
      const newCategory={
        categoryName : this.categoryName,
        description : this.description,
        imageUrl : this.imageURL
      }
      await axios.post(`${this.baseURL}category/create`,newCategory).then(()=>{
        this.$store.dispatch("getData");
        this.$router.push("categories")
        swal({
          text:"Category is Added Successfuly",
          icon:'success'
        })
      })
    }
  }
}
</script>
  