// 11. Compress a string using character counts.
//     * Example: "aaabbcc" → "a3b2c2"

// import PromptSync from "prompt-sync";
// const prompt = PromptSync();

// let str = prompt("Enter the String: ");

let str= "aaabbc";
let count =1;
let result ="";

for(let i=0; i<str.length; i++){
    if(str[i]==str[i+1]){
        count++;
    }
    else{
        result = result+ str[i]+count;
        count=1;
    }
}
console.log(result);