// A7 :-Find duplicate elements
let arr =[10,20,20,30,40,50];
function duplicate (arr){
    for(let i=0; i<arr.length; i++){
        let count =1;
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] == arr[j]){
                count ++;
            }
        }
        if(count>1){
            console.log(arr[i],count);
        }
    }
}
duplicate(arr);