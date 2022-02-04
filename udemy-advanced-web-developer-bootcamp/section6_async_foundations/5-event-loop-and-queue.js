function square(n) {
  return n * n;
}

setTimeout(() => {
  console.log('Callback was placed on the queue'); // only get from the queue when stack is empty, after console.log(square(2)) is executed
}, 0); // even though this call back funciton is set to be run after 0 seconds, 0 means it will be placed in the queue 0 secons from now

console.log(square(2));
