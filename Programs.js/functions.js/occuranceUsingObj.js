function Occurance (str){
    let countObj = {};
    // for(let i=0; i<str.length; i++){ 
    //     let res = str[i];  // for loop doesnt know that what elements are inside in your string
    //     countObj[res] = (countObj[res] || 0)+1;
    // }
    for(let char of str ){ // for...of :- designed to extract the actual data elements directly out of string or array
        countObj[char] = (countObj[char] || 0)+1;
    }
    return countObj;
}

console.log(Occurance("Yashika"));