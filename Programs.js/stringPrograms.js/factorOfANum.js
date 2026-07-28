import PromptSync from "prompt-sync";
const prompt = PromptSync();

let num = prompt("Enter the number you want to find the factor of: ");

for(let i=1; i<num; i++){
    if(num % i== 0){
        console.log(i);
    }
}