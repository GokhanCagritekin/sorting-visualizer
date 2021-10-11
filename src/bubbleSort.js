function bubbleSort(arr){
    for(let i = 0; i < arr.length; i ++){
        let isSwapped = 0;
        for(let j = 0; j < arr.length - i; j++){
            if(arr[j] > arr[j + 1]){
                swap(j, arr);
                isSwapped = 1;
            }
        }
        if(isSwapped == 0)
            break;        
    }
    return arr;
}

function swap(j, arr){
    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
}

export default bubbleSort;