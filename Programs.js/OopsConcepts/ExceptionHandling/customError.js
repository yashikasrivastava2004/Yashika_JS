function checkAge(age){
    if(age<0){
        throw new RangeError("Age can't be negative");
    }
    if(typeofage !== "number"){
        throw new TypeError ("Age must be a number");
    }
    return true;
}

try{
    checkAge("twenty");
}
catch(err){
    console.log("Error", err.name,"-", err.message);
}