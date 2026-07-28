// Create a closure-based counter that remembers how many times it was called.
function outer (){
    let count = 0;

    function inner (){
        count ++;
        return count ;
    }
    return inner;
}

const tempClosure = outer();
console.log(tempClosure());
console.log(tempClosure());
console.log(tempClosure());
console.log(tempClosure());




//callback
// function display(){
//     console.log("Helloo");
// }

// function myFxn (callback){
//     console.log("execution of callback");
// }

// myFxn(display());