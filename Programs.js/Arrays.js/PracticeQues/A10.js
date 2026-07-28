// A10 :-Merge two sorted arrays

let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];

function mergeArray(arr1, arr2) {

    let result = arr1.concat(arr2);

    result.sort((a, b) => a - b);

    return result;
}

console.log(mergeArray(arr1, arr2));