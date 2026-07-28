import PromptSync from "prompt-sync";
const prompt = PromptSync();

let num = prompt("Enter the Prime No.: ");
let isPrime = true;

for( let i = 2; i<=(num/2); i++){
    if(num%i==0){
        isPrime = false;
    }
}

if (isPrime) {
    console.log(`${num} is a prime number.`);
} else {
    console.log(`${num} is NOT a prime number.`);
}