import promptSync from 'prompt-sync';
const prompt = promptSync();

let input_name=prompt("enter the name: ");
// let input = 'Yashika';
let count_const =0;
let count_vowel =0;

for(let i=0; i<input_name.length; i++){

    let ch=input_name[i];
    if (ch === ' ') continue
    if( ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u' ||
    ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U'){
    count_vowel++;
}
else{
    count_const++;
}
}

console.log("Vowels: " + count_vowel);
console.log("Consonants: " + count_const);