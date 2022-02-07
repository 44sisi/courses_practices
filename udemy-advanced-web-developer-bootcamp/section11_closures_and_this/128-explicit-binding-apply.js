function addNumbers(a, b, c, d) {
  return this.name + ' just calulated ' + (a + b + c + d);
}
const colt = {
  name: 'colt',
};
const elie = {
  name: 'elie',
};
console.log(addNumbers.call(colt, 1, 2, 3, 4)); // explicitly say context is colt with arguments
console.log(addNumbers.call(elie, 1, 2, 3, 4));

console.log(addNumbers.apply(colt, [1, 2, 3, 4]));

const nums = [1, 2, 3, 45];
console.log(Math.max(nums)); // NaN, Math.max() doesn't accept an array as input, but a list of comma separated arguments
console.log(Math.max(...nums)); // 45, spread the values out
console.log(Math.max.apply(this, nums)); // 45, or using apply which does the spreading too
