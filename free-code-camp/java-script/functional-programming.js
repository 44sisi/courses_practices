/*
Functional Programming: Refactor Global Variables Out of Functions
Rewrite the code so the global array bookList is not changed inside either function. 
The add function should add the given bookName 
to the end of the array passed to it and return a new array (list). 
The remove function should remove the given bookName from the array passed to it.
Note: Both functions should return an array, 
and any new parameters should be added before the bookName parameter.
*/

// The global variable
var bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

// Change code below this line
function add(bookList, bookName) {
  return [...bookList, bookName];
  // Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {
  var bookListCopy = [...bookList];
  var book_index = bookListCopy.indexOf(bookName);
  if (book_index >= 0) {
    bookListCopy.splice(book_index, 1);
  }
  return bookListCopy;
  // Change code above this line
}

var newBookList = add(bookList, "A Brief History of Time");
var newerBookList = remove(bookList, "On The Electrodynamics of Moving Bodies");
var newestBookList = remove(
  add(bookList, "A Brief History of Time"),
  "On The Electrodynamics of Moving Bodies"
);

console.log("challenge - Refactor Global Variables Out of Functions");
console.log(newBookList); // should have no chaneg from declared global variable

/*
Functional Programming: Use the map Method to Extract Data from an Array
The watchList array holds objects with information on several movies. 
Use map on watchList to assign a new array of objects 
with only title and rating keys to the ratings variable. 
The code in the editor currently uses a for loop to do this, 
so you should replace the loop functionality with your map expression.
*/

// The global variable
var watchList = [
  {
    Title: "Inception",
    Year: "2010",
    imdbRating: "7.1",
    Director: "Christopher Nolan",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    imdbRating: "9.0",
    Director: "Christopher Nolan",
  },
  {
    Title: "Avatar",
    Year: "2009",
    Director: "James Cameron",
    imdbRating: "7.9",
  },
];

// Only change code below this line

// for loop method
let ratings1 = [];

for (var i = 0; i < watchList.length; i++) {
  ratings1.push({
    title: watchList[i]["Title"],
    rating: watchList[i]["imdbRating"],
  });
}

// map with big arrow function
let ratings2 = watchList.map((movie) => ({
  title: movie["Title"],
  rating: movie["imdbRating"],
}));

// map with normal function
let ratings3 = watchList.map(function (movie) {
  return {
    title: movie["Title"],
    rating: movie["imdbRating"],
  };
});

console.log("challenge - Use the map Method to Extract Data from an Array");
console.log(ratings1, ratings2, ratings3);

/*
Functional Programming: Use the filter Method to Extract Data from an Array
The variable watchList can be found from the challenge above.
Use a combination of filter and map on watchList 
to assign a new array of objects with only title and rating keys. 
The new array should only include objects where imdbRating is greater than or equal to 8.0. 
*/

var filteredList = watchList
  .filter((movie) => movie["imdbRating"] >= 8.0)
  .map((movie) => ({
    title: movie["Title"],
    rating: movie["imdbRating"],
  }));

console.log("challenge - Use the filter Method to Extract Data from an Array");
console.log(filteredList);

/*
Functional Programming: Use the reduce Method to Analyze Data
The variable watchList holds an array of objects with information on several movies. 
Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan. 
Recall from prior challenges how to filter data and map over it to pull what you need.
*/

function getRating(watchList) {
  // Only change code below this line
  let filterList = watchList.filter(
    (movie) => movie["Director"] == "Christopher Nolan"
  );
  let sumRating = filterList.reduce(
    (sum, movie) => sum + parseFloat(movie["imdbRating"]),
    0
  );
  let averageRating = sumRating / filterList.length;
  // Only change code above this line
  return averageRating;
}

console.log("challenge - Use the reduce Method to Analyze Data");
console.log(getRating(watchList));

/*
Functional Programming: Implement map on a Prototype
Write your own Array.prototype.myMap(), 
which should behave exactly like Array.prototype.map(). 
You may use a for loop or the forEach method.
*/

// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
  var newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }
  // Only change code above this line
  return newArray;
};

var new_s = s.myMap(function (item) {
  return item * 2;
});

console.log("challenge - Implement map on a Prototype");
console.log(new_s);

/*
Functional Programming: Implement the filter Method on a Prototype
Write your own Array.prototype.myFilter(), 
which should behave exactly like Array.prototype.filter(). 
You may use a for loop or the Array.prototype.forEach() method.
*/

// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
  // Only change code below this line
  var newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      newArray.push(this[i]);
    }
  }
  // Only change code above this line
  return newArray;
};

var new_s = s.myFilter(function (item) {
  return item % 2 === 1;
});

console.log("challenge - Implement map on a Prototype");
console.log(new_s);

/*
Functional Programming: Sort an Array Alphabetically using the sort Method
Use the sort method in the alphabeticalOrder function to 
sort the elements of arr in alphabetical order.
*/

function alphabeticalOrder(arr) {
  // Only change code below this line
  return arr.sort((a, b) => (a === b ? 0 : a < b ? -1 : 1));
  // Only change code above this line
}

console.log("challenge - Sort an Array Alphabetically using the sort Method");
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

/*
Functional Programming: Split a String into an Array Using the split Method
Use the split method inside the splitify function to split str into an array of words. 
The function should return the array. Note that the words are not always separated by spaces, 
and the array should not contain punctuation.
*/

function splitify(str) {
  // Only change code below this line
  return str.split(/\W/);
  // Only change code above this line
}

console.log("challenge - Split a String into an Array Using the split Method");
console.log(splitify("Hello World,I-am code"));

/*
Functional Programming: Apply Functional Programming to Convert Strings to URL Slugs
Fill in the urlSlug function so it converts a string title 
and returns the hyphenated version for the URL. 
You can use any of the methods covered in this section, and don't use replace. 
Here are the requirements:
The input is a string with spaces and title-cased words
The output is a string with the spaces between words replaced by a hyphen (-)    
The output should be all lower-cased letters
The output should not have any spaces
*/

function urlSlug(title) {
  let titleArr = title.toLowerCase().split(/\W+/);
  let result = titleArr.filter((x) => x != "").join("-");
  return result;
}

function urlSlugFCC(title) {
  return title.trim().split(/\s+/).join("-").toLowerCase();
}

console.log(
  "challenge - Apply Functional Programming to Convert Strings to URL Slugs"
);
console.log(urlSlug(" Winter Is  Coming"));
