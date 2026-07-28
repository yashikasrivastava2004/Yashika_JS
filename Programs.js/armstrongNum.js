import PromptSync from "prompt-sync";
const prompt =PromptSync();
// let num = 153;
let num =parseInt(prompt("Enter the Number you want to check: "));
let original = num;
let sum = 0;
let len = String(num).length;

while (num > 0) {
    let digit = num % 10;
    let l = (digit)**len;
    sum = sum + l;
    num = parseInt(num / 10);
}

if (original === sum) {
    console.log(" Number is Armstrong");
} else {
    console.log("Numberis Not Armstrong");
}