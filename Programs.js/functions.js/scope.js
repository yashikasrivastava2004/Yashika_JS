// Write code demonstrating global scope vs. local scope using functions.

let topic ="JAVASCRIPT"; //Global Variable
function lScope (){
    let topic1 = "JS"; // Local variable
    console.log(topic); //calling global Scope Variable
    return topic1;
}
console.log(lScope()); // calling local scope variable

// Write a program showing block scope behavior using let.

if(true){
    let msg = "hii" // block variable
    console.log(msg); // will print hii
}
console.log(msg);// give error and will not print hii

