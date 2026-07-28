let str = "My name is Yashika";

let temp_arr = str.split(" ");
let longest = temp_arr[0];
for(let i=0; i<temp_arr.length; i++ ){
    if(temp_arr[i].length > longest.length){
        longest = temp_arr[i];
    }

}
console.log(longest);