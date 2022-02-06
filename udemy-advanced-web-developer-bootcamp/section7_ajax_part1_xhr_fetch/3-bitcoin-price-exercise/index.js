const button = document.querySelector('#btn');
const price = document.querySelector('#price');
const time = document.querySelector('#time');

// listen for clicks
button.addEventListener('click', function () {
  const XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function () {
    if (XHR.readyState === 4 && XHR.status === 200) {
      const response = JSON.parse(XHR.responseText);

      price.innerHTML = `${response.bpi.USD.rate_float} ${response.bpi.USD.code}`;
      time.innerHTML = response.time.updated;
    }
  };

  XHR.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
  XHR.send();
});
