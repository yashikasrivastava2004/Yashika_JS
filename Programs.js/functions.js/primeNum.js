//USING ARROW FUNCTION
const primeNumber = num =>{
    let isPrime = true;
    for (let i =2; i<=(num/2); i++){
        if(num%i ==0){
            isPrime = false;
        }
    }
    if(isPrime){
        console.log("No. is prime");
    }
    else{
        console.log("num is not prime");
    }
    return num;
}
console.log(primeNumber(11));
