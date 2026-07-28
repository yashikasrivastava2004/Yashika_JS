import PromptSync from "prompt-sync";
const prompt = PromptSync();

let num1 = prompt("Enter the first number : ");
let num2 = prompt("Enter the second number : ");

let a =num1;
let b= num2;
while(num2 !=0 ){
    let remainder = num1 % num2;
    num1 =num2;
    num2 = remainder ;
}

console.log(`The GCD of ${a} and ${b} is : ${num1}`);


