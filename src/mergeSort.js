function mergeSort(arr){
    let n = arr.length;
    if(n <= 1){
        return;
    }
    let mid = 0;
    if(n%2 == 0) mid = n/2;
    else mid = (n-1)/2;

    let leftArr = [];
    let rightArr = [];
    for(let i = 0; i < mid; i++){
        leftArr[i] = arr[i];
    }
    for(let i = mid, j = 0; i < n; i++, j++){
        rightArr[j] = arr[i];
    }

    mergeSort(leftArr);
    mergeSort(rightArr);
    merge(leftArr, rightArr, arr);
    return arr;   
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

export default mergeSort;