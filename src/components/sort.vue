<template>
<div>   
    <div>
        <label> Change Array Size & Speed </label>      
        <input type="range" min="4" max="104" value="40" id="changeSize" @change="changeArrayLength" style="background: white; cursor: pointer;">
        <button id="buttongen" v-on:click="regenerateRandomArray">Generate Array</button>
        <button id="buttonsort" v-on:click="reMergeSort">Sort Array</button>                 
    </div>
    <br>    
    <br>
    <br>
    <br>
    <br>
  <label> Main Array </label>
  <br>
  <br>         
  </div>
  <div style="position: sticky; heigth:300px;" id="idbox"></div>
  <br>
  <label> Auxiliary Array </label>
  <br>
  <br> 
  <div style="position: sticky; heigth:300px;" id="idbox2"></div> 
     
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
        sortedarr: [],
        arrLength:4,
        ANIMATION_SPEED_MS: 30,              
        //sortedarr: mergeSort(Array.from(array))
    }
}, 
 methods:{
    regenerateRandomArray: function () {
        this.arr = generateRandomArray(this.arrLength)
        generateBlocks(this.arr)        
    },
    reMergeSort: function(){
        this.ANIMATION_SPEED_MS = (1000 / this.arr.length)
        this.sortedarr = mergeSort(this.arr, this.ANIMATION_SPEED_MS)        
    },
    changeArrayLength: function(){
      const element = document.getElementById("changeSize");
      this.arrLength = element.value ;      
    }    
  }     
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.box{            
    margin: 0 1px;
    background-color: #0000CD;
    color: transparent;
    font-size: 8px;
    padding-top: 7px;
    font-family: sans-serif;
    font-weight: 700;
    display: inline-block;
}

</style>
