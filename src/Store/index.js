import {createStore} from "vuex"
import axios from 'axios'
// create a store instance 
export default createStore({
    state:{
        baseURL: 'https://limitless-lake-55070.herokuapp.com/',
        categories:[],
        products:[],
        cartItems:[],
        wishlist:[],
        cartTotal:0,
        token:null,
        navbarKey:""
    },
    mutations:{
        SET_CATEGORIES(state,payload){
            state.categories= payload;
        },
        SET_PRODUCT(state,payload){
            state.products= payload;
        },
        SET_CART_ITEMS(state,payload){
            state.cartItems= payload.cartItems;
            state.cartTotal=payload.cartTotal;
        },
        SET_WISHLIST(state,payload){
            state.wishlist =payload
        },
        REST_CART(state){
            state.cartItems=[];
        },
        KEY_CHANGER(state){
  //  force the navbar component to reload on sign in ,sign out 
            let keys = "svgfdhjklioiyt7890";
            let index = Math.floor(Math.random()* keys.length);
            state.navbarKey += keys[key];
            console.log(state.navbarKey);
        }
        
    },
    actions:{
        async getData({commit,state}){
        // fetch categories
            await axios.get(`${state.baseURL}/category/`).then(res=>{
                commit("SET_CATEGORIES",res.data);
            }).catch(err=>console.log(err));
            // fetch products
            await axios.get(`${state.baseURL}/product/`).then(res=>{
                commit("SET_PRODUCT",res.data);
            }).catch(err=>console.log(err));
        },
        // fetch cart items
        async fetchCart({commit,state}){
            state.token=localStorage.getItem("token")
            await axios.get(`${state.baseURL}cart/?token=${state.token}`).then(res=>{
            const cartItems = res.data.cartItems;
            const cartTotal = res.data.totalCost;
            commit("SET_CART_ITEMS",{cartItems,cartTotal});
           }).catch((err)=>console.log(err))
        },
        // fetch wishlist
        async fetchWishlist({commit,state}){
            state.token=localStorage.getItem("token")
           await axios.get(`${state.baseURL}wishlist/${state.token}`).then(res=>{
             commit("SET_WISHLIST",res.data)
            })
        }
        }
    })
