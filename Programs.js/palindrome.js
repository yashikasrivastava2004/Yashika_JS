import PromptSync from "prompt-sync";
const prompt =PromptSync();
// let num = 121;
let num =prompt("Enter the Number you want to check: ");
let original = num;
let reversed = 0;

while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = parseInt(num / 10);
}

if (original === reversed) {
    console.log(" Number is Palindrome");
} else {
    console.log("Numberis Not Palindrome");
}