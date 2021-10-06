function generateRandomArray(){
    let arr = [];
    for(let i = 0 ; i < 8; i++){
        arr[i] = i + 1;
    }
    return shuffle(arr);
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
     
    while (currentIndex != 0) {
        
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
        
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }


export default generateRandomArray;