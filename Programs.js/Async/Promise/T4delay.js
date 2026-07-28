// // Implement a delayed addition function that returns a Promise adding two numbers after 3 seconds. Await its result and print it.
// function delayPromise(a,b,c){
//     return new Promise((resolve,reject) =>{

//         setTimeout(()=>{
//         let add = a+b+c;
//         resolve(add);
//     },3000);
//     });
// }

// async function addNumbers(){
//     try{
//         console.log("calculating...");

//         let result = await delayPromise(10,20,30);

//         console.log("Sum:",result );
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// addNumbers();





function addition(a,b,c){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let add = a+b+c;
            resolve(add);
        },3000);
    });
}

async function addRes(){
    try{
    console.log("Calculating.....");
    let res = await addition(10,10,20);
    console.log(res);
    }
    catch(error){
        console.log(error);
    }

}
addRes();