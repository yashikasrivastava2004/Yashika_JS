export function charFreq (str){
    for(let i=0 ; i<str.length; i++){
        let count =0;
        for(let j=0; j<str.length; j++){
        if(str[i]==str[j]){
            count++;
        }
    }
    console.log(`${str[i]} : ${count} `);
}
}
// charFreq("function");


export function removeVowels (str){
    let upper = str.toUpperCase();
    let res ='';
    for(let i=0; i<str.length; i++){
        if(upper[i]=='A' || upper[i]=='E' || upper[i]=='I' || upper[i]=='O' || upper[i]=='O'){
            continue;
        }
        else{
            res = res + upper[i];
        }
        // console.log(`removed vowels string will be : ${upper}`);
    }
    console.log(res);
}
// removeVowels("Vowels");


// function charFreq(str) {
//     let sorted = str.split('').sort();
//     let count = 1;

//     for (let i = 0; i < sorted.length; i++) {
//         // If the next character is the same, increment the count
//         if (sorted[i] === sorted[i + 1]) {
//             count++;
//         } else {
//             // Print when the character changes, then reset count
//             console.log(`'${sorted[i]}': ${count}`);
//             count = 1;
//         }
//     }
// }

// charFreq("hello");