let request = require('request');
AccBalRec = 5000;

//IsAccBalCur+CalcAccBalAddValue: auda

async function accBalance() 
{

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

let data = JSON.parse(body);

let AccBalAdd = AccBalRec-data.balance;

console.log('AccBallRec:',AccBalRec);
console.log('AccBallCur:',data.balance);
console.log('AccBallAdd:',AccBalAdd);

} 
}
);

}
accBalance()