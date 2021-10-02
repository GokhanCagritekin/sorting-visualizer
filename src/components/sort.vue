<template>
  <div>
    <h1>{{ arr }}</h1>
  </div>
</template>

<script>
import mergeSort from '../..//src/mergeSort'
export default {
  name: 'sort', 
  data() {
    return {
      arr : mergeSort([2,3,1,4343,534,32,1,443,54,3])
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
