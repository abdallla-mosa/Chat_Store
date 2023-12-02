<template>
 <section class="container mt-5 d-flex justify-content-center align-items-center">
    <div class="row content_holder w-lg-75">
        <div class="
        left bg-success p-5 col-12 col-lg-5 col-md-6
        d-flex justify-content-center align-items-center
        flex-column
        ">
            <h2 class="text-white text-center">Welcome Back!</h2>
            <p class="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Praesentium nulla quidem voluptate 
            </p>
            <button class="btn btn-lg btn-outline-light w-75">Log In </button>
        </div>
        <div class="right col-12 col-lg-7 col-md-6 mt-sm-3">
            <h3>Create Account</h3>
            <form action="#" @submit.prevent="signUp">
                <div class="form-group d-flex flex-column">
                    <label for="email">Email</label>
                    <input v-model="email" type="email" class="form-control" required>
                </div>
                <div class="form-group d-flex justify-content-between">
                    <div class="form-group  w-75 mr-2">
                    <label for="firstName">First Name</label>
                    <input v-model="firstName" id="firstName" type="text" class="form-control" required>
                    </div>
                    <div class="form-group w-75 ">
                    <label for="LastName">Last Name</label>
                    <input v-model="LastName" id="LastName" type="text" class="form-control" required>
                    </div>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input v-model="password" id="password" type="password" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="confirmPassword">Confirm Password</label>
                    <input v-model="confirmPassword" id="confirmPassword" type="password" class="form-control" required>
                </div>
                <button type="submit" class="signUp btn btn-outline-success btn-lg w-50 ">Sign Up</button>
            </form>
        </div>
    </div>
 </section>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'
import {mapState} from 'vuex'
export default {
 name:"SignUp",
 data(){
    return{
        email:null,
        firstName:null,
        LastName:null,
        password:null,
        confirmPassword:null
    }
 },
 computed:{...mapState(["baseURL"])},
 methods:{
    // sign up 
     async signUp(){
        if(this.password === this.confirmPassword){
        const user ={
            email:this.email,
            firstName:this.firstName,
            LastName:this.LastName,
            password:this.password
        }
        await axios.post(`${this.baseURL}user/signup`,user).then(()=>{
            this.$router.push("/")
            swal({
                text:"You Signed Up Successfuly",
                icon:"success"
            })
        })
    }
   else{
     swal({
        text:"You Signed Up Successfuly",
        icon:"error"
    })
   }
  }
 }
}
</script>

<style>
.left{
    border-radius: 10px 0 0 10px;
}
 .left p{
    text-align: center;
    color: whitesmoke;
    font-size: 1.1rem;
 }
</style>