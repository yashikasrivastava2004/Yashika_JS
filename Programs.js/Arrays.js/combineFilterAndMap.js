let arr = [1,2,3,4,5,6,7,8,9,10];

let doubledOddNum = arr.filter(num =>
    num%2 != 0).map(num => num*2);
console.log("Array:");
console.log("Doubled odd numbers: ", doubledOddNum);
