let arr = [ 10,10,20,30,3];

function duplicateRemove(arr){
    
    let uniqueEle = [];
    
    for(let i=0; i<arr.length; i++){
        let isDuplicate = false;
        
        for(let j=0; j< arr.length; j++){
            if(arr[i] == uniqueEle[j]){
                isDuplicate = true;
                break;
            }
        }
        if(!isDuplicate){
            uniqueEle.push(arr[i]);
        }
    }
    return uniqueEle;
}

console.log(duplicateRemove(arr));