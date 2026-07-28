// A4 :-Linear search and binary search

//Linear search 
// let arr =[10,20,30,40,50];

// let targetElement = 40;
// for(let i=0; i<arr.length; i++){
//     if(arr[i]==targetElement){
//         console.log(arr[i]);
//     }
// }

//Binary search 
let arr = [10,20,80,50,40];
let target =50;
let sortedArr = arr.sort((a,b) => a-b);
console.log("Sorted Array is: ", sortedArr);

function middleElement (arr){
    let left=0; 
    let right= arr.length-1;
    while(left <= right){
    let mid = /*Math.floor*/parseInt((left +right) /2);
    // let middleValue = arr[middleEle];
    // console.log(arr[middleValue]);

    if(arr[mid] == target){
        // console.log(mid);
        console.log(`found target ${target} at index ${mid}`);
        return mid;
    }
    else if(arr[mid] < target ){
        left = mid + 1;
    }
    else{
        right = mid - 1;
    }
}
return -1;
}
middleElement (sortedArr);    
