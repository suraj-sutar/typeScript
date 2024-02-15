// variable are store and retirve the data in our application
//we use a variable as container

var x: number = 10; //store
console.log(x); //retirve

// then convert typescript code into javascript code
//use tsc command : tsc file_name
//to run: node file_name

var s1: string = "you are the creater of your destiny";
var s2: string = "Powerful people come from powerful places";
console.log(s1);
console.log(s2);

var b1: boolean = true;
var b2: boolean = false;
var b3: boolean;

console.log(b1);
console.log(b2);

function test() {
  return (b3 = false);
  console.log(b3);
}
console.log(test());

//"any" data type: this data type is very powerful data type in typescript
// any represents a value of any data type
var s3: any = "Learn with us and job with us";

s3 = 10;
s3 = true;

console.log(s3);
