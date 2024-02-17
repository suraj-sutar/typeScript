"use strict";
//homogenous array
var courses = ["Angular", "React", "JavaScript"];
courses.push(".Net");
console.log(courses);
console.log(courses[0]);
console.log(courses.length);
// Heterogenous: to create it then use any data type for array
var coursediff = ["Angular", 123, true];
console.log(coursediff);
coursediff.push(10);
// for(let i = 0; i < coursediff.length; i++) {
//     console.log(coursediff[i]);
// }
// var [a, b , c,d,e] = coursediff;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// object destructure
var student = {
    firstName: "jack",
    lastName: "Sparrow",
    score: 90,
};
var { firstName, lastName, score } = student;
console.log(firstName);
console.log(lastName);
console.log(score);
