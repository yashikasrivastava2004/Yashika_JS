import PromptSync from "prompt-sync";
const prompt = PromptSync();

let readChar = prompt("Enter the character to count: ");
let str = prompt ("Enter the String: ");
let countFreq = 0;

if(str && readChar){
    for(let i=0; i<=str.length; i++){
        if(str[i] == readChar){
            countFreq++;
        }
    }
}

console.log(`The Freq of ${readChar} is ${countFreq}`);
