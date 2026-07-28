// 6. Write a *closure* that stores user login attempts and increases a counter for each login.

import PromptSync from "prompt-sync";
const prompt = PromptSync();

let uName, pswd;
function closure (){
    let userName = "Yashika";
    let pwd = "1234";
    let counter = 0;
    let maxAttempts =3;
    function loginAttemps(){

        if(counter >= maxAttempts){
            console.log("Attemps 0 left, try after 1 hr!");
            return counter;
        }
        uName = prompt(`Enter the username : `);
        pswd = prompt(`Enter the password: `);
        
        if(uName === userName && pswd === pwd){
                console.log("Credentials are valid !");
                counter = 0;
            }
            else{
            console.log(`Invalid Credentials, attempts used : ${counter}/ ${maxAttempts}`);
                counter++;

            if(counter >= maxAttempts){
            console.log("Attemps 0 left, try after 1 hr!");
            }
        }
        return counter;
    }
        return loginAttemps;              
}

const demo = closure();
demo();
demo();
demo();
demo();


