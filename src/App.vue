<template>  
  <sort arr/>
</template>

<script>
import sort from './components/sort.vue'
//import mergeSort from './mergeSort'
export default {
  name: 'App',
  components: {
    sort
  }    
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
