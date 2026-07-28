// Write a function that generates the Fibonacci series up to n terms.
function fab (num){
    let series =[];
    let x= 0;
    let y=1;
    for(let i=0; i<num; i++){
        series.push(x);
        let next = x+y;
        x=y;
        y = next;
    }
    return series;
}
console.log(fab(10));