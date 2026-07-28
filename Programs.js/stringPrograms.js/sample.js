import PromptSync from "prompt-sync";
const prompt = PromptSync();

// let num = prompt("Enter the number: ");

// let sum =0;
// let original = num;
// let len = String(num).length;

// while(num>0){
//     let digit = num % 10;
//     let l = (digit)**len;
//     sum = sum +l ;
//     num = parseInt(num/10);
// }

// if(original == sum){
//     console.log("Its a Armstrong Number! ");   // for eg 153, 9474
// }
// else{
//     console.log("Its not a Armstrong number! ");
// }


//Fabonacci Series

// let series = prompt("Enter the no. of terms: ");

// let x=0;
// let y =1;

// for(let i=0; i<=series.length; i++){
//     console.log(x);
//     let next = x+y;
//     x =y;
//     y= next ;
// }

//Palindrome 

let num = prompt("Enter the number: ");
let reverse = 0;
let original = num;
while(num>0){
    let digit = num%10;
    reverse = (num*10) +digit
    digit = parseInt(num/10)
}
console.log(num);

if(original == reverse){
    console.log("Palindrome");
}
else{
    console.log("Not palindrome");
}

