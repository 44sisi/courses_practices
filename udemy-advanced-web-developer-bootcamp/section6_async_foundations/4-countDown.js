function countDown(second) {
  const intervalId = setInterval(() => {
    second--;             // the first run will run after one interval
    if (second <= 0) {
      console.log('Ring Ring Ring!!!');
      clearInterval(intervalId);
    } else {
      console.log('Timer: ', second);
    }
  }, 1000);
}
countDown(5);
