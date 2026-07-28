import PromptSync from "prompt-sync";
const prompt = PromptSync();

let num1=prompt("Enter the First Number: ");
let num2=prompt("Enter the Second Number: ");

let a = num1;
let b = num2;

while(num2 !=0){
    let remainder = num1 % num2 ;
    num1 = num2;
    num2 = remainder;
}

let gcd = num1;
let lcm = a*b / gcd;

console.log(`The GCD of ${a} and ${b} is: ${num1}`);
console.log(`The LCM of the numbers is: ${lcm}`);



