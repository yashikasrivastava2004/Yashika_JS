let msg1 = "hello";
function msgs (){
    let msg2 = "Hi";
    console.log("Calling Global Variable inside the fxn : ",msg1);
    console.log("Calling the local Variable: ",msg2);
    return msg2;
}
console.log("Calling the Fxn's variable: ", msgs());
console.log("calling the Global Variable: " ,msg1); 
console.log("calling the local Variable outside the fxn : " ,msg2);