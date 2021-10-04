<template>
  <div>
    <h1>{{ arr }}</h1>
    <h2>{{ sortedarr }}</h2>
    <div id="buttongen">
        <button v-on:click="regenerateRandomArray">Generate Array</button>        
    </div>
    <div id="buttonsort">
        <button v-on:click="reMergeSort">Sort Array</button>        
    </div> 
  </div>
</template>

<script>
import mergeSort from '../..//src/mergeSort'
import generateRandomArray from '../..//src/generateRandomArray'

export default {
  name: 'sort',
  data () {
    return {
        arr:[],
        sortedarr: []
        //sortedarr: mergeSort(Array.from(array))
    }
}, 
 methods:{
    regenerateRandomArray: function () {
        this.arr = generateRandomArray()
    },
    reMergeSort: function(){
        this.sortedarr = mergeSort(Array.from(this.arr))
    }
  }     
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
