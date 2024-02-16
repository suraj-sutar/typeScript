let inputArr: number[] = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
let uniqueArr: number[] = [];
console.log(`Original Array: ${inputArr}`);

for (const element of inputArr) {
  if (uniqueArr.indexOf(element) == -1) {
    //-1 == -1
    uniqueArr.push(element);
  }
}
console.log(`After Removing Duplicate Value : ${uniqueArr}`);
