// Use reduce() to find the largest number in an array.

let arr = [10,20,30,50];
let largestNum = arr.reduce((largest, num)=> {
    return num>largest ? num: largest});
console.log(arr);
console.log(largestNum);
