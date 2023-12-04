import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'

import Admin from "../views/Admin.vue"
import SignUp from "../views/signUp.vue"
import SignIn from "../views/signIn.vue"

import Categories from "../Views/category/categories.vue"
import AddCategory from "../views/category/AddCategory.vue"
import EditCategory from '../views/category/EditCategory.vue'
import CategoryProducts from "../views/category/categoryProducts.vue"

import Products from "../Views/product/products.vue"
import AddProduct from '../views/product/AddProduct.vue'
import EditProduct from '../views/product/EditProduct.vue'
import ProductDetails from "../views/product/details.vue"
import Wishlist from "../views/product/wishlist.vue"

// cart
import Cart from "../views/cart/cart.vue"

const routes= [
  {
    path:"/",
    name:"home",
    component:Home
  },
  // accounts section
  {
    path:"/Admin",
    name:"Admin",
    component:Admin
  },
  {
    path:"/signUp",
    name:"SignUp",
    component:SignUp
  },
  {
    path:"/SignIn",
    name:"signIn",
    component:SignIn
  },
  // category
{
  path:"/categories",
  name:"categories",
  component :Categories
},
{
  path:"/AddCategory",
  name:"AddCategory",
  component : AddCategory
},
{
  path:"/EditCategory/:id",
  name:"EditCategory",
  component : EditCategory
},
{
  path:"/categoryProducts/:id",
  name:"categoryProducts",
  component : CategoryProducts
},
// Admin categories route
{
  path:"/admin/categories",
  name:"AdminCategories",
  component : Categories
},
// products
{
  path:"/products",
  name:"products",
  component :Products
},
// admin products
{
  path:"/admin/products",
  name:"AdminProducts",
  component :Products
},
{
  path:"/AddProduct",
  name:"AddProduct",
  component :AddProduct
},
{
  path:"/EditProduct/:id",
  name:"EditProduct",
  component :EditProduct
},
{
 path:"/product/details/:id",
 name:'details',
 component:ProductDetails
},
{
 path:"/wishlist",
 name:'wishlist',
 component:Wishlist
},
{
  path:"/cart",
  name:"cart",
  component:Cart
}
]

const router = createRouter({
   history:createWebHashHistory(),
  routes
})

//scroll to top after every route change
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router
