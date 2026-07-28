import PromptSync from "prompt-sync";
const prompt = PromptSync();

let inputString = prompt("Enter the string : ");
let reverseString = "";
let original = inputString ;
if(inputString){
    for(let i = inputString.length-1; i>=0; i--){
        reverseString += inputString[i];
    }
}

console.log("Reversed String: ", reverseString);
if(original == reverseString){
    console.log("String is palindrome!");
}
else {
    console.log("String is not Palindrome!");
}