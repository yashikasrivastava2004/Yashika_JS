// Simulate a user login system where a Promise resolves if username and password match and rejects if not. Handle it using async/await

function userLogin(username, password){
    const credentials = new Promise((resolve, reject) => {
        if(username == "Yashi" && password == "Yashi123"){
            resolve("Credentils are correct: Logged In...");
        }
        else{
            reject("Incorrect credentials: Log in FAILED");
        }
    });
    return credentials;
}

async function checkCred(){
    try{
        const result = await userLogin("Yashi" , "Yashi123");
        console.log(result);
    }
    catch(error){
        console.log("Error: ", error);
    }
}

checkCred();
