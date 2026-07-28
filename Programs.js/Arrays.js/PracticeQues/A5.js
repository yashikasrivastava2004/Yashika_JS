// A5 :-Check if array is sorted

let isSorted = true;
// let arr =[10,70,40,20];
let arr = [10,20,5,40];


for(let i=0; i<arr.length-1; i++){
if(arr[i] > arr[i+1]){
    isSorted=false;
}
}

console.log(isSorted);
console.log(isSorted);

