const student = new Object();
student.name = "Yashika";
student.age = 34;
student.gender = "Female";
student.course = "SDET";

// // const student = {};
// for(const i in student){
// console.log([` ${i}:  ${student[i]}`]);
// }

// const studentArray = [
//   ["name", "Yashika"],
//   ["age", 34],
//   ["gender", "Female"],
//   ["course", "SDET"]
// ];

// // 2. Convert the array-> into an object
// const studentObj = Object.entries(studentArray);

// console.log(studentObj);
// const studentObj2 = Object.fromEntries(studentObj);
//  console.log(studentObj2);


// for(const i : studentArray)=> {}


//2 ques : update
student.name = "ritu";
console.log(student);

// 3 ques : delete 
// delete student.name ;
// console.log(student);
// let statement = false;
// Object.hasOwn(student,"name")? console.log("Name exists in student: ",statement): console.log("Name does not exist",statement);

//4ques :  count no. of keys
let count =0;
for(const key in student){
    count++;
}
    console.log(count);

//5 Ques: check if given key exists in student using in
console.log("key exists: ","name" in student); // in is a operator to check


//6 ques: clone an obj using spread operator
const students = { name: "Yashika", age: 34, gender: "Female", course: "SDET" };
const clonedStudent = {...students};
console.log("clonedOBJ: ",clonedStudent); 

// 7 ques : clone using Object.assign()
//  Obj.assign -> is a static method that copies all the properties from sourse obj to target obj
const target1 = {b: 3, c:3};
const source = {a:1, b:2};
// const target = Object.assign(source);
const target = Object.assign(target1, source);
console.log(target);


//9 ques : print all the values of the object
// Object.values(student) returns: ["Yashika", 34, "Female", "SDET"]
Object.values(student).forEach(value => {
  console.log(value);
});


// 10 ques : merge two objects with overlapping keys using assign and destructuring
const newStudent = {...target1 , ...source, c:500}; // setting c's value here 
console.log(newStudent);


//11 ques: Freeze object and test modification
// Object.freeze(student);
// student.name = "Yashika";
// console.log(student);  // giving error: TypeError: Cannot add property name, object is not extensible

// 12 ques: Seal object and test property addition
// Object.seal(student);
// // student.batch = 2022; // this cant be possible but we can update existed property
// student.age = 22; // existing property
// console.log(student);

//13 ques: Extract properties using destructuring
// const tester = {name : "Riya", role: "QA"};
// const {name, role} = tester;
// console.log("testers: ", name, role);


//Use default values in destructuring
const tester = {name : "Riya", role: "QA"};
tester.name = "Yashika";
const {name, role, gender = "Female"} = tester;
console.log("testers: ", name, role, gender);


//Rename variables during destructuring
const tester = {name : "Riya", role: "QA"};
tester.name = "Yashika";
const {name, role} = tester;
console.log("testers: ", name, role);

//






