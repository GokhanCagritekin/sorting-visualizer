<template>
<html>
  <body>
    <div>   
    <div>
        <label> Change Array Size & Speed </label>      
        <input type="range" min="4" max="104" value="40" id="changeSize" @change="changeArrayLength" style="background: white; cursor: pointer;">       
        <button class="button" id="buttonsort" v-on:click="reMergeSort">Sort</button>                 
    </div>        
  </div>
  <div class="bottom">    
  <label> Main Array </label>    
  <div class="box1" id="idbox"></div>
  <label> Auxiliary Array </label>
  <div class="box2" id="idbox2"></div>   
    </div>  
  </body>
</html> 
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
        arrLength:24,
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
      this.regenerateRandomArray();      
    }    
  },
  mounted: function(){
    this.regenerateRandomArray();
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

.button {
    color:black;
    font-size: 16px;
    font-family: monospace;
    display: inline-block;
    margin-left: 15px;
    margin-right: 15px;
    cursor: pointer;
    background-color: #ccffff;
}

.button:hover{
  background-color:#9999ff;
}

.upper{
  background-color: burlywood;
  margin-top: 0px;
}

.bottom{
  margin-top: 60px; 
}

.box1{
  margin-top: 30px;
  margin-bottom: 30px;
}

.box2{
  margin-top: 30px;
}

body{
  background-color: #ccffff;
}

label{
  color:mediumblue;
}

</style>
