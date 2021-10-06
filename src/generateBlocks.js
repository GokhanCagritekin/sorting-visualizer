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
        array_ele.style.height = `${arr[i] * 7}px`;
        array_ele.id = `box${arr[i] * 7}`;        
        element.appendChild(array_ele);
    }
}

export default generateBlocks;