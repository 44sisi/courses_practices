// built-in findIndex
let numbers = [1, 2, 3, 4, 5];
console.log(
  numbers.findIndex((element, index, array) => {
    return element === 3;
  })
);

// implement findIndex
function findIndex(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return i;
    }
  }
  return -1;
}

// should return 3
let arr = [5, 11, 13, 8, 6, 7];
console.log(
  findIndex(arr, (element, index, array) => {
    return element % 2 === 0;
  })
);

// should return -1
let langs = ['java', 'c++', 'python', 'ruby'];
console.log(
  findIndex(langs, (element, index, array) => {
    return element === 'javascript';
  })
);
