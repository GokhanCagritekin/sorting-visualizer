<template>
<html>
  <body>
    <div>         
      <div>
        <button class="button" v-on:click="generateRandomArray" :disabled="isdisabled">Generate New Array</button>
        <label> Change Array Size & Speed </label>      
        <input :disabled="isdisabled" type="range" min="4" max="104" value="40" id="changeSize" @change="changeArrayLength" style="background: white; cursor: pointer;">       
        <button class="button" v-on:click="mergeSort" :disabled="isdisabled">Merge Sort</button>
        <button class="button" v-on:click="bubbleSort" :disabled="isdisabled">Bubble Sort</button>                                  
      </div>        
    </div>
    <div class="bottom">    
      <label> Main Array </label>    
      <div class="box1" id="mainArr"></div>
      <div v-show="isauxvisible">
        <label> Auxiliary Array </label>
        <div class="box2" id="auxArr"></div> 
      </div>        
    </div>
    <div style="display:none">
      <audio id="myAudio" controls>
        <source src="../..//src/assets/DM-CGS-45.wav" type="audio/wav">  
      </audio>
      <audio id="myAudio2" controls>
        <source src="../..//src/assets/DM-CGS-34.wav" type="audio/wav">  
      </audio>
       <audio id="myAudio3" controls>
        <source src="../..//src/assets/DM-CGS-16.wav" type="audio/wav">  
      </audio>
      </div>  
  </body>
</html> 
</template>

<script>
import mergeSort from '../..//src/mergeSort'
import bubbleSort from '../..//src/bubbleSort'
import generateRandomArray from '../..//src/generateRandomArray'
import generateBlocks from '../..//src/generateBlocks'

export default {
  name: 'sort',
  data () {
    return {
        arr:[],        
        arrLength:24,
        ANIMATION_SPEED_MS: 30,
        isdisabled:false,
        isauxvisible:false,                     
    }
}, 
 methods:{
    generateRandomArray: function () {
        this.arr = generateRandomArray(this.arrLength)
        generateBlocks(this.arr)        
    },
    mergeSort: function(){
        this.generateRandomArray()
        this.isdisabled = true
        this.isauxvisible = true
        this.ANIMATION_SPEED_MS = (1000 / this.arr.length)
        const animLength = mergeSort(this.arr, this.ANIMATION_SPEED_MS)
         setTimeout(() => {
          this.isdisabled = false
        }, (animLength + 1) * this.ANIMATION_SPEED_MS);         
    },
    changeArrayLength: function(){
      const element = document.getElementById("changeSize")
      this.arrLength = element.value 
      this.generateRandomArray()     
    },
    bubbleSort: function(){
        this.generateRandomArray()
        this.isauxvisible = false
        this.isdisabled = true
        this.ANIMATION_SPEED_MS = (3000 / Math.pow(this.arr.length, 3/2)) 
        const animLength = bubbleSort(this.arr, this.ANIMATION_SPEED_MS)
         setTimeout(() => {
          this.isdisabled = false
        }, (animLength + 1) * this.ANIMATION_SPEED_MS) 
    },    
  },
  mounted: function(){
    this.generateRandomArray()
  }     
}
</script>

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
