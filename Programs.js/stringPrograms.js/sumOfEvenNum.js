import PromptSync from "prompt-sync";
const prompt = PromptSync();

let n = Number(prompt("Enter the number: "));
let sum =0;
for(let i=0; i<=n; i++){
    if(i%2==0){
    sum = sum +i;
    }
}
console.log(sum);
