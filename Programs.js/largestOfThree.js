import PromptSync from "prompt-sync";
const prompt = PromptSync();
let a = prompt("Enter 1st number");
let b = prompt("Enter 2st number");
let c = prompt("Enter 3st number");

// let largest = (a > b)? (a > c ? a : c): (b > c ? b : c);
let maxAB = (a > b) ? a : b;
let largest = (maxAB > c) ? maxAB : c;
console.log("Largest number is " + largest);

