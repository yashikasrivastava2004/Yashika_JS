import PromptSync from "prompt-sync";
const prompt = PromptSync();

let num = 123;
let reversed = 0;

while (num > 0) {
    let digit = num % 10; 
    reversed = (reversed * 10) + digit; // just to print it in a series 
    num = parseInt(num / 10);         
}

console.log("Reversed number:", reversed); 
