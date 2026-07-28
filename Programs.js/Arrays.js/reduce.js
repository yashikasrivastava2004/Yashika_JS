let arr = [10,20,30,40,50]

let arrReduce = arr.reduce((total , num) => total +num, 0);
console.log("sum of all the elements of an array: ", arrReduce);