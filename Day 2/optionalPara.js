"use strict";
// function addnum(a: number, b?: number) {
//   if (typeof b !== "undefined") {
//     return a + b;
//   }
// }
// console.log(addnum(1));
// optional parameters
function AddNum(num1, num2) {
    if (typeof num2 !== "undefined") {
        return num1 + num2;
    }
}
AddNum(1);
