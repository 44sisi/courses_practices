/*
Basic Algorithm Scripting: Reverse a String
Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
*/

function reverseString(str) {
  let arr = str.split("");
  arr.reverse();
  return arr.join("");
}

console.log("challenge - Reverse a String");
console.log(reverseString("hello"));

/*
Basic Algorithm Scripting: Factorialize a Number
Return the factorial of the provided integer.
*/

function factorialize(num) {
  if (num == 0) {
    return 1;
  } else {
    return num * factorialize(num - 1);
  }
}

console.log("challenge - Factorialize a Number");
console.log(factorialize(5));

/*
Basic Algorithm Scripting: Find the Longest Word in a String
Return the length of the longest word in the provided sentence.
Your response should be a number.
*/

function findLongestWordLength(str) {
  let arr = str.match(/\w+/g);
  let len = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > len) {
      len = arr[i].length;
    }
  }
  return len;
}

console.log(
  "challenge - Factorialize a NumberFind the Longest Word in a String"
);
console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);

/*
Basic Algorithm Scripting: Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array. 
*/
function largestOfFour(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(Math.max(...arr[i]));
  }
  return newArr;
}

console.log("challenge - Return Largest Numbers in Arrays");
console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

/*
Basic Algorithm Scripting: Confirm the Ending
Check if a string (first argument, str) ends with the given target string (second argument, target).
*/
function confirmEnding(str, target) {
  let regex = new RegExp(target + "$");
  return regex.test(str);
}

console.log("challenge - Confirm the Ending");
console.log(confirmEnding("Abstraction", "tion"));

/*
Basic Algorithm Scripting: Repeat a String Repeat a String
Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number.
*/

function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return "";
  } else if (num == 1) {
    return str;
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}

console.log("challenge - Repeat a String Repeat a String");
console.log(repeatStringNumTimes("abc", 3));

/*
Basic Algorithm Scripting: Truncate a String
Truncate a string (first argument) 
if it is longer than the given maximum string length (second argument). 
Return the truncated string with a ... ending.
*/

function truncateString(str, num) {
  return str.length > num ? str.substring(0, num) + "..." : str;
}

console.log("challenge - Truncate a String");
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

/*
Basic Algorithm Scripting: Finders Keepers
Create a function that looks through an array (first argument) and 
returns the first element in the array that passes a truth test (second argument). 
If no element passes the test, return undefined.
*/

function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      num = arr[i];
      return num;
    }
  }
}

console.log("challenge - Finders Keepers");
console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));
console.log(
  findElement([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
  })
); // 8
console.log(
  findElement([1, 3, 5, 9], function (num) {
    return num % 2 === 0;
  })
); // undefined

/*
Basic Algorithm Scripting: Boo who
Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.
*/

function booWho(bool) {
  return typeof bool == "boolean";
}

console.log("challenge - Boo who");
console.log(booWho(null));

/*
Basic Algorithm Scripting: Title Case a Sentence
Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] =
      words[i].slice(0, 1).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  str = words.join(" ");
  return str;
}

console.log("challenge - Title Case a Sentence");
console.log(titleCase("I'm a little tea pot"));

/*
Basic Algorithm Scripting: Slice and Splice
You are given two arrays and an index.
Use the array methods slice and splice 
to copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs.
*/

function frankenSplice(arr1, arr2, n) {
  let result = arr2.slice(); // make a copyof arr2 without changing arr2 later
  for (let i = 0; i < arr1.length; i++) {
    result.splice(n + i, 0, arr1[i]);
  }
  return result;
}

console.log("challenge - Slice and Splice");
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

/*
Basic Algorithm Scripting: Falsy Bouncer
Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Hint: Try converting each value to a Boolean.
*/

function bouncer(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log("challenge - Falsy Bouncer");
console.log(bouncer([7, "ate", "", false, 9]));

/*
Basic Algorithm Scripting: Where do I Belong
Return the lowest index 
at which a value (second argument) should be inserted into an array (first argument) 
once it has been sorted. The returned value should be a number.
E.g., getIndexToIns([20,3,5], 19) should return 2 
because once the array has been sorted it will look like [3,5,20] 
and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/

function getIndexToIns(arr, num) {
  arr.sort(function (a, b) {
    return a - b;
  });
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (num <= arr[i]) {
      return i;
    }
  }
  return arr.length;
}

console.log("challenge - Where do I Belong");
console.log(getIndexToIns([5, 3, 20, 3], 5));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));

/*
Basic Algorithm Scripting: Mutations
Return true if the string in the first element of the array 
contains all of the letters of the string in the second element of the array.
["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/

function mutation(arr) {
  let str1 = arr[0].toLowerCase();
  let str2 = arr[1].toLowerCase();
  for (let i = 0; i < str2.length; i++) {
    if (str1.indexOf(str2[i]) == -1) {
      return false;
    }
  }
  return true;
}

console.log("challenge - Mutations");
console.log(mutation(["hello", "hey"]));

/*
Basic Algorithm Scripting: Chunky Monkey
Write a function that splits an array (first argument) 
into groups the length of size (second argument) 
and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  let result = [];
  while (arr.length > size) {
    result.push(arr.splice(0, size));
  }
  result.push(arr);
  return result;
}

console.log("challenge - Chunky Monkey");
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
