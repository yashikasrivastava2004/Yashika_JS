import PromptSync from "prompt-sync";
const prompt = PromptSync();

let string = prompt("Enter the string: ");
let upperString = string.toUpperCase();
let count = 0;
if(string){
    for(let i=0; i < string.length; i++){
        switch(string[i]){
            case 'a': case 'e': case 'i':case 'o':case 'u':
            // case 'A': case 'E': case 'I':case 'O':case 'U':
                count++;
                break;
        }
}
}

console.log("Input String: ", string);
console.log("Number of Vowels: ", count);