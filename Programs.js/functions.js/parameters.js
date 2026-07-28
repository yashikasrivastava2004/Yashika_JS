// 5. Write a function with a *default parameter* and *rest parameters* that sums numbers, adding a default bonus.

function defaultPara (c=10 ,...Nums){
    let sum =0;
    for(let i=0; i<Nums.length; i++){
        sum = sum + Nums[i];
    }
    return sum + c;
}
//here we are using the default bonus (c=10)
console.log(defaultPara(undefined,20,30)); // 10+20+30
//in this we are passing custum c(bonus)
//               bonus c=10|...Nums|
//                      | [     ]
console.log(defaultPara(50,20,30)); // 50+20+30
//no number passed , just default bonus
console.log(defaultPara());