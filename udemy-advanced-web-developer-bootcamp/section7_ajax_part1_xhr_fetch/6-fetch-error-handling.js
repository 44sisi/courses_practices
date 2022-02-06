const fetch = require('node-fetch');

const url = 'https://api.github.com/users/colt';

fetch(url)
  .then(handleResponse)
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e);
  });

function handleResponse(res) {
  if (!res.ok) {
    throw Error(res.status);
  }
  return res.json();
}
