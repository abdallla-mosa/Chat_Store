<template>
<div class="container px-3 my-5 clearfix">
    <!-- Shopping cart table -->
    <div class="card">
        <div class="card-header">
            <h2>Shopping Cart</h2>
        </div>
        <div class="card-body">
            <div class="table-responsive">
              <table class="table table-bordered m-0">
                <thead>
                  <tr>
                    <!-- Set columns width -->
                    <th class="text-center py-3 px-4" style="min-width: 400px;">Product Name &amp; Details</th>
                    <th class="text-right py-3 px-4" style="width: 100px;">Price</th>
                    <th class="text-center py-3 px-4" style="width: 120px;">Quantity</th>
                    <th class="text-right py-3 px-4" style="width: 100px;">Total</th>
                    <th class="text-center align-middle py-3 px-0" style="width: 40px;"><a href="#" class="shop-tooltip float-none text-light" title="" data-original-title="Clear cart"><i class="ino ion-md-trash"></i></a></th>
                  </tr>
                </thead>
                <tbody>
        
                  <tr v-for="cartItem of cartItems" :key="cartItem.id">
                    <td class="p-4">
                      <div class="media align-items-center">
                        <img :src="cartItem.product.imageURL" class="d-block ui-w-40 ui-bordered mr-4" alt="">
                        <div class="media-body">
                          <a href="#" class="d-block text-dark">{{cartItem.product.name}}</a>
                        </div>
                      </div>
                    </td>
                    <td class="text-right font-weight-semibold align-middle p-4">${{cartItem.product.price}}</td>
                    <div class="align-middle p-4 text-center h6">{{cartItem.quantity}}</div>
                    <td class="text-right font-weight-semibold align-middle p-4">${{cartItem.product.price * cartItem.quantity}}</td>
                    <td class="text-center align-middle px-0 text-danger px-3 h3 " @click="deleteItem(cartItem.id)" style="cursor:pointer;">×</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- / Shopping cart table -->
        
            <div class="d-flex flex-wrap justify-content-between align-items-center pb-4">
              <div class="mt-4">
                <label class="text-muted font-weight-normal">Promocode</label>
                <input type="text" placeholder="ABC" class="form-control">
              </div>
              <div class="d-flex">
                <div class="text-right mt-4 mr-5">
                  <label class="text-muted font-weight-normal m-0">Discount</label>
                  <div class="text-large"><strong>$0</strong></div>
                </div>
                <div class="text-right mt-4">
                  <label class="text-muted font-weight-normal m-0">Total price</label>
                  <div class="text-large"><strong>${{cartTotal}}</strong></div>
                </div>
              </div>
            </div>
        
            <div class="float-right">
              <button type="button" class="btn btn-lg btn-default md-btn-flat mt-2 mr-3">Back to shopping</button>
              <button type="button" class="btn btn-lg btn-primary mt-2">Checkout</button>
            </div>
        
          </div>
      </div>
  </div>
</template>

<script>
import {mapState,mapActions} from "vuex"
import axios from 'axios'
export default {
   name:'cart',
  data(){
    return{
        token:null
    }
  },
   computed:{
    ...mapState(["cartItems","cartTotal","baseURL"])
   },
   methods:{
    ...mapActions(['fetchCart']),
    // delete cart item 
    deleteItem(itemId){
     axios.delete(`${this.baseURL}cart/delete/${itemId}/?token=${this.token}`)
        .then(
          () => {
            this.fetchCart();
          },
          (error) => {
            console.log(error);
          }
        );
    }
   },
   created(){
    this.token = localStorage.getItem("token");
   }
}
</script>

<style scoped>
/* globale style 
    img{
      object-fit: cover;
    }
   
    .product{
      margin-top: 50px;
    }
    .imgBox{
        width:6rem;
    }
   .trash{
   text-align: center;
    cursor: pointer;
   }
   /* mobile screen style 
  @media (max-width:767px) {
    .cartItems{
      overflow: hidden;
    }
      .cartItem{
        max-width: 100%;
        min-width: 100%;
        overflow-x: scroll;
      }
    .cart h1{
      font-size: 1.9rem;
    }
    
    .total span{ 
     font-size: 17px;
    }
    .total button{ 
     font-size: 15px;
    }
    .left .imgBox{
      width:10rem;
    }
    .left div:nth-child(2) h6 ,.left div:nth-child(2) span{
      font-size: 15px;
    }
  }
  /* extar small mbile screen 
  @media (max-width: 550px) {
    .cart h1{
      font-size: 1.5rem;
    }
     
    .left div:nth-child(2) h6 ,.left div:nth-child(2) span{
      font-size: 13px;
    }
  }
  @media (max-width: 450px) {
    
  }*/
  body{
    margin-top:20px;
    background:#eee;
}
.ui-w-40 {
    width: 40px !important;
    height: auto;
}

.card{
    box-shadow: 0 1px 15px 1px rgba(52,40,104,.08);    
}

.ui-product-color {
    display: inline-block;
    overflow: hidden;
    margin: .144em;
    width: .875rem;
    height: .875rem;
    border-radius: 10rem;
    -webkit-box-shadow: 0 0 0 1px rgba(0,0,0,0.15) inset;
    box-shadow: 0 0 0 1px rgba(0,0,0,0.15) inset;
    vertical-align: middle;
}
  
</style>