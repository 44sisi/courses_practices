const promise = new Promise((resolve, reject) => {
  resolve(5);
});
promise
  .then((data) => {
    return data + 2;
  })
  .then((data) => {
    return data + 2;
  })
  .then((data) => {
    console.log(data);
  });

let counter = 0;
function incCounter() {
  counter++;
  console.log('Counter: ', counter);
}
function runLater(callback, timeInMs) {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = callback();
      resolve(res);
    }, timeInMs);
  });
  return p;
}
runLater(incCounter, 1000)
  .then(() => runLater(incCounter, 2000))
  .then(() => runLater(incCounter, 3000))
  .then(); // this final then is not necessary
