// import PromptSync from "prompt-sync";
// const prompt = PromptSync();

// let str = prompt("Enter the string: ");
// let reverseStr = " ";
// if(str){ 
    // for(let i = str.length-1; i >= 0; i-- ){
        //     reverseStr += str[i];
        // }
        // }
        // console.log("Original String: ", str);
        // console.log("Reversed String: ", reverseStr);
        
        
        // //inbuild function 
        // let str = "Yashika Srivastava";
        // str.reverse();
        // console.log(str);
        
        // using for of loop
        let str = "MY name is Yashika";
        let rev = "";
        for (let ch of str ){
            rev = ch + rev;
        }
        
        console.log(rev);

