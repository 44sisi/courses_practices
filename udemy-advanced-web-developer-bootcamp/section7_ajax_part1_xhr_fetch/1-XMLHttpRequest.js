// ajax: asynchronous javascript and xml, xml is not popular now so it's more about asynchronous javascript
// existing tools: javascript, html, css, dom api, xmlhttprequests
// websites can send and request data in the background from a server without disturbing the current page -> single page apps

var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const XHR = new XMLHttpRequest();

XHR.onreadystatechange = function () {
  if (XHR.readyState === 4) {
    if (XHR.status === 200) {
      console.log(XHR.responseText);
    } else {
      console.log('There was a problem!');
    }
  }
};

XHR.open('GET', 'https://api.github.com/zen');
XHR.send();
