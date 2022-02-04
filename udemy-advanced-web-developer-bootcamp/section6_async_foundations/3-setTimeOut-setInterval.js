setTimeout(() => {
  console.log('Runs in approx. 2000ms');
}, 2000);

const timerId = setTimeout(() => {
  console.log('Runs in 30 sec');
}, 30000);
setTimeout(() => {
  console.log('Cancels the previous timeOut', timerId);
  clearTimeout(timerId);
}, 2000);

let num = 0;
const intervalId = setInterval(() => {
  num++;
  console.log('num: ', num);
  if (num === 3) {
    clearInterval(intervalId);
  }
}, 1000);
