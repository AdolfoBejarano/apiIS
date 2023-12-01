let fs = require('fs');
let https = require('https');
let axios = require('axios');
let file = fs.createWriteStream('file.json');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://famous-quotes4.p.rapidapi.com/random?category=all&count=1',
  headers: { 
    'X-RapidAPI-Key': '443c1212admshcd8b8cf31932797p136430jsn3a168fe964c1', 
    'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
  }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
  file.write(JSON.stringify(response.data));
})

.catch((error) => {console.log(error);});