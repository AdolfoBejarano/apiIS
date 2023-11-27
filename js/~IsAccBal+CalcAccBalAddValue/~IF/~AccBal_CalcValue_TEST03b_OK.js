const request = require('request'); 

//IsAccBalCur-auda
async function accBalance() 
{
//fetch('https://wyyxd.api.infobip.com/account/1/balance', {
request
(
'https://wyyxd.api.infobip.com/account/1/balance', 
{
    method: 'GET',
    headers: {
      'Authorization': 'App da7810b58fe70bbf8df333621bd57257-d71fb15a-b1a8-4267-a9dd-6b0ac5a39c6e',
      'Accept': 'application/json',
    },
},(error, response, body) =>
{
if (!error && response.statusCode === 200)
{ 
const data = JSON.parse(body);
console.log(data);

} 
}
);
}
accBalance()