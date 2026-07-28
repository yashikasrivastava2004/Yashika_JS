// FUNCTION DECLARACTION
// let sum=0;
// function sumOfElementsOfArray (arr){
//     for(let i=0 ;i<arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;
// }

// let arr=[20,20,30,40];
// console.log(sumOfElementsOfArray(arr));


//FUNCTION EXPRESSION
// let sum =0;
// let sumOfElementsOfArray = function (arr){
//     for(let i=0 ;i<arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;
// }
// let arr=[20,20,30,40];
// console.log(sumOfElementsOfArray(arr));


//USING ARROW FUNCTION
let sum =0;
const sumOfElementsOfArray = (arr)/*arr*/=>{
    for(let i=0 ;i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
let arr=[20,20,30,40];
console.log(sumOfElementsOfArray(arr));

