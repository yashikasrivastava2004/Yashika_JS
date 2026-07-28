//2. Create a function *multiply(...numbers)* that multiplies any number of arguments and returns the result.

function multiply(...numbers){
    let result = 1;
    for(let i=0; i<numbers.length; i++){
        result = result * numbers[i];
    }
    return result;
}

console.log(multiply(10,2,3));