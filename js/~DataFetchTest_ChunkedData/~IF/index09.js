var request = require('request');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://famous-quotes4.p.rapidapi.com/random?category=all&count=1',
  headers: { 
    'X-RapidAPI-Key': '443c1212admshcd8b8cf31932797p136430jsn3a168fe964c1', 
    'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
  }
};

request(config, function (error, response, body) {
  
  if (!error && response.statusCode == 200) {
    console.log(body)
	console.log(body.id)
	
	
	
	
  }
})