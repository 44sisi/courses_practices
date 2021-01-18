/*
Basic JavaScript: Record Collection
You are given a JSON object representing a part of your musical album collection. Each album has several properties and a unique id number as its key. Not all albums have complete information.
Write a function which takes an album's id (like 2548), a property prop (like "artist" or "tracks"), and a value (like "Addicted to Love") to modify the data in this collection.
If prop isn't "tracks" and value isn't empty (""), update or set the value for that record album's property.
Your function must always return the entire collection object.
There are several rules for handling incomplete data:
If prop is "tracks" but the album doesn't have a "tracks" property, create an empty array before adding the new value to the album's corresponding property.
If prop is "tracks" and value isn't empty (""), push the value onto the end of the album's existing tracks array.
If value is empty (""), delete the given prop property from the album.
*/

// Setup
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    album: "ABBA Gold",
  },
};

// Only change code below this line
function updateRecords(id, prop, value) {
  if (value == "") {
    delete collection[id][prop];
  } else if (prop == "tracks") {
    if (!collection[id].hasOwnProperty(prop)) {
      collection[id][prop] = [];
    }
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }

  return collection;
}

updateRecords(5439, "artist", "ABBA");
updateRecords(2468, "tracks", "Free");

/*
Basic JavaScript: Profile Lookup
We have an array of objects representing different people in our contacts lists.
A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.
The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
If both are true, then return the "value" of that property.
If name does not correspond to any contacts then return "No such contact".
If prop does not correspond to any valid properties of a contact found to match name then return "No such property".
*/

// Setup
var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

// Only change code below this line
function lookUpProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i]["firstName"] == name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

lookUpProfile("Kristian", "lastName");
lookUpProfile("Sherlock", "likes");
lookUpProfile("Harry", "likes");
lookUpProfile("Bob", "number");
lookUpProfile("Akira", "address");

/*
Basic JavaScript: Use Recursion to Create a CountdownPassed
The function should use recursion to return an array containing the integers n through 1 based on the n parameter.
*/

// Only change code below this line
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    var countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}

countdown(10);

/*
Basic JavaScript: Use Recursion to Create a Range of Numbers
The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. 
The starting number will always be less than or equal to the ending number. 
Your function must use recursion by calling itself and not use loops of any kind. 
It should also work for cases where both startNum and endNum are the same.
*/

// Only change code below this line
function rangeOfNumbers(startNum, endNum) {
  if (startNum == endNum) {
    return [startNum];
  } else {
    var countArray = rangeOfNumbers(startNum, endNum - 1);
    countArray.push(endNum);
    return countArray;
  }
}

rangeOfNumbers(6, 9);
rangeOfNumbers(4, 4);
