// WAP to print each character of a string on a new line using a loop
import PromptSync from "prompt-sync";
const prompt = PromptSync();

let str = prompt("Enter the string: ");

//normal method
for(let i=0; i<str.length; i++){
    console.log("\t" + str[i]);
}

