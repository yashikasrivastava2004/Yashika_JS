// A9 :-Find missing number from 1 to N

//inbuild
let arr = [1, 2, 3, 5];

function missingNumber(arr) {

    let n = arr.length + 1;

    for (let i = 1; i <= n; i++) {

        if (!arr.includes(i)) {
            return i;
        }
    }
}

console.log(missingNumber(arr));