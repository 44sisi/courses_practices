// the keyword this is defined when a function is invoked in an object declaration

const person1 = {
  firstName: 'Elie',
  seyHi: function () {
    return 'Hi ' + this.firstName;
  },
  determineContext: function () {
    return this === person1; // context is person2, so this is person2
  },
};
console.log('person1');
console.log(person1.seyHi());
console.log(person1.determineContext());

const person2 = {
  firstName: 'Elie',
  seyHi: () => 'Hi ' + this.firstName,
  determineContext: () => this === person2, // big arrow notation keeps the context, so the context is a global object, not person
};
console.log('person2');
console.log(person2.seyHi());
console.log(person2.determineContext());

const person3 = {
  firstName: 'Elie',
  determineContext: this,
};
console.log('person3');
console.log(person3.determineContext); // no function is invoked, so this is the global object

const person4 = {
  firstName: 'Colt',
  seyHi: function () {
    return 'Hi ' + this.firstName;
  },
  determineContext: function () {
    return this === person4; // context is person4
  },
  dog: {
    seyHi: function () {
      return 'Hi ' + this.firstName; // context is dog, which is undefined
    },
    determineContext: function () {
      return this === person4;
    },
  },
};
console.log('person4');
console.log(person4.seyHi());
console.log(person4.determineContext());
console.log(person4.dog.seyHi());
console.log(person4.dog.determineContext());
