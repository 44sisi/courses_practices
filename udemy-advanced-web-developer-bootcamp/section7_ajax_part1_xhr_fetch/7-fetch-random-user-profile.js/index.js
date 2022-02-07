const button = document.querySelector('#btn');
const avatar = document.querySelector('#avatar');
const fullName = document.querySelector('#fullname');
const userName = document.querySelector('#username');
const email = document.querySelector('#email');
const city = document.querySelector('#city');

button.addEventListener('click', displayNewProfile);

function displayNewProfile() {
  fetch('https://randomuser.me/api')
    .then(handleErrors)
    .then(parseJson)
    .then(updateProfile)
    .catch(printError);
}

function handleErrors(res) {
  if (!res.ok) {
    throw Error(res.status);
  }
  return res;
}

function parseJson(res) {
  return res.json().then((data) => data.results[0]);
}

function updateProfile(profile) {
  avatar.src = profile.picture.medium;
  fullName.innerText = profile.name.first + '' + profile.name.last;
  userName.innerText = profile.login.username;
  email.innerText = profile.email;
  city.innerText = profile.location.city;
}

function printError(error) {
  console.log(error);
}
