// Create a Promise that randomly resolves or rejects. Use try...catch with async/await to handle success and error.
function random (){
    return new Promise((resolve, reject) => {
        const randomVal = Math.random();
        if(randomVal < 0.5){
        resolve("promise successful");
        }
        else{
        reject("Promise rejected");
        }
    }); 
}

async function randomRes(){
    try{
        let res = await random();
        console.log(res);
    }
    catch(error){
        console.log("Error", error);
    }
}

randomRes();
