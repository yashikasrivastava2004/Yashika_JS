// let arr=[10,12,13,18,50];
// function largestNum (arr){
//     let largest = arr[0];
//     for(let i=1 ; i<arr.length; i++){
//        if(arr[i] > largest){
//        largest = arr[i];
//        }        
//     }
//     return largest;
// }
// console.log(largestNum(arr));


// USING ARROW FXN
const largest = (a,b) => {
    if(a>b){
        console.log("a is larger: "+a);
    }
    else {
        console.log("b is larger: "+ b);
    }
}
largest(23,65);

