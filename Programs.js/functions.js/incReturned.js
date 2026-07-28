// 4. Write a function *makeCounter()* that returns a function which increments and returns a counter each time it is called.

function makeCounter(){
    let counter =0;
    function inner(){
        counter++;
        return counter;
    }
    return inner;
}
const inc = makeCounter();

console.log(inc());
console.log(inc());
console.log(inc());
console.log(inc());

