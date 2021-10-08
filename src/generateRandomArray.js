function generateRandomArray(min, max){
    let arr = [];
    for(let i = 0 ; i < max - min; i++){
        arr[i] = randomIntFromInterval(min, max)
    }
    return arr;    
}

// function shuffle(array) {
//     let currentIndex = array.length,  randomIndex;
     
//     while (currentIndex != 0) {
        
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;
        
//       [array[currentIndex], array[randomIndex]] = [
//         array[randomIndex], array[currentIndex]];
//     }
  
//     return array;
//   }

function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}


export default generateRandomArray;