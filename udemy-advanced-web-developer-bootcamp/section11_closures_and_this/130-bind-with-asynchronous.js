const colt = {
  name: 'colt',
  sayHi: function () {
    setTimeout(function () {
      console.log('hi ' + this.name); // function in setTimeout is on the global object, so this here doesn't refer to cold
    }, 1000);
  },
};
colt.sayHi();

const elie = {
  name: 'elie',
  sayHi: function () {
    setTimeout(
      function () {
        console.log('hi ' + this.name); // function in setTimeout is on the global object, so this here doesn't refer to cold
      }.bind(this), // outside setTimeout, this refers to the most parent object, which is elie, so it binds eli to this inside the setTimeout
      1000
    );
  },
};
elie.sayHi();
