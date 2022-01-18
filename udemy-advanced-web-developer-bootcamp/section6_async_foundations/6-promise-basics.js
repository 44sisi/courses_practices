let p1 = new Promise(function (resolve, reject) {
  resolve([1, 2, 3, 4, 5]);
});
p1 = new Promise(function (resolve, reject) {
  reject('ERROR');
});
p1.then((data) => {
  console.log('Promise p1 resolved with data: ', data);
}).catch((data) => {
  console.log('Promise p1 was rejected with data: ', data);
});

const p2 = new Promise((resolve, reject) => {
  const num = Math.random();
  if (num < 0.5) {
    resolve(num);
  } else {
    reject(num);
  }
});
p2.then((data) => {
  console.log('Success: ', data);
}).catch((data) => {
  console.log('Error: ', data);
});

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomInt = Math.floor(Math.random() * 10);
    resolve(randomInt);
  }, 4000);
});
promise.then((data) => {
  console.log('Random int passed to resolve: ', data);
});
