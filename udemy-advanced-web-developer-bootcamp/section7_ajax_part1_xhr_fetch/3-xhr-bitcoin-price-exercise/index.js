var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const button = document.querySelector('#btn');
const price = document.querySelector('#price');
const time = document.querySelector('#time');
const currency = 'EUR';

// listen for clicks
button.addEventListener('click', function () {
  const XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function () {
    if (XHR.readyState === 4 && XHR.status === 200) {
      const response = JSON.parse(XHR.responseText);

      price.innerText = `${response.bpi[currency].rate_float} ${response.bpi[currency].code}`;
      time.innerText = response.time.updated;
    }
  };

  XHR.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
  XHR.send();
});
