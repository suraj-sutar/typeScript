const character = "mario";

console.log(character);
const inputs = document.querySelectorAll("input");
console.log(inputs);

//the basix different between is typescript and javascript is
//typescript uses strict types and javascript does not

// let charecter: string = "suraj";

const circ = (dimeter: number) => {
  return dimeter * Math.PI;
};
console.log(circ(7.5));
