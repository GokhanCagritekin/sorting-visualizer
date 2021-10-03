<template>
  <div>
    <h1>{{ arr }}</h1>
    <h2>{{ sortedarr }}</h2>
  </div>
</template>

<script>
import mergeSort from '../..//src/mergeSort'
import generateRandomArray from '../..//src/generateRandomArray'
let array = generateRandomArray();
export default {
  name: 'sort', 
  data() {
    return {
        arr : Array.from(array),
        sortedarr : mergeSort(array)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
