<script >
import {RouterLink,RouterView} from 'vue-router'
import {mapActions,mapState} from 'vuex'
import Navbar from "./components/Navbar.vue"
import Footer from "./components/footer.vue"
 export default{
   created(){
    this.getData();
    this.fetchCart();
    this.fetchWishlist();
   },
  components:{
    Navbar,
    Footer
  },
  computed:{
   ...mapState(["top_categories"]),
  },
  methods:{
   ...mapActions(["getData","fetchCart","fetchWishlist"]),
  
 }
 }
</script>

<template>
<div class="app">
  <Navbar/>
  <main class="main pt-5 position-relative">
   
   <RouterView/>
  </main>
  <footer>
  <Footer/>
  </footer>
 </div>
</template>

<style scoped>

</style>
