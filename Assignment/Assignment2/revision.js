"use strict";
class Student {
    constructor(id, name, age, marks) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.marks = marks;
    }
    getdata() {
        console.log(`Id : ${this.id}, Name: ${this.name} , Age: ${this.age} , Marks: ${this.marks}`);
    }
}
const student1 = new Student(123, "suraj", 23, 98);
const student2 = new Student(456, "Pruthvi", 23, 99);
const arrayOfStud = [student1, student2];
for (const element of arrayOfStud) {
    element.getdata();
}
