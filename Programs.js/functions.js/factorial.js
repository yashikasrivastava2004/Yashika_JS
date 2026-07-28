//USING FUNCTION EXPRESSION
let factorialOfNum = function(num){
    let fact =1;
    for(let i=num; i>=1; i--){
    fact *= i;
    }
    return fact;
}
console.log(factorialOfNum(5));