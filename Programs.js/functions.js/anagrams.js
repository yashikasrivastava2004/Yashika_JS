// Write a function to determine whether two strings are anagrams.

function isAnagram (str1, str2){
    let lowerStr1 = str1.toLowerCase();
    let lowerStr2 = str2.toLowerCase();

    if(lowerStr1.length != lowerStr2.length){
        return false;
    }

    let sortStr1 = lowerStr1.split('').sort().join('');
    let sortStr2 = lowerStr2.split('').sort().join('');

    return sortStr1 == sortStr2;
}

console.log(isAnagram("listen","silent")); //true
console.log(isAnagram("hello","welcome")); //false



//WITHOUT METHOD
