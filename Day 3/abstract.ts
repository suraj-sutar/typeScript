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

abstract class Cars {
  wheel() {
    return `4 wheeler`;
  }

  checkAC() {
    return `AC is available`;
  }

  callFacilty() {
    return `Call Facility supported`;
  }

  //declaration
  abstract price(): number;

  abstract color(): string;

  abstract totalSeats(): number;
}

class Hundai extends Cars {
  //implementation
  price(): number {
    return 1000000;
  }
  color(): string {
    return "Gray";
  }
  totalSeats(): number {
    return 5;
  }
}
class Toyota extends Cars {
  price(): number {
    return 50000;
  }
  color(): string {
    return "white";
  }
  totalSeats(): number {
    return 8;
  }
}

var objToyota = new Toyota();
console.log(objToyota.color());

var objHundai = new Hundai();
console.log(objHundai.totalSeats());
