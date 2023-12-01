let request = require('request');
//AccBalRec = 5000;
//IsAccBalCur+CalcAccBalAddValue: auda

async function accBalance()
{
var values =
[
["centercit","500000","9be9047d3222264adc927aa271cf7e88-913d0d0c-4341-4459-b44b-2efb130f83e5"],
["hisweb","10000","f86c2f95a9c4289fb19499d9636b59ff-443cf089-2d67-4793-91fb-40efcfb57e8e"]
];

for (var i = 0; i < values.length; i++) 
{
for(var j = 0; j < values[i].length; j++)

var xc = values [i] [(j-1)];
let xa = values [i] [(j-2)];
let xb = values [i] [(j-2)];
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

let data = JSON.parse(body);

let AccBalAdd = AccBalRec-data.balance;

console.log('AccBallRec:',xb);
console.log('AccBallCur:',data.balance);
console.log('AccBallAdd:',AccBalAdd);

} 
}
);

}




}
accBalance()