const person4 = {
  firstName: 'Colt',
  seyHi: function () {
    return 'Hi ' + this.firstName;
  },
  determineContext: function () {
    return this === person4;
  },
  dog: {
    seyHi: function () {
      return 'Hi ' + this.firstName;
    },
    determineContext: function () {
      return this === person4;
    },
  },
};
console.log('person4');
console.log(person4.seyHi()); // context is person4
console.log(person4.determineContext());
console.log(person4.dog.seyHi()); // context is dog, which is undefined
console.log(person4.dog.determineContext());
console.log(person4.dog.seyHi.call(person4)); // explicitly say context is person4, which is colt
console.log(person4.dog.determineContext.call(person4));

function addNumbers() {
  return 'Hi ' + this.name;
}
const colt = {
  name: 'colt',
};
const elie = {
  name: 'elie',
};
console.log(addNumbers.call(colt)); // explicitly say context is colt
console.log(addNumbers.call(elie));
