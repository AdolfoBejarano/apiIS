var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://famous-quotes4.p.rapidapi.com/random?category=all&count=1',
  'headers': {
    'X-RapidAPI-Key': '443c1212admshcd8b8cf31932797p136430jsn3a168fe964c1',
    'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});