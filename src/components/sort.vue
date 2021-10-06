<template>
<div>
    <h1>{{ sortedarr }}</h1>     
    <div>
        <button id="buttongen" v-on:click="regenerateRandomArray">Generate Array</button>
        <button id="buttonsort" v-on:click="reMergeSort">Sort Array</button>                 
    </div>
    <br>    
    <br>
    <div id="idbox"></div>       
  </div>
</template>

<script>
import mergeSort from '../..//src/mergeSort'
import generateRandomArray from '../..//src/generateRandomArray'
import generateBlocks from '../..//src/generateBlocks'

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
        generateBlocks(this.arr)
    },
    reMergeSort: function(){
        this.sortedarr = mergeSort((this.arr), 0)        
    },    
  }     
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.box{    
    width: 10px;
    margin-left: 3px;
    background-color: #0000CD;
    color: transparent;
    font-size: 8px;
    padding-top: 7px;
    font-family: sans-serif;
    font-weight: 700;
    display: inline-block;
}

</style>
