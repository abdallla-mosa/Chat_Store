<template>
   <div class="editCategory mt-5">
    <h1 class="w-100 text-center">Edit Category</h1>
    <div class="row">
        <div class="col-3"></div>
        <form class="col-6" action="#" v-if="category" @submit.prevent="editCategory">
            <div class="form-group">
                <label for="CategoryName">category name</label>
                <input id="CategoryName" class="form-control" type="text" v-model="category.categoryName" required>
            </div>
            <div class="form-group">
                <label for="CategoryName">Description</label>
                <input id="CategoryName" class="form-control" type="text" v-model="category.description" required>
            </div>
            <div class="form-group">
                <label for="CategoryName">ImageURL</label>
                <input id="CategoryName" class="form-control" type="text" v-model="category.imageUrl" required>
            </div>
            <button class="btn btn-success" type="submit">Submit</button>
        </form>
        <div class="col-3"></div>
    </div>
   </div>
</template>

<script>
import {mapState} from "vuex"
import axios from 'axios'
import swal from "sweetalert"
export default {
     name:"EditCatedory",
     data(){
        return{
            category:null
        }
     },
   computed:{
    ...mapState(["categories","baseURL"])
   },
   methods:{
    async editCategory(){
        delete this.category["products"]
     await axios.post(`${this.baseURL}category/update/`+this.id,this.category).then(()=>{
         this.$store.dispatch("getData");
        this.$router.push({name:"AdminCategories"});
        swal({
            text:"the category is updated succesfuly",
            icon:'success'
        })
     })
    }
   },
   mounted(){
    this.id = this.$route.params.id;
    this.category= this.categories.find(category=>category.id == this.id);
   }
}
</script>

<style>

</style>