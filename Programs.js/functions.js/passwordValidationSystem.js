// Implement a private variable using closure (e.g., a password validation system).

// import PromptSync from "prompt-sync";
// const prompt = PromptSync();

// let enterPassword = prompt("Enter the password: ");

function createPassword(){
    let pwd = "User@123"

function checkPassword (input){
    if(input== pwd){
        console.log("Password is correct : Successfully Logged in");
    }
    else{
        console.log("Password is incorrect!");
    }
}
return checkPassword;
}

const checkPassword = createPassword();
// createPassword(checkPassword("hello@123"));  //error:- checkPassword is not defined
checkPassword("hello");
checkPassword("User@123");