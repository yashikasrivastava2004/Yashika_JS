// let str = "Yashika";
// //pattern printing -> 1 loop to control rows and 2nd one to control columns
// for(let i =0; i<str.length; i++){
//     let temp ="";
//     for(let j=0; j<=i; j++){
//         temp = temp + str[j];
//     }
//     console.log(temp);
// }

// 12345
// 12345
// 12345

// for(let row=0; row<3; row++){
//     let pattern ="";
//     for(let col =1 ; col<=5; col++){
//         pattern = pattern +col; // 12345
//     }
//     console.log(pattern);
// }

//
// 1
// 12
// 123

for(let i=0; i<=3; i++){
    let pattern =" ";
    for(let j=1; j<=i; j++){
        pattern = pattern + j;
    }
    console.log(pattern);
}
