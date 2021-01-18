/*
Intermediate Algorithm Scripting: Sum All Numbers in a Range
We'll pass you an array of two numbers. 
Return the sum of those two numbers plus the sum of all the numbers between them. 
The lowest number will not always come first.
*/

function sumAll(arr) {
  let copyArr = [...arr];
  copyArr.sort((a, b) => a - b);
  let result = 0;
  for (let x = copyArr[0]; x <= copyArr[1]; x++) {
    result += x;
  }
  return result;
}

console.log("challenge - Sum All Numbers in a Range");
console.log(sumAll([4, 1]));

/*
Intermediate Algorithm Scripting: Diff Two Arrays
Compare two arrays and return a new array with any items 
only found in one of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays
*/

function diffArray(arr1, arr2) {
  var newArr = [];
  arr1.forEach((x) => {
    if (arr2.indexOf(x) == -1) {
      newArr.push(x);
    }
  });
  arr2.forEach((x) => {
    if (arr1.indexOf(x) == -1) {
      newArr.push(x);
    }
  });
  return newArr;
}

console.log("challenge - Diff Two Arrays");
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

/*
Intermediate Algorithm Scripting: Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), 
followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.
*/

function destroyer(arr, ...num) {
  let numList = [...num];
  let arrCopy = [...arr];
  let result = arrCopy.filter((x) => numList.indexOf(x) == -1);
  return result;
}

console.log("challenge - Seek and Destroy");
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

/*
Intermediate Algorithm Scripting: Wherefore art thou
Make a function that looks through an array of objects (first argument) 
and returns an array of all objects that have matching name and value pairs (second argument). 
Each name and value pair of the source object has to be present in the object from the collection 
if it is to be included in the returned array.
*/

let collection = [
  { first: "Romeo", last: "Montague" },
  { first: "Mercutio", last: null },
  { first: "Tybalt", last: "Capulet" },
];

let source = { last: "Capulet" };

function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  collection.forEach((element) => {
    let flag = true;
    for (let property in source) {
      if (element[property] !== source[property]) {
        flag = false;
      }
    }
    if (flag) {
      arr.push(element);
    }
  });
  // Only change code above this line
  return arr;
}

function whatIsInANameFCC(collection, source) {
  var arr = [];
  var keys = Object.keys(source);
  collection.forEach(function (e) {
    if (
      keys.every(function (key) {
        return e[key] === source[key];
      })
    ) {
      arr.push(e);
    }
  });
  return arr;
}

console.log("challenge - Wherefore art thou");
console.log(whatIsInAName(collection, source));

/*
Intermediate Algorithm Scripting: Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

let str1 = [
  "This Is Spinal Tap",
  "thisIsSpinalTap",
  "The_Andy_Griffith_Show",
  "Teletubbies say Eh-oh",
  "AllThe-small Things",
];

function spinalCase(str) {
  let arr = str.match(/[A-Z]?[a-z]+/g);
  let result = arr.join("-").toLowerCase();
  return result;
}

function spinalCaseFCC(str) {
  str = str.replace(/([a-z](?=[A-Z]))/g, "$1 ");
  return str.toLowerCase().replace(/\ |\_/g, "-");
}

console.log("challenge - Spinal Tap Case");
str1.forEach((item) => console.log(`${item} =>`, spinalCase(item)));

/*
Intermediate Algorithm Scripting: Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:
- If a word begins with a consonant, take the first consonant or consonant cluster, 
  move it to the end of the word, and add "ay" to it.
- If a word begins with a vowel, just add "way" at the end.
Translate the provided string to Pig Latin. 
Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
  if (/[aeiou]/.test(str[0])) {
    return str.concat("way");
  } else {
    let pos = 0;
    for (let i = 1; i < str.length; i++) {
      if (!/[aeiou]/.test(str[i])) {
        pos = i;
      } else {
        break;
      }
    }
    return str.slice(pos + 1).concat(str.slice(0, pos + 1).concat("ay"));
  }
}

function translatePigLatinFCC(str) {
  if (isVowel(str.charAt(0))) return str + "way";
  var front = [];
  str = str.split("");
  while (str.length && !isVowel(str[0])) {
    front.push(str.shift());
  }
  return [].concat(str, front).join("") + "ay";
}

function isVowel(c) {
  return ["a", "e", "i", "o", "u"].indexOf(c.toLowerCase()) !== -1;
}

console.log("challenge - Pig Latin");
console.log(translatePigLatin("glove"));

/*
Intermediate Algorithm Scripting: Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
Preserve the case of the first character in the original word when you are replacing it. 
For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/

function myReplace(str, before, after) {
  if (before[0].toUpperCase() == before[0]) {
    after = after[0].toUpperCase() + after.slice(1);
  } else {
    after = after[0].toLowerCase() + after.slice(1);
  }
  let regex = new RegExp(before, "g");
  let result = str.replace(regex, after);
  return result;
}

let str2 = [
  ["Let us go to the store", "store", "mall"],
  ["He is Sleeping on the couch", "Sleeping", "sitting"],
  ["This has a spellngi error", "spellngi", "spelling"],
  ["His name is Tom", "Tom", "john"],
  ["Let us get back to more Coding", "Coding", "algorithms"],
];

console.log("challenge - Search and Replace");
str2.forEach((item) => console.log(`${item} =>`, myReplace(...item)));

/*
Intermediate Algorithm Scripting: DNA Pairing
The DNA strand is missing the pairing element. 
Take each character, get its pair, and return the results as a 2d array.
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
*/

function pairElement(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let pair;
    switch (str[i]) {
      case "A":
        pair = "T";
        break;
      case "T":
        pair = "A";
        break;
      case "C":
        pair = "G";
        break;
      case "G":
        pair = "C";
        break;
    }
    result.push([str[i], pair]);
  }
  return result;
}

var lookup = Object.create(null);
lookup.A = "T";
lookup.T = "A";
lookup.C = "G";
lookup.G = "C";

function pairElementFCC(str) {
  return str.split("").map(function (p) {
    return [p, lookup[p]];
  });
}

console.log("challenge - DNA Pairing");
console.log(pairElement("ATCGA"));

/*
Intermediate Algorithm Scripting: Missing letters
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let firstIndex = letters.indexOf(str[0]);
  let missingLetter;
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i + 1] != letters[i + 1 + firstIndex]) {
      missingLetter = letters[i + 1 + firstIndex];
      break;
    }
  }
  return missingLetter;
}

function fearNotLetterFCC(str) {
  for (var i = str.charCodeAt(0); i <= str.charCodeAt(str.length - 1); i++) {
    var letter = String.fromCharCode(i);
    if (str.indexOf(letter) === -1) {
      return letter;
    }
  }

  return undefined;
}

console.log("challenge - Missing letters");
console.log(fearNotLetter("abcdefghjklmno"));

/*
Intermediate Algorithm Scripting: Sorted Union
Write a function that takes two or more arrays and 
  returns a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, 
  but with no duplicates in the final array.
The unique numbers should be sorted by their original order, 
  but the final array should not be sorted in numerical order.
*/

function uniteUnique(...arrs) {
  let arrays = [...arrs];
  let uniqueValues = [];
  arrays.forEach(function (array) {
    array.forEach(function (element) {
      if (uniqueValues.indexOf(element) == -1) {
        uniqueValues.push(element);
      }
    });
  });
  return uniqueValues;
}

console.log("challenge - Sorted Union");
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

/*
Intermediate Algorithm Scripting: Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
in a string to their corresponding HTML entities.
*/

var MAP = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
};

function convertHTML(str) {
  return str.replace(/[&<>"']/g, function (c) {
    return MAP[c];
  });
}

console.log("challenge - Convert HTML Entities");
console.log(convertHTML("Dolce & Gabbana"));

/*
Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers
Given a positive integer num, 
return the sum of all odd Fibonacci numbers that are less than or equal to num.
*/

function sumFibs(num) {
  let sum = 1;
  let a = 0;
  let b = 1;
  while (a <= num && b <= num) {
    a += b;
    if (a <= num && a % 2 == 1) {
      sum += a;
    }
    b += a;
    if (b <= num && b % 2 == 1) {
      sum += b;
    }
  }
  return sum;
}

function sumFibsFCC(num) {
  var a = 1;
  var b = 1;
  var s = 0;
  while (a <= num) {
    if (a % 2 !== 0) {
      s += a;
    }
    a = [b, (b = b + a)][0];
  }
  return s;
}

console.log("challenge - Sum All Odd Fibonacci Numbers");
console.log(sumFibs(4000000));

/*
Intermediate Algorithm Scripting: Sum All Primes
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. 
For example, 2 is a prime number because it is only divisible by 1 and 2. 
In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/

function sumPrimes(num) {
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    prime = true;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        let prime = false;
        break;
      }
    }
    if (prime) {
      sum += i;
    }
  }
  return sum;
}

console.log("challenge - Sum All Primes");
console.log(sumPrimes(977));

/*
Intermediate Algorithm Scripting: Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
*/

function gcd(a, b) {
  while (b != 0) {
    a = [b, (b = a % b)][0];
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function smallestCommons(arr) {
  arr.sort((a, b) => a - b);
  let numbers = [];
  for (let i = arr[0]; i <= arr[1]; i++) {
    numbers.push(i);
  }
  return numbers.reduce(lcm);
}

console.log("challenge - Smallest Common Multiple");
console.log(smallestCommons([5, 1]));

/*
Intermediate Algorithm Scripting: Drop it
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) 
until the function func returns true when the iterated element is passed through it.
Then return the rest of the array once the condition is satisfied, 
otherwise, arr should be returned as an empty array.
*/

function dropElements(arr, func) {
  let result = [...arr];
  while (!func(result[0])) {
    result.shift();
  }
  return result;
}

console.log("challenge - Drop it");
console.log(
  dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
  })
);

/*
Intermediate Algorithm Scripting: Steamroller
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(steamrollArray(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log("challenge - Steamroller");
console.log(steamrollArray([1, [2], [3, [[4]]]]));

/*
Intermediate Algorithm Scripting: Binary Agents
Return an English translated sentence of the passed binary string.
The binary string will be space separated.
*/

function binaryAgent(str) {
  return str
    .split(" ")
    .map((x) => parseInt(x, 2))
    .map((x) => String.fromCharCode(x))
    .join("");
}

console.log("challenge - Binary Agents");
console.log(
  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  )
);

/*
Intermediate Algorithm Scripting: Everything Be True
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
In other words, you are given an array collection of objects. 
The predicate pre will be an object property and you need to return true if its value is truthy. 
Otherwise, return false.
*/

function truthCheck(collection, pre) {
  let result = true;
  collection.forEach((x) => {
    if (!x[pre]) {
      result = false;
    }
  });
  return result;
}

console.log("challenge - Everything Be True");
console.log(
  truthCheck(
    [
      { user: "Tinky-Winky", sex: "male" },
      { user: "Dipsy" },
      { user: "Laa-Laa", sex: "female" },
      { user: "Po", sex: "female" },
    ],
    "sex"
  )
);

/*
Intermediate Algorithm Scripting: Arguments Optional
Create a function that sums two arguments together. 
If only one argument is provided, then return a function that expects one argument and returns the sum.
For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
Calling this returned function with a single argument will then return the sum:
var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.
If either argument isn't a valid number, return undefined.
*/

function addTogether(...int) {
  let input = [...int];
  for (let i = 0; i < input.length; i++) {
    if (typeof input[i] != "number") {
      return undefined;
    }
  }
  if (input.length == 2) {
    return input[0] + input[1];
  } else if (input.length == 1) {
    return (x) => (typeof x == "number" ? x + input[0] : undefined);
  } else {
    return undefined;
  }
}

console.log("challenge - Arguments Optional");
console.log(addTogether(2, 2));

/*
Intermediate Algorithm Scripting: Make a Person
Fill in the object constructor with the following methods below:
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
*/

var Person = function (firstAndLast) {
  var firstName, lastName;

  function updateName(str) {
    firstName = str.split(" ")[0];
    lastName = str.split(" ")[1];
  }

  updateName(firstAndLast);

  this.getFirstName = function () {
    return firstName;
  };

  this.getLastName = function () {
    return lastName;
  };

  this.getFullName = function () {
    return firstName + " " + lastName;
  };

  this.setFirstName = function (str) {
    firstName = str;
  };

  this.setLastName = function (str) {
    lastName = str;
  };

  this.setFullName = function (str) {
    updateName(str);
  };
};

var bob = new Person("Bob Ross");

console.log("challenge - Make a Person");
console.log(bob.getFullName());
console.log(Object.keys(bob).length);

/*
Intermediate Algorithm Scripting: Map the Debris
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
The values should be rounded to the nearest whole number. The body being orbited is Earth.
The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
*/

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var TAU = 2 * Math.PI;
  return arr.map(function (obj) {
    return {
      name: obj.name,
      orbitalPeriod: Math.round(
        TAU * Math.sqrt(Math.pow(obj.avgAlt + earthRadius, 3) / GM)
      ),
    };
  });
}

console.log("challenge - Map the Debris");
console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
