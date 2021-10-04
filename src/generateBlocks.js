function generateBlocks(arr){
    for(let i = 0 ; i < arr.length; i++){
        let element = document.getElementById('idbox');
        var array_ele = document.createElement("div");
        array_ele.classList.add("box");
        array_ele.style.height = `${arr[i] * 20}px`;
        element.appendChild(array_ele);
    }
}

export default generateBlocks;