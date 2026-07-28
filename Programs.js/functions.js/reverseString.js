import PromptSync from "prompt-sync";
const prompt = PromptSync();
let str = (prompt("Enter the string: "));

function reverseTheString(str){
    let reverse = "";
    for(let i=str.length-1; i>=0; i--){
        reverse += str[i];
    }
    return reverse;
}
console.log(reverseTheString(str));

