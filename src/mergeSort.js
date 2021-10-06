let ANIMATION_SPEED_MS = 300;

function mergeSortHelper(arr, k, animations){
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
    
    animations.push(Array.from(leftArr), k++);
    animations.push(Array.from(rightArr), k++);
    
    mergeSortHelper(leftArr, k, animations);
    mergeSortHelper(rightArr, k, animations);
    merge(leftArr, rightArr, arr);      
}

function mergeSort(arr, k){
    const animations = [];
    mergeSortHelper(arr, k, animations);
    for(let i = 0; i < animations.length; i++){
        setTimeout(() => {
            generateBlocks(animations[i]);            
          }, i * ANIMATION_SPEED_MS)    
    }       
}

function merge(leftArr, rightArr, arr){
    let l = 0;
    let r = 0;
    let k = 0;

    while(l < leftArr.length && r < rightArr.length){
        if(leftArr[l] <= rightArr[r]){
            arr[k] = leftArr[l];
            l++;
            k++;            
        }else{
            arr[k] = rightArr[r];
            r++;
            k++;            
        }
    }
    while(l < leftArr.length){
        arr[k] = leftArr[l];
        l++;
        k++
    }
    while(r < rightArr.length){
        arr[k] = rightArr[r];
        r++;
        k++
    }
}

function generateBlocks(arr, k){
    let element = document.getElementById('idbox');
    var newline = document.createElement("br");
    element.appendChild(newline);              
    for(let i = 0 ; i < arr.length; i++){     
        var array_ele = document.createElement("div");        
        array_ele.classList.add("box");      
        array_ele.style.height = `${arr[i] * 7}px`;
        array_ele.id = `box${k}${arr[i] * 7}`;        
        element.appendChild(array_ele);
    }
}

export default mergeSort;