let request = require('request');
//AccBalRec = 5000;
//IsAccBalCur+CalcAccBalAddValue: auda

async function accBalance() 
{
var values =
[
["centercit","500000","9be9047d3222264adc927aa271cf7e88-913d0d0c-4341-4459-b44b-2efb130f83e5"]
];

var xa = values [0] [(2-2)];
var xb = values [0] [(2-1)];
var xc = values [0] [(2-0)];
console.log('xa:',xa);
console.log('xb:',xb);
console.log('xc:',xc);

request
(
'https://wyyxd.api.infobip.com/account/1/balance', 
{
    method: 'GET',
    headers: {
      'Authorization': `App ${xc}`,
      'Accept': 'application/json',
    },
},(error, response, body) =>
{
if (!error && response.statusCode === 200)
{ 

let data = JSON.parse(body);

let AccBalAdd = xb-data.balance;

console.log('AccBallRec:',xb);
console.log('AccBallCur:',data.balance);
console.log('AccBallAdd:',AccBalAdd);

} 
}
);

}
accBalance()