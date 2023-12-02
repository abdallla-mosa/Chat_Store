<template>
 <section class="container mt-5 d-flex align-items-center justify-content-center">
  <div class="row wrapper w-75 border p-4 ">
    <div class="col-12 col-md-6 mx-h-75">
      <img v-if="product.imageURL" class="w-100 h-100" :src="product.imageURL" :alt="product.name">
    </div>
    <div class="col-12 col-md-6">
        <head class="d-block">
          <h5>{{product.name}}</h5> 
          <span class="h6 price">${{product.price}}</span>
          <p class="description muted lead">
            {{product.description}}
          </p>
        </head>
        <div class="overview d-flex my-3">
          <span class="stars">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-o"></i>
          </span>
          <small class="ml-3">4.2 (328 overview)</small>
        </div>
        <div class="quantity d-flex">
          <label class="col-form-label h4 mr-2" for="quantity">Quantity</label>
          <input class="p-0 w-25 form-control" v-model="quantity" type="number" name="quantity" id="quantity">
        </div>
        <!-- featurs -->
        <div class="features">
          <h5>features</h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Lorem ipsum, dolor sit amet consectetur </li>
            <li class="list-group-item ">Minus error, repellat aspernatur accusamus aut </li>
            <li class="list-group-item">dolorem voluptates perferendis laboriosam !</li>
          </ul>
        </div>
        <button @click="addToWishlist(product.id)" class="btn btn-success">{{wishlistText}}</button>
    </div>
    <div class="col-12 footer mt-3 p-2 d-flex align-items-center justify-content-between">
      <div class="imageBox h-100 d-flex w-50">
        <img class="h-100 w-25 mr-3" :src="product.imageURL" :alt="product.name">
        <div>
          <span><strong>{{product.name}}</strong></span>
          <p class="mutes"><small>Every Thing You Need for Good Life </small></p>
        </div>
      </div>
      <div class="right-content d-flex  align-items-center justify-content-between">
        <span><strong class="h5">${{product.price}}</strong></span>
        <button class="btn btn-success ml-4" @click="addToCart">Add To Cart</button>
      </div>
    </div>
  </div>
 </section>
</template>

<script>
import {mapState,mapActions} from "vuex"
import axios from 'axios'
import swal from "sweetalert"
export default {
name:"details",
data(){
  return{
    product:{},
    id:null,
    quantity:1,
    wishlistText:'Add To Wishlist',
    addToWishlistStatus:false,
    token:null,
    isInCart:null
  }
},
 computed:{
  ...mapState(["products","baseURL","cartItems","wishlist"]),
 },
 methods:{
  ...mapActions(["getData","fetchCart","fetchWishlist"]),
   addToWishlist(productId){
     // check wethore the product is in wish list or not 
     let found = this.wishlist.find(product=>product.id == this.id);
     if(found){
      return swal({
        text:'This Product Is Already Added to Cart',
        icon:"error"
      });
     }else{
     // add product to wishlist
    axios.post(`${this.baseURL}wishlist/add?token=${this.token}`,{id:productId}).then((response)=>{
    if(response.status==201){
      this.wishlistText="added To Wishlist";
      this.addToWishlistStatus=true;
      this.fetchWishlist();
    }
   }).catch(error=>{
    console.log(error)
   })
  }
  },
  addToCart(){
    // check wethore product is already in cart or not  
    let found = this.cartItems.find(item=>item.product.id == this.id);
    if(found){
      return swal({
        text:'This Product Is Already Added to Cart',
        icon:"error"
      });
      
    }else{
    // add Product To cart
   axios.post(`${this.baseURL}cart/add/?token=${this.token}`,{productId:this.id,quantity:this.quantity})
    .then(()=>{
       swal({
        text:'product Is Added to Cart',
        icon:'success'
      });
      this.fetchCart();
      })
      }
   }
   },
 mounted(){
  this.id=this.$route.params.id;
  this.product=this.products.find(product=>product.id==this.id)
  this.token= localStorage.getItem("token")
}
}
</script>

<style scoped>
img{
  object-fit: contain;
}
.wrapper{
    box-shadow: 0 0 5px #ccc,-0 -0 5px #ccc;
      border-radius: 1px;
}
.description{
  font-size: 1.rem;
}
.stars i{
  color: yellow;
}
 .footer{
  height: 75px;
  box-shadow: 0 0 15px #ccc,-0 -0 15px #ccc;
  border-radius: 10px;
 }
</style>