// another Way
function calCulation(num1: number, num2: number, num3: number) {
  var avg = (num1 + num2 + num3) / 3;

  if (avg <= 70) {
    return `C Grade (${avg})`;
  } else if (avg > 70 && avg < 90) {
    return `B Grade (${avg})`;
  } else {
    return `A Grade (${avg})`;
  }
}
var math: number = Number(prompt("Enter Math Marks"));
var physics: number = Number(prompt("Enter Physics Marks"));
var chem: number = Number(prompt("Enter chemistry Marks"));

console.log(`Math Marks:${math}`);
console.log(`Physics Marks:${physics}`);
console.log(`Chemistry Marks:${chem}`);

console.log(`Average : ${calCulation(math, physics, chem)}`);
