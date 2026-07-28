import PromptSync from "prompt-sync";
const prompt = PromptSync();

let num = parseInt(prompt("enter the number: "));
let count =0;

while(num>0){
    let digit = num % 10;
    num = parseInt(num/10);
    count ++;
}
console.log("Number of digits are: ", count);


