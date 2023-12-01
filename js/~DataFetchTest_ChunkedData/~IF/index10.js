var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://api.whatdoestrumpthink.com/api/v1/quotes/random", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));