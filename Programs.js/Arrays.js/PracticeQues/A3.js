// A3 :-Find sum and average of elements

//normal
let arr =[10,20,30];
let sumOfArrAndAvg = (arr) => {
    let sum =0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
let avg = sum/arr.length;
    return {sum: sum,avg: avg};
}
console.log(sumOfArrAndAvg(arr));

//inbuild
// let arr =[10,20,30];
// function findSumAndAvg(arr){
// //sum
// let sum = arr.reduce((sum,num) => sum+num,0);

// // Average
// let avg = sum/arr.length;

// return {sum : sum , avg : avg};
// }
// console.log(findSumAndAvg(arr));

