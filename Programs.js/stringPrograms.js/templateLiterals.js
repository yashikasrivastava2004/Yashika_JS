import PromptSync from "prompt-sync";
const prompt = PromptSync();

let f_name = prompt("Enter the Name: ");
let l_name = prompt("Enter the Last Name: ");

//using console
// console.log("Name is : ", f_name);
// console.log("Last Name is : ", l_name);

//using template Literals
let literal = `My nam is ${f_name} and my last name is ${l_name}`;
console.log(literal);