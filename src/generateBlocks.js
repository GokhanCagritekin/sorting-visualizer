function generateBlocks(arr){
    let mainArrBlocks = document.getElementById('mainArr')
    removeChildNodes(mainArrBlocks)
    createBlocks(mainArrBlocks, arr)          
    createDummyBlock(mainArrBlocks)

    let auxArr = document.getElementById('auxArr')
    removeChildNodes(auxArr)
    createBlocks(auxArr, arr)   
}

function removeChildNodes(element){
    var child = element.lastElementChild
    while (child) {
        element.removeChild(child)
        child = element.lastElementChild
    }
}

function createDummyBlock(element){
    var dummy_ele = document.createElement("div")
    dummy_ele.classList.add("box")   
    dummy_ele.style.height = `180px`
    dummy_ele.style.width = `0.01px`
    element.append(dummy_ele)
}

function createBlocks(element, arr){        
    for(let i = 0 ; i < arr.length; i++){              
        var block = document.createElement("div") 
        block.classList.add("box") 
        block.style.height = `${arr[i] * 2}px`
        block.style.width = `${600 / arr.length}px`        
        element.append(block)
    }
}

export default generateBlocks;