function generateBlocks(arr){
    let element = document.getElementById('idbox');
    var child = element.lastElementChild; 
    while (child) {
        element.removeChild(child);
        child = element.lastElementChild;
    }    
    for(let i = 0 ; i < arr.length; i++){        
        var array_ele = document.createElement("div");
        array_ele.classList.add("box");
        array_ele.style.height = `${arr[i] * 10}px`;       
        element.appendChild(array_ele);
    }
}

export default generateBlocks;