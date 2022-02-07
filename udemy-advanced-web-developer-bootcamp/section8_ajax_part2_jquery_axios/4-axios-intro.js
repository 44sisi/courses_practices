const axios = require('axios');

const url = 'https://opentdb.com/api.php?amount=1';

axios
  .get(url)
  .then((res) => {
    console.log(res.data.results[0]);
  })
  .catch((error) => {
    console.log(error);
  });
