/*
ES6: Compare Scopes of the var and let Keywords
Fix the code so that i declared in the if statement is a separate variable than i declared in the first line of the function.
*/

function checkScope() {
  "use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

checkScope();

/*
ES6: Create Strings using Template Literals
Use template literal syntax with backticks to display each entry of the result object's failure array. 
Each entry should be wrapped inside an li element with the class attribute text-warning, and listed within the resultDisplayArray.
Desired output:
    [
    '<li class="text-warning">no-var</li>',
    '<li class="text-warning">var-on-top</li>',
    '<li class="text-warning">linebreak</li>'
    ]
*/

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"],
};
function makeList(arr) {
  "use strict";

  // Only change code below this line
  const resultDisplayArray = [];
  for (let i = 0; i < arr.length; i++) {
    let text = `<li class="text-warning">${arr[i]}</li>`;
    resultDisplayArray.push(text);
  }
  // Only change code above this line

  return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);

/*
ES6: Use getters and setters to Control Access to an Object
Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.
Now create a getter and a setter in the class, to obtain the temperature in Celsius.
Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit, and C is the value of the same temperature in Celsius.
*/

// Only change code below this line
class Thermostat {
  constructor(ftemp) {
    this._ftemprature = ftemp;
  }

  get temperature() {
    return ((this._ftemprature - 32) * 5) / 9;
  }

  set temperature(ctemp) {
    this._ftemprature = (ctemp * 9) / 5 + 32;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
