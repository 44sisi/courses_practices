/*
Regular Expressions: Match All Letters and Numbers
Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.
Compare the difference between the 2 expressions below.
*/

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegex = /\w/g; // Change this line
let result1 = quoteSample.match(alphabetRegex);

let alphabetRegexV2 = /\w+/g;
let result2 = quoteSample.match(alphabetRegexV2);

/*
Regular Expressions: Restrict Possible Usernames
You need to check all the usernames in a database. 
1) Usernames can only use alpha-numeric characters.
2) The only numbers in the username have to be at the end. 
   There can be zero or more of them at the end. Username cannot start with the number.
3) Username letters can be lowercase and uppercase.
4) Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
*/

let username = [
  "JACK",
  "J",
  "Jo",
  "Oceans11",
  "RegexGuru",
  "007",
  "9",
  "A1",
  "BadUs3rnam3",
  "Z97",
  "c57bT3",
];

let userCheck = /^[a-zA-Z][0-9][0-9]+$|^[a-zA-Z][a-zA-Z]+[0-9]*$/; // Change this line
// from fcc solution
// const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;

console.log("Output for Restrict Possible Usernames");
for (i = 0; i < username.length; i++) {
  let result = userCheck.test(username[i]);
  console.log(username[i], result);
}

/*
Regular Expressions: Positive and Negative Lookahead
Use lookaheads in the pwRegex to match passwords that are 
greater than 5 characters long, 
do not begin with numbers, a
nd have two consecutive digits.
*/

let sampleWord = [
  "astronaut",
  "banan1",
  "bana12",
  "abc123",
  "1234",
  "8pass99",
  "12abcde",
  "astr1on11aut",
];

// from fcc solution
let pwRegex = /^\D(?=\w{5,})(?=\w*\d{2})/;
// if use /^\D(?=\w{6,})(?=\w*\d{2})/, "bana12" and "abc123" will be unmatched
// if use /^\D(?=\w{5})(?=\w*\d{2})/, result is the same
// is use /^\D(?=\w{5,})(?=\w*\d{2,})/, result is the same
// if use /^\D(?=\w{5,})(?=\D*\d{2})/, "astr1on11aut" will not be matched

console.log("Output for Positive and Negative Lookahead");
for (i = 0; i < sampleWord.length; i++) {
  let result = pwRegex.test(sampleWord[i]);
  console.log(sampleWord[i], result);
}

/*
Regular Expressions: Check For Mixed Grouping of Characters
Fix the regex so that it checks for 
the names of Franklin Roosevelt or Eleanor Roosevelt 
in a case sensitive manner and 
it should make concessions for middle names.
*/

let myString = [
  "Franklin D. Roosevelt",
  "Eleanor Roosevelt",
  "Franklin Rosevelt",
  "Frank Roosevelt",
  "EleanorRoosevelt",
  "Eleanor test Roosevelt",
];

let myRegex = /^(Franklin |Eleanor )([a-zA-Z]+\.? )*Roosevelt$/; // Change this line
// if use, /^(Franklin\s|Eleanor\s)([a-zA-Z]+\.?\s)*Roosevelt$/, result is the same
// from fcc solution
// let myRegex = /(Franklin|Eleanor).*Roosevelt/;

console.log("Output for Check For Mixed Grouping of Characters");
for (i = 0; i < myString.length; i++) {
  let result = myRegex.test(myString[i]);
  console.log(myString[i], result);
}

/*
Regular Expressions: Reuse Patterns Using Capture Groups
Use capture groups in reRegex to match numbers 
that are repeated only three times in a string, 
each separated by a space.
*/

let repeatNum = [
  "42 42 42",
  "100 100 100",
  "42 42 42 42",
  "42 42",
  "101 102 103",
  "1 2 3",
  "10 10 10",
];

// fcc solution
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
//if use /(\d+)\s\1\s\1/, "42 42 42 42" will also be matched

console.log("Output for Check For Reuse Patterns Using Capture Groups");
for (i = 0; i < repeatNum.length; i++) {
  let result = reRegex.test(repeatNum[i]);
  console.log(repeatNum[i], result);
}

/*
Regular Expressions: Remove Whitespace from Start and End
Write a regex and use the appropriate string methods 
to remove whitespace at the beginning and end of strings.
*/

let hello = "   Hello, World!   ";
let wsRegex = /^(\s+)(.*?)(\s+)$/; // Change this
// if use /^(\s+)(.*)(\s+)$/, will be "Hellow, World! ", as the second capture group does a greedy search
// fcc solution
// let wsRegex = /^(\s+)(.+[^\s])(\s+)$/;

let result = hello.replace(wsRegex, "$2"); // Change this line
console.log(`${result}checkspace`);
// result should be "Hello, World!"
// so should print "Hello, World!checkspace"
