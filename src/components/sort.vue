<template>
<div>
    <div id="idbox" class="box">box</div>
    <div id="changewidth">
        <button v-on:click="changeWidth">Change Width</button>        
    </div>
    <br>
  <div v-show="arr.length != 0">
    <h1>{{ arr }}</h1>
    </div>
    <div v-show="sortedarr.length != 0">
    <h1>{{ sortedarr }}</h1>
     </div>
    <div id="buttongen">
        <button v-on:click="regenerateRandomArray">Generate Array</button>        
    </div>
    <br>
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
    },
    changeWidth: function(){
        document.getElementById('idbox').style.width = '100px'
    }
  }     
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>



.box{
    background-color: #2D9CDB;
    border: 0 solid #27AE60;
    width: 600px;
}

</style>
