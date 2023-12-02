<template>
<header class="position-fixed w-100 " >
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark d-flex  ">
  <a class="navbar-brand" to="">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarNav">
    <form class="form-inline my-2 my-lg-0 flex-grow-1  w-100">
    <input class="form-control mr-sm-2  w-75" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
    <ul class=" navbar-nav ">
      <li class="nav-item dropdown">
        <RouterLink class="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Browse 
        </RouterLink>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <RouterLink  data-toggle="collapse" data-target=".navbar-collapse.show" class="dropdown-item" :to="{name:'home'}">Home </RouterLink>
          <RouterLink data-toggle="collapse" data-target=".navbar-collapse.show" class="dropdown-item" :to="{name:'categories'}">Categories </RouterLink>
          <RouterLink data-toggle="collapse" data-target=".navbar-collapse.show" class="dropdown-item" :to="{name:'products'}">Products</RouterLink>
        </div>
      </li>
      <li class="nav-item dropdown">
        <RouterLink class="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Actions
        </RouterLink>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown" >
          <RouterLink data-toggle="collapse" data-target=".navbar-collapse.show" class="dropdown-item" v-if="token" :to="{name:'wishlist'}"> Wishlist</RouterLink>
          <RouterLink data-toggle="collapse" data-target=".navbar-collapse.show" class="dropdown-item" v-if="token" :to="{name:'Admin'}"> AdimnPanel</RouterLink>
          <RouterLink data-toggle="collapse" data-target=".navbar-collapse.show" class="dropdown-item" v-if="!token" :to="{name:'SignUp'}">Sign Up</RouterLink>
          <RouterLink data-toggle="collapse" data-target=".navbar-collapse.show" class="dropdown-item" v-if="!token" :to="{name:'signIn'}">Log In </RouterLink>
          <RouterLink @click="signOut" data-toggle="collapse" data-target=".navbar-collapse.show" class="dropdown-item" v-if="token" to=""> Sign Out </RouterLink>
        </div>
      </li>
     <li class="nav-item" >
        <RouterLink data-toggle="collapse" data-target=".navbar-collapse.show" tag="a" class="nav-link" to="/">Orders <span class="sr-only"></span></RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink data-toggle="collapse" data-target=".navbar-collapse.show" 
        class="cart_link nav-link position-relative" :to="{name:'cart'}">
        <span class="amount">
        <small >{{cartItems.length}}</small>
        </span>
        <i class=" fa  fa-shopping-cart"></i> </RouterLink>
      </li>
    </ul>
    
  </div>
</nav>
</header>
</template>


<script>
import {mapState,mapActions,mapMutations} from "vuex"
 export default{
    name : " Navbar ",
    props:["keyChanger"],
    data(){
      return{
        token:null,
      }
    },
    computed:{...mapState(["cartItems","navbarKey"])},
    methods:{
      ...mapActions(["fetchCart","fetchData"]),
      ...mapMutations(["REST_CART",]),
      // sign out 
    signOut(){
      localStorage.removeItem("token");
      this.$forceUpdate();
      this.REST_CART();
      window.location.reload()
      }
   
    },
   
    mounted(){
      this.token = localStorage.getItem("token");
    }
  
 }
 
</script>
<style scoped>
header{
  z-index:3 !important;
}
/* cart Router */
.cart_link i{
  font-size: 1.3rem;
}
/* cart items Amount */
.amount{
  width:17px;
  height: 17px;
  color: #fff;
  text-align:center;
  border-radius: 50%;
  position:absolute;
  top: 2px;
  left: 12px;
  background: red;
}
.amount small{
  display: block;
  text-align: center;
  position: absolute;
  left: 5px;
  bottom: 0.1px;
}
</style>