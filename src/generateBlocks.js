function generateBlocks(arr){
    let element = document.getElementById('idbox');
    var child = element.lastElementChild; 
    while (child) {
        element.removeChild(child);
        child = element.lastElementChild;
    }
    var dummy_ele = document.createElement("div");
    dummy_ele.classList.add("box");      
    dummy_ele.style.height = `180px`;
    dummy_ele.style.width = `0.01px`;      
    for(let i = 0 ; i < arr.length; i++){        
        var array_ele = document.createElement("div");    
        array_ele.classList.add("box");      
        array_ele.style.height = `${arr[i] * 2}px`; 
        array_ele.style.width = `${600 / arr.length}px`;          
        element.append(array_ele);
    }
    element.append(dummy_ele)
    element.style.left = `${(screen.width-(arr.length*10))/2}px`;
    let element2 = document.getElementById('idbox2');
    var child2 = element2.lastElementChild; 
    while (child2) {
        element2.removeChild(child2);
        child2 = element2.lastElementChild;
    }    
    for(let i = 0 ; i < arr.length; i++){        
        var array_ele2 = document.createElement("div");    
        array_ele2.classList.add("box");      
        array_ele2.style.height = `${arr[i] * 2}px`; 
        array_ele2.style.width = `${600 / arr.length}px`;           
        element2.append(array_ele2);
    }
    element2.style.left = `${(screen.width-(arr.length*10))/2}px`;  
}

export default generateBlocks;