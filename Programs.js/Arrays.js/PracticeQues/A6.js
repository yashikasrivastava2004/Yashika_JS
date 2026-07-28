// A6 :-Find second largest element

let arr =[100,200,57,49];
function secLargest (arr){
    let largest = arr[0];
    let secondLargest = -Infinity; 
    //special value in jS represents the smallest possible num 
    for(let i=0; i<arr.length; i++){
        if(arr[i]>largest){
            largest = arr[i];
        }
        else if(arr[i] > secondLargest && arr[i] < largest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

console.log(secLargest(arr));
