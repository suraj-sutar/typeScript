// another Way
function calCulation(num1, num2, num3) {
    var avg = (num1 + num2 + num3) / 3;
    if (avg <= 70) {
        return "C Grade (".concat(avg, ")");
    }
    else if (avg > 70 && avg < 90) {
        return "B Grade (".concat(avg, ")");
    }
    else {
        return "A Grade (".concat(avg, ")");
    }
}
var math = Number(prompt("Enter Math Marks"));
var physics = Number(prompt("Enter Physics Marks"));
var chem = Number(prompt("Enter chemistry Marks"));
console.log("Math Marks:".concat(math));
console.log("Physics Marks:".concat(physics));
console.log("Chemistry Marks:".concat(chem));
console.log("Average : ".concat(calCulation(math, physics, chem)));
