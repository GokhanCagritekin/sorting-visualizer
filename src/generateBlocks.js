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
        element.appendChild(array_ele);
    }
    element.style.left = `${(screen.width-(arr.length*10))/2}px`; 
}

export default generateBlocks;