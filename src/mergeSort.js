const RED = '#FF4949'
const ORANGE = '#FF8C00'
const BLUE = '#0000CD'

function mergeSortHelper(mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations,
  ANIMATION_SPEED_MS){
    
  if (startIdx === endIdx) return
  const middleIdx = Math.floor((startIdx + endIdx) / 2)

  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations, ANIMATION_SPEED_MS)
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations, ANIMATION_SPEED_MS)
  merge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations, ANIMATION_SPEED_MS) 
}

function mergeSort(mainArray, ANIMATION_SPEED_MS){
    const animations = []   
    const auxiliaryArray = mainArray.slice()
    mergeSortHelper(auxiliaryArray, 0, mainArray.length - 1, mainArray, animations ,ANIMATION_SPEED_MS)
    for(let i = 0; i < animations.length; i++){
        const isColorChange = i % 3 !== 2
        const mainArrBox = document.getElementById("mainArr").childNodes
        const auxArrBox = document.getElementById("auxArr").childNodes                       
        const color = i % 3 === 0 ? RED : BLUE        
        if (isColorChange) {                                                         
            setTimeout(() => {
                const box1Style = auxArrBox[animations[i][0]].style
                const box2Style = auxArrBox[animations[i][1]].style
                box1Style.backgroundColor = color
                box2Style.backgroundColor = color               
              }, i * ANIMATION_SPEED_MS)
            }else{
                setTimeout(() => {                   
                  mainArrBox[animations[i][0]].style.height = `${animations[i][1] * 2}px`                  
                  }, i * ANIMATION_SPEED_MS)                 
            }                             
        }
        setTimeout(() => {
          const audio = document.getElementById("myAudio");
          audio.play();                             
        }, animations.length * ANIMATION_SPEED_MS);        
        return animations.length;                            
    }       

function merge(mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
    ANIMATION_SPEED_MS,){

    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
  
    while (i <= middleIdx && j <= endIdx) {        
        animations.push([i, j]);        
        animations.push([i, j]);
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {        
          animations.push([k, auxiliaryArray[i]]);
          mainArray[k++] = auxiliaryArray[i++];
        } else {         
          animations.push([k, auxiliaryArray[j]]);
          mainArray[k++] = auxiliaryArray[j++];
        }
      }
      while (i <= middleIdx) {       
        animations.push([i, i]);       
        animations.push([i, i]);       
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      }
      while (j <= endIdx) {        
        animations.push([j, j]);        
        animations.push([j, j]);       
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    const audio2 = document.getElementById("myAudio2");
    const mainArrBox = document.getElementById("mainArr").childNodes;
    for(let idx = startIdx; idx <= endIdx; idx++){              
      setTimeout(() => {
        audio2.play(); 
        mainArrBox[idx].style.backgroundColor = ORANGE           
      }, animations.length * ANIMATION_SPEED_MS);
      setTimeout(() => {              
        mainArrBox[idx].style.backgroundColor = BLUE                                 
      }, (animations.length * ANIMATION_SPEED_MS + 100));  
    }
    
 
}

export default mergeSort;