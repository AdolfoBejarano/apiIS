const fs = require('fs')
const https = require('https')
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://famous-quotes4.p.rapidapi.com/random?category=all&count=1',
  headers: { 
    'X-RapidAPI-Key': '443c1212admshcd8b8cf31932797p136430jsn3a168fe964c1', 
    'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
  }
};

var file = fs.createWriteStream('fileYYY.json')

axios.request(config)
.then
(
(response) => 
{
  console.log(JSON.stringify(response.data));

var result = []
'data', chunk => result.push(chunk)
file.write(JSON.stringify(Buffer.concat(result).toString())) // when all chunks are received concat, stringify and write it to the file

}
)

.catch((error) => {
  console.log(error);
});