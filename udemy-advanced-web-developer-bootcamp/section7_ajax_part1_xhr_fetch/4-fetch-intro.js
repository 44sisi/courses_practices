const fetch = require('node-fetch');

fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data.bpi);
  });
