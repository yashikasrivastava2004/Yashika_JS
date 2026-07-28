// A1 :- Find largest and smallest element
//Normal solution
// let arr =[12,10,8,6];
// function larAndSmal(arr){
//     let largest = arr[0];
//     let smallest = arr[0];

//     for(const num of arr){
//         if(largest<num){
//             largest = num;
//         }
//         if(smallest>num){
//             smallest = num;
//         }
//     }
//     return [largest, smallest];

// }
// console.log(larAndSmal(arr));

//Using Inbuild fxn
let arr =[10,40,58,100]
let largestAndSmallest = arr.reduce((temp,num) => {
    if(num > temp.max) temp.max =num;
    if(num < temp.min) temp.min =num;
        return temp;
    
},{min: arr[0], max: arr[0]});

console.log(largestAndSmallest);
