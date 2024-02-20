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

  abstract gps(): boolean;
}

class Hundai extends Cars {
  gps(): boolean {
    return true;
  }
  //implementation
  price(): number {
    return 1000000;
  }
  color(): string {
    return "White";
  }
  totalSeats(): number {
    return 5;
  }
}
class Toyota extends Cars {
  gps(): boolean {
    return false;
  }
  price(): number {
    return 900000;
  }
  color(): string {
    return "Gray";
  }
  totalSeats(): number {
    return 7;
  }
}

var objToyota = new Toyota();
console.log(`Toyata GPS: ${objToyota.gps()}`);
console.log(`Toyata Price: ${objToyota.price()}`);
console.log(`Toyata Color: ${objToyota.color()}`);
console.log(`Toyata Total Seats: ${objToyota.totalSeats()}`);

var objHundai = new Hundai();
console.log(`Hundai GPS:${objHundai.gps()}`);
console.log(`Hundai Price:${objHundai.price()}`);
console.log(`Hundai Color:${objHundai.color()}`);
console.log(`Hundai Total Seats:${objHundai.totalSeats()}`);
