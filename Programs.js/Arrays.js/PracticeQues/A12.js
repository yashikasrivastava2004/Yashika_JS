// A12:-Find common elements in two arrays
//normal
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];

function commonElements(arr1, arr2) {

    for (let i = 0; i < arr1.length; i++) {

        for (let j = 0; j < arr2.length; j++) {

            if (arr1[i] === arr2[j]) {
                console.log(arr1[i]);
            }
        }
    }
}

commonElements(arr1, arr2);

//inbuild
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];

function commonElements(arr1, arr2) {

    for (let i = 0; i < arr1.length; i++) {

        if (arr2.includes(arr1[i])) {
            console.log(arr1[i]);
        }
    }
}

commonElements(arr1, arr2);