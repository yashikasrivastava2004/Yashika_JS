function cacheCalculation(){
    let cache ={};

    function calculate(num){
        if(cache[num]){
            console.log("Results from cache");
            return cache[num];
        }

        console.log("calculating...");
        let result = num*num;
        cache[num] = result;
        return result;
    }
    return calculate;
}

const demo = cacheCalculation();

console.log(demo(5));
console.log(demo(5));
console.log(demo(10));
console.log(demo(10));

