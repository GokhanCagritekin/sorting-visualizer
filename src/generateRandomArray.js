function generateRandomArray(length){
    let arr = [];
    for(let i = 0 ; i < length; i++){
        arr[i] = randomIntFromInterval(5, 90)
    }
    return arr;    
}

function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}


export default generateRandomArray;