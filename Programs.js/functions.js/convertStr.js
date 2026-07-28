function convertString (str){
    let arr = str.split(",");
    
    let first = arr[0];
    let middle = arr[1]
    let last = arr[2].replace("$", " ");
    return last + "," + middle + ",$" + first;
}
let str = "a,b,$c";
console.log(convertString(str));