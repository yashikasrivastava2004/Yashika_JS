// Write a function that accepts any number of numeric arguments and returns their sum.

function sumOfElements (...Elements){
    let sum =0;
    for(let i=0; i<Elements.length; i++){
        sum += Elements[i];
    }
    return sum ;
}
console.log(sumOfElements(10, 30, 40));



// User Input
// import PromptSync from "prompt-sync";
// const prompt = PromptSync();

// let str = prompt("Enter the elements: ");
// let parseNumbers = str.split(" ").map(Number);

// function sumOfElements (...Elements){
//     let sum =0;
//     for(let i=0; i<Elements.length; i++){
//         sum += Elements[i];
//     }
//     return sum ;
// }
// console.log(sumOfElements(...parseNumbers));



