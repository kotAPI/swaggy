<template>
  <div id="app">
    <div class="container">
      <div class="navbar">
        <div class="navbar-logo">Swaggy</div>
      </div>
       <router-view></router-view>
    </div>
  
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style>
.navbar-logo{
  color:orange;
  font-weight: 600;
  font-size:2em;
  padding-top:10px;
  padding-left:50px;
  font-family: 'Poppins',sans-serif;
 
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
