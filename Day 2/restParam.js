"use strict";
var product = function (...nums) {
    var result = 1;
    for (let index = 0; index < nums.length; index++) {
        console.log(nums[index]);
        result *= nums[index];
    }
    return result;
};
console.log(product(2, 3, 4, 5, 6));
