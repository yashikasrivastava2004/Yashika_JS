import PromptSync from "prompt-sync";
const prompt = PromptSync();

let series = prompt("Enter the Series");

let x=0;
let y=1;

for (let i =0; i<=series.length; i++){
   console.log(x);
   let next = x+y;
   x=y;
   y= next;
}