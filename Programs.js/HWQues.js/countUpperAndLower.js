import PromptSync from "prompt-sync";
const prompt = PromptSync();

let str = prompt("Enter the string: ");
let upper = 0;
let lower =0 ;
let char ;
for(let i=0; i<str.length; i++){
    let char = str[i].charCodeAt(0);// charCodeAt converts the character int ASCII value

    //USING A TO Z 
    // if(str[i]>='A' && str[i]<='Z'){
    //     upper++;
    // }
    // else if (str[i]>='a' && str[i]<='z'){
    //     lower++;
    // }

    //USING ASCII VALUE
    if(char>=65 && char<=90){
        upper++;
    }
    else if(char>=97 && char<=122){
        lower++;
    }

}
console.log(upper);
console.log(lower);