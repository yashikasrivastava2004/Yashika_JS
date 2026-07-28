//1. Write a function *greet(userName)* that returns a greeting. If no name is passed, it should greet *"Guest"*.

function greet(userName = "Guest"){
    console.log("Hello", userName );
}
greet("Yashika"); // passing the value 
greet(); // using default parameter