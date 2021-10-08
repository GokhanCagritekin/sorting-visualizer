let ANIMATION_SPEED_MS = 30;

function mergeSortHelper( mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations,){
    
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);

    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    merge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);  
}

function mergeSort(mainArray){
    const animations = [];    
    const auxiliaryArray = mainArray.slice();
    mergeSortHelper(auxiliaryArray, 0, mainArray.length - 1, mainArray, animations);
    for(let i = 0; i < animations.length; i++){
        setTimeout(() => {
            const array_ele = document.getElementById("idbox").childNodes;
            //const array_ele_R = document.getElementById(`box${animations[i][1] * 7}`);
            array_ele[animations[i][0]].style.height = `${animations[i][1] * 7}px`;
            //array_ele.id = `box${animations[i][1] * 7}`;
            //array_ele_R.style.height = `${animations[i][0] * 7}px`;
            //array_ele_R.id = `box${animations[i][0] * 7}`;            
          }, i * ANIMATION_SPEED_MS)    
    }       
}

function merge(mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,){

    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
  
    while (i <= middleIdx && j <= endIdx) {        
        //animations.push([i, j]);        
        //animations.push([i, j]);
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {        
          animations.push([k, auxiliaryArray[i]]);
          mainArray[k++] = auxiliaryArray[i++];
        } else {         
          animations.push([k, auxiliaryArray[j]]);
          mainArray[k++] = auxiliaryArray[j++];
        }
      }
      while (i <= middleIdx) {       
        //animations.push([i, i]);       
        //animations.push([i, i]);       
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      }
      while (j <= endIdx) {        
        //animations.push([j, j]);        
        //animations.push([j, j]);       
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
}

// function generateBlocks(arr, k){
//     let element = document.getElementById('idbox');
//     var newline = document.createElement("br");
//     element.appendChild(newline);              
//     for(let i = 0 ; i < arr.length; i++){     
//         var array_ele = document.createElement("div");        
//         array_ele.classList.add("box");      
//         array_ele.style.height = `${arr[i] * 7}px`;
//         array_ele.id = `box${k}${arr[i] * 7}`;        
//         element.appendChild(array_ele);
//     }
// }

export default mergeSort;