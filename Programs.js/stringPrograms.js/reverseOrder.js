import PromptSync from "prompt-sync";
const prompt = PromptSync();

let num = prompt("Enter the number: ");

for(let i=num; i>0; i--){
    if(i%2!=0){
      console.log(i);
    }
}