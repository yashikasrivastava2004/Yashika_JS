// import PromptSync from "prompt-sync";
// const prompt = PromptSync();
// let str = prompt("enter the string: ");


// function countVowels(str){

//     let vowels = "aeiouAEIOU";
//     let count = 0;
//     for(let char of str){
//         if (vowels.includes(char)){
//             count++;
//         }
//     }
//     return count;
// }
// console.log("Number of Vowels in the given string are: " +countVowels("helloae"));

function countVowels(str){
    let upper = str.toUpperCase();
    let vowels = "AEIOU";
    let count = 0;
    for(let i =0; i<upper.length; i++){
        if (vowels.includes(upper[i])){
            count++;
        }
    }
    return count;
}
console.log("Number of Vowels in the given string are: " +countVowels("helloae"));

