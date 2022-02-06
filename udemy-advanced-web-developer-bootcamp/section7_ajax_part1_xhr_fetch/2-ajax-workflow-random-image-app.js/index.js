var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const btn = document.querySelector('#btn');
const image = document.querySelector('#photo');

// listen for clicks
btn.addEventListener('click', function () {
  const XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function () {
    if (XHR.readyState === 4 && XHR.status === 200) {
      const url = JSON.parse(XHR.responseText).message;
      image.src = url;
    }
  };

  XHR.open('GET', 'https://dog.ceo/api/breeds/image/random');
  XHR.send();
});
