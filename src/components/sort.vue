<template>
<div>    
  <div v-show="false">
    <h1>{{ arr }}</h1>
    </div>
    <div v-show="false">
    <h1>{{ sortedarr }}</h1>
     </div>
    <div>
        <button id="buttongen" v-on:click="regenerateRandomArray">Generate Array</button>
        <button id="buttonsort" v-on:click="reMergeSort">Sort Array</button> 
        <button id="changewidth" v-on:click="changeWidth">Change Width</button>             
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
    },
    reMergeSort: function(){
        this.sortedarr = mergeSort((this.arr))
        generateBlocks(this.arr)
    },
    changeWidth: function(){
        generateBlocks(this.arr)        
    }
  }     
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.box{
    height: 555px;
    width: 5px;
    margin-left: 3px;
    background-color: rgba(66, 134, 244, 0.8);
    color: transparent;
    font-size: 8px;
    padding-top: 7px;
    font-family: sans-serif;
    font-weight: 700;
    display: inline-block;
}

</style>
