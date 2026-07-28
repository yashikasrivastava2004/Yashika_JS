import PromptSync from "prompt-sync";
const prompt = PromptSync();

let inputString = prompt("Enter the String: ");

if(inputString){
    for(let i=0; i<inputString.length; i++){
        console.log(inputString[i]);
    }
}