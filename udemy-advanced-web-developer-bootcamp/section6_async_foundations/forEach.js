// built-in forEach
const arr = [1, 2, 3, 4, 5];
arr.forEach((element) => {
  console.log(element * 2);
});

const strings = ['my', 'forEach', 'example'];
let result = '';
strings.forEach(function (element, index, array) {
  if (array.length - 1 !== index) {
    result += element + ' ';
  } else {
    result += element + '!!!';
  }
});
console.log(result);

result = '';
strings.forEach((element, index, array) => {
  if (array.length - 1 !== index) {
    result += element + ' ';
  } else {
    result += element + '!!!';
  }
});
console.log(result);

// implement forEach
function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

result = '';
forEach(strings, (element, index, array) => {
  if (array.length - 1 !== index) {
    result += element + ' ';
  } else {
    result += element + '!!!';
  }
});
console.log(result);
