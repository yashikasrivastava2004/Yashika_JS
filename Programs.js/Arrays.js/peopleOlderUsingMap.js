// Given an array of objects with name and age, use filter() to get an array of names of people older than 18.

let obj = [
       {name : "Yashika", age: 54},
       {name : "Ritu"  , age : 43},
       {name : "Yashi", age : 14}
];
let olderThan = obj.map(person => {
    if(person.age> 18){
        return person.name;
    }
    else {
        return [];
        }
}).flat(); // Cleans up and removes any empty arrays!
console.log(olderThan);
