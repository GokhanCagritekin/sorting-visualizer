const RED = '#FF4949'
const GREEN = '#32CD32'
const BLUE = '#0000CD'
const RGBGREEN = 'rgb(50, 205, 50)'

function bubbleSort(arr, ANIMATION_SPEED_MS){
    const animations = []
    bubbleSortHelper(arr, ANIMATION_SPEED_MS, animations)
    const box = document.getElementById("mainArr").childNodes
    for(let i = 0 ; i < animations.length; i++){        
        const box1Style = box[animations[i][0]].style
        const box2Style = box[animations[i][1]].style
        if(animations[i][2] == 'colorRed'){
            setTimeout(() => {                                         
                if(box1Style.backgroundColor != RGBGREEN) box1Style.backgroundColor = RED
                if(box2Style.backgroundColor != RGBGREEN) box2Style.backgroundColor = RED               
              }, i * ANIMATION_SPEED_MS)                                 
        }else if(animations[i][2] == 'colorBlue'){
            setTimeout(() => {
                if(box1Style.backgroundColor != RGBGREEN) box1Style.backgroundColor = BLUE               
                if(box2Style.backgroundColor != RGBGREEN) box2Style.backgroundColor = BLUE               
              }, i * ANIMATION_SPEED_MS)
        }
        else if (animations[i][2] == 'size'){
            setTimeout(() => {                
                [box1Style.height,box2Style.height] = [box2Style.height, box1Style.height]            
              }, i * ANIMATION_SPEED_MS)                 
        }        
    }   
    for(let idx = 0; idx < arr.length; idx++){              
        setTimeout(() => {          
          box[idx].style.backgroundColor = GREEN          
        }, animations.length * ANIMATION_SPEED_MS)      
      }
      setTimeout(() => {
        const audio = document.getElementById("myAudio")
        audio.play()                         
      }, animations.length * ANIMATION_SPEED_MS)          
    return animations.length
}

function bubbleSortHelper(arr, ANIMATION_SPEED_MS, animations){
    
    for(let i = 0; i < arr.length; i ++){
        let isSwapped = 0
        for(let j = 0; j < arr.length - i; j++){
            animations.push([j, j + 1, 'colorRed'])
            animations.push([j, j + 1, 'colorBlue'])
            if(arr[j] > arr[j + 1]){
                animations.push([j, j + 1, 'size'])                
                swap(j, arr)
                isSwapped = 1
            }
        }
        
        const box = document.getElementById("mainArr").childNodes;
        setTimeout(() => {                       
            box[arr.length - i -1].style.backgroundColor = GREEN;                   
            }, animations.length * ANIMATION_SPEED_MS);

        animations.push([0,0,'']) 

        if(isSwapped == 0)
            break;            
    }
    return arr;
}

function swap(j, arr){
    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
}

export default bubbleSort;