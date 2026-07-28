function loginValidation (){
    let username ="Yashika";
    let password = "Yashi@123";

    function checkValidation (Uname, pwd){
        if(username == Uname && password == pwd){
            console.log("Valid User!");
        }
        else{
            console.log("Invalid User!");
        }
    }
    return checkValidation;
}

const c1 = loginValidation();
c1("Yashika", "Yashi@123");