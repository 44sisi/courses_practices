function addNumbers(a, b, c, d) {
  return this.name + ' just calulated ' + (a + b + c + d);
}
const colt = {
  name: 'colt',
};
const elie = {
  name: 'elie',
};

const coltCalc = addNumbers.bind(colt, 1, 2, 3, 4); // doesn't invoke immediately
console.log(coltCalc()); // invoke now

const elieCalc = addNumbers.bind(elie, 1, 2); // no need to know all arguments for this function
console.log(elieCalc(3, 4));  // invoke now with more arguments
