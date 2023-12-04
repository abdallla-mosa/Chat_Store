<template>
<section class="sign_in container mt-5
       
    ">
    <div class=" row content_holder
        justify-content-center
        align-item-center
        ">

        <div class="
        left bg-success
         col-12 
         col-md-6 
         p-3
         
        d-flex 
        flex-column
        justify-content-center
        align-items-sm-center
        ">
            <h2 class="text-white text-center">Don't Have an Account ?</h2>
            <p class="text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> 
                Praesentium nulla quidem voluptate 
            </p>
             <RouterLink class="w-75" :to="{name:'SignUp'}">
               <button class="btn btn-lg btn-outline-light w-100">Sign Up </button>
              </RouterLink>
        </div>
        <div class="right col-12 p-2 py-3  col-md-6 mt-xs-3">
            <h3 class="text-center" >Log In </h3>
            <form action="#" @submit.prevent="signIn">
                <div class="form-group d-flex flex-column">
                    <label for="email">Email</label>
                    <input v-model="email" type="email" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input v-model="password" id="password" type="password" class="form-control" required>
                </div>
               
                <button type="submit" class=" btn btn-success btn-lg w-50 ">Log In</button>
            </form>
        </div>
    </div>
</section>
</template>

<script>
import {mapState,mapActions} from "vuex"
import axios from 'axios'
import swal from 'sweetalert'
export default {
 name:"signIn",
 data(){
    return{
        email:null,
        password:null
    }
 },
 computed:{
    ...mapState(["baseURL"])
 },
 methods:{
     ...mapActions(["fetchCart","fetchData"]),
    async signIn(){
    const user={
        email:this.email,
        password:this.password
    }
    await axios.post(`${this.baseURL}user/signIn`,user).then(res=>{
        localStorage.setItem('token',res.data.token);
        this.$router.push("/");
        this.fetchCart();
        swal({
            text:"You Loged In Successfuly",
            icon:'success'
        })
    })
    }
 }
}
</script>

<style socped>

@media (max-width:999px) {
    .left{
     border-radius: 10px !important;
    }
}
</style>