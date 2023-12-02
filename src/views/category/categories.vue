<template>
    <div class="container mt-5">
        <header class="mt-3 text-center d-flex flex-column justify-content-center align-items-end">
            <h2 class="text-center w-100">Our Categories</h2>
            <button v-show="$route.name=='AdminCategories'" class="btn btn-outline-success w-25 "><RouterLink  :to="{name:'AddCategory'}">Add New Category</RouterLink> </button>
        </header>
        <div class="row">
        <div class="col-12 col-md-6 col-lg-4 mt-3" v-for="category of categories" :key="category.id">
            <categoryBox :category="category"/>
        </div>
        </div>
    </div>
</template>
<script>
import categoryBox from "../../components/category/categoryBox.vue"; 
import {mapState} from "vuex"
export default {
    name :"categories",
    components:{categoryBox},
    computed:{
        ...mapState(['categories'])
    }
}
</script>