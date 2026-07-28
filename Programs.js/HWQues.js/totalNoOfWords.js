import PromptSync from "prompt-sync";
const prompt = PromptSync();

let str = prompt("Enter the string: ");
let countWordFreq =1;
// let temp_arr = str.split(" ");
//     for(let i =0 ; i<temp_arr.length; i++){
//         countWordFreq++;
//     }
// console.log(countWordFreq);

for(let i =0 ; i<str.length; i++){
    let str2 = str[i];
    if(str2 == " "){
        countWordFreq++;    }
}
console.log(countWordFreq);

