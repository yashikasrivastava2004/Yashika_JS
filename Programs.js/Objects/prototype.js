//
const student = new Object();
student.name = "Yashika";
student.age = 34;
student.gender = "Female";
student.course = "SDET";

for(const key in student ){
    console.log([`${key} : ${student[key]}`]);
}

//adding property
student.fingers = 10;
console.log(student);

//delete
delete(student.fingers);
console.log(student);

//No. of keys
let count =0;
for(const key in student){
    count ++;
    student[key] = count;
}
console.log(count);

//chcek if a given key exists
let isFound = false;
if(student.name = "yashika"){
    isFound = true;
}
console.log(isFound);

