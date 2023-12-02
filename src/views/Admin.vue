<template>
  <div>
    <div class="row">
        <div class="col-3"></div>
        <div class="col-6 d-flex flex-column align-items-center py-5">
        <button class="btn btn-success w-50"><RouterLink class="text-light" :to="{name:'AdminProducts'}">Admin Products</RouterLink></button>
        <button class="btn btn-success w-50 mt-3"><RouterLink class="text-light" :to="{name:'AdminCategories'}">Admin Category </RouterLink></button>
        </div>
        <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
export default {
 name:"Admin"
}
</script>

<style>

</style>