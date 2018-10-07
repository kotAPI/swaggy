<template>
  <div id="app">
    <div class="container">
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
.container{
  width:1160px;
  margin:auto;
  border:1px solid black;
  margin-top:60px;
  padding:10px;
}
</style>
