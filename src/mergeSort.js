let ANIMATION_SPEED_MS = 50;

function mergeSortHelper(arr, animations){
    let n = arr.length;
    if(n <= 1){
        return;
    }
    
    let mid = 0;
    if(n%2 == 0) mid = n/2;
    else mid = (n-1)/2;

    const leftArr = [];
    const rightArr = [];
    for(let i = 0; i < mid; i++){
        leftArr[i] = arr[i];
    }    
    
    for(let i = mid, j = 0; i < n; i++, j++){
        rightArr[j] = arr[i];
    }
     
    mergeSortHelper(leftArr, animations);
    mergeSortHelper(rightArr, animations);
    merge(leftArr, rightArr, arr, animations);      
}

function mergeSort(arr){
    const animations = [];
    mergeSortHelper(arr, animations);
    for(let i = 0; i < animations.length; i++){
        setTimeout(() => {
            const array_ele = document.getElementById(`box${animations[i][0] * 7}`);
            //const array_ele_R = document.getElementById(`box${animations[i][1] * 7}`);
            array_ele.style.height = `${animations[i][1] * 7}px`;
            //array_ele.id = `box${animations[i][1] * 7}`;
            //array_ele_R.style.height = `${animations[i][0] * 7}px`;
            //array_ele_R.id = `box${animations[i][0] * 7}`;            
          }, i * ANIMATION_SPEED_MS)    
    }       
}

function merge(leftArr, rightArr, arr , animations){
    let l = 0;
    let r = 0;
    let k = 0;

    while(l < leftArr.length && r < rightArr.length){
        if(leftArr[l] <= rightArr[r]){
            animations.push(Array.from([arr[k], leftArr[l]]));
            arr[k++] = leftArr[l++];                     
        }else{
            animations.push(Array.from([arr[k], rightArr[r]]));
            arr[k++] = rightArr[r++];                       
        }
    }
    while(l < leftArr.length){
        animations.push(Array.from([arr[k], leftArr[l]]));
        arr[k++] = leftArr[l++];      
    }
    while(r < rightArr.length){
        animations.push(Array.from([arr[k], rightArr[r]]));
        arr[k++] = rightArr[r++];       
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