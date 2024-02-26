"use strict";
//explicit types
let charecter;
let age;
let isLoggedIn;
// age = "suraj"; //it give me a error because the types of age is number
age = 20;
console.log(age);
//array
let ninjas = [];
// ninjas = [10, 20, 30]; //that is not allow because the type of array is string
// ninjas = ["kashi", "prayag"];
ninjas.push("chetan");
console.log(ninjas);
//union Types : the union type sis suing | this symbol like string | number
//mixed array means that contain string and number form of data
let studentDetails = [];
studentDetails.push("surajsutar");
studentDetails.push(22);
studentDetails.push(false);
console.log(studentDetails);
let uid;
uid = "suraj";
console.log(uid);
uid = 9922;
console.log(uid);
//Objects
let ninjaOne;
ninjaOne = {
    name: "suraj",
    age: 23,
};
ninjaOne = "kashinath";
ninjaOne = ["suraj", "sutar"];
