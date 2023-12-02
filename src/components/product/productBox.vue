<template>
<RouterLink class="text-dark" :to="{name:'details',params:{id:product.id}}">
<div class="card h-100" style="width:100%;" v-if="product">
  <img class="card-img-top" :src="product.imageURL" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{product.name}}</h5>
    <p class="card-text" v-if="product.description">{{product.description.substring(0,60)}}...</p>
    <RouterLink  :to="{ name:'EditProduct',params:{id : product.id}}" v-show="$route.name=='AdminProducts'" >
      <button class="btn btn-success" >Edit</button>
    </RouterLink>
  </div>
</div>
</RouterLink>
</template>
<script>
export default {
    name:"product",
    props:["product"],
}
</script>