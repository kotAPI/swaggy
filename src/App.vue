<template>
  <div id="app">
    <div class="container">
      <div class="navbar">
        <div class="row" style="width:400px;float:left;padding-left:40px;">
          <div class="small-2 columns">
            <div class="logo-image"></div>
        
          </div>
          <div class="small-8 columns">
            <div class="navbar-logo" @click="goToHome">Swaggy</div>
          </div>
        </div>
      </div>
       <router-view></router-view>
    </div>
  
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
    
  },
  methods:{
    goToHome(){
      this.$router.push("/")
    }
  }
}
</script>

<style>
.logo-image{
  background-image:url("https://cdn.dribbble.com/users/182238/screenshots/2421584/s1.jpg");
  background-size:contain;
  display:inline-block;
  background-repeat: no-repeat;
  width:64px;
  height:64px;
}
.navbar-logo{
  color:orange;
  font-weight: 600;
  font-size:2em;
  text-align: left;
  padding-top:10px;

  font-family: 'Poppins',sans-serif;
  cursor: pointer;
  display: inline-block;
 
}
.navbar{
  width:100%;
  position:fixed;
  height:60px;
  border-bottom:1px solid rgba(0,0,0,0.1);
  top:0px;
  left:0px;
   background-color:white;
  z-index:100;
}
.container{
  width:1160px;
  width:100%;
  margin:auto;
  z-index: 10;
  position: relative;
  margin-top:120px;
  padding:10px;
  font-family: 'Poppins', sans-serif !important;
  margin-bottom:100px;
}
</style>
