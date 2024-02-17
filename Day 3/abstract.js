"use strict";
// Abstract method:
// abstract method are those method
//abstract class can have non abstract and abstract method also
// you can add a abstract method in only abstract class
//you cannot create a instance of an abstract class
// abstract class ABC {
//   abstract test(): number; //Abstract method without or without declaration
//   //non abstract method
//   display() {
//     console.log("asdfksghfb");
//   }
// }
class Cars {
    wheel() {
        return `4 wheeler`;
    }
    checkAC() {
        return `AC is available`;
    }
    callFacilty() {
        return `Call Facility supported`;
    }
}
class Hundai extends Cars {
    //implementation
    price() {
        return 1000000;
    }
    color() {
        return "Gray";
    }
    totalSeats() {
        return 5;
    }
}
class Toyota extends Cars {
    price() {
        return 50000;
    }
    color() {
        return "white";
    }
    totalSeats() {
        return 8;
    }
}
var objToyota = new Toyota();
console.log(objToyota.color());
var objHundai = new Hundai();
console.log(objHundai.totalSeats());
