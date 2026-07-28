function evenOrOdd(num){
    if(num%2 == 0){
        console.log("Number is Even", num);
    }
    else if(num%2 != 0) {
        console.log("Number is odd", num);
    }
    return num;
}

console.log(evenOrOdd(12));