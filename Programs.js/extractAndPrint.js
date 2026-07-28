import promptSync from 'prompt-sync';
const prompt = promptSync();

let num = prompt("enter the string:"); //prompt to take input rom the user
// let num = 1234;
while (num > 0) {
    let digit = num % 10; // this will return remainder which is 4/3/2/1
    console.log(digit); //this will print the digit
    num = parseInt(num / 10); //this will return the quotient which will be 123/12/1/0 -> here it will fail the condition and comes out from the loop, parseInt convert the floot value came from the division into 'whole number'
}


//simple code to print the string in a order
// import promptSync from 'prompt-sync';
// const prompt = promptSync();

// let numStr = prompt("Enter the number:");

// // Loop through each character of the string from left to right
// for (let i = 0; i < numStr.length; i++) {
//     console.log(numStr[i]);
// }
