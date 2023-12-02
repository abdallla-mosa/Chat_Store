<template>
<RouterLink class="text-dark" :to="{name:'categoryProducts',params:{id:category.id}}">
  <div class="card h-100" style="width:100%;" v-if="category">
  <img class="card-img-top" :src="category.imageUrl" alt="category image cap">
  <div class="card-body">
    <h5 class="card-title">{{category.categoryName}}</h5>
    <p class="card-text" v-if="category.description">{{category.description.substring(0,60)}}...</p>
    <RouterLink :to="{name:'EditCategory',params:{id:category.id}}" class="btn btn-success" v-show="$route.name=='AdminCategories'">Edit</RouterLink>
  </div>
</div>
</RouterLink>
</template>
<script>
export default {
    name:"categoryBox",
    props:["category"]
}
</script>

<style scoped>
.card{
  cursor: pointer;
}
.card:hover{
 box-shadow: 0 0 5px #ccc,-0 -0 5px #ccc;
 transition: .4s;
}
</style>