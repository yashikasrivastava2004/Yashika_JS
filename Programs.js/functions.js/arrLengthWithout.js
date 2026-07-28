// array length without length method
function withoutLengthProperty(arr){
    let count =0;
    for(let elements of arr){
        count++;
    }
    return count;
}

console.log(withoutLengthProperty([12,11,13,14]));