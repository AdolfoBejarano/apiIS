//FetchIsAccBalCur+CalcAccBalAddValue+Delay+WriteFileCSV: AccsAllOn
let request = require('request'); 

let FilePath = 'C:/API/apiIS/js/~ForLoop+Delay+WriteFileCSV/results'
let options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
let today  = new Date();
let HH = String(today.getHours()).padStart(2, '0');
let MM = String(today.getMinutes()).padStart(2, '0');
let SS = String(today.getSeconds()).padStart(2, '0');
let HHMMSS = HH+''+MM+''+SS;

async function accBalance() 
{
let values =
[
["sucas     ","15000","a38b0157c30c7268221d2042ae45fcc6-df6a2774-fa87-4ec4-a639-d4f04cdf0c2d"],
["supal     ","14600","64f2a80c79adee83a5f889264aad6550-181644be-f511-4361-9cec-b1564e0e7f2a"],
["tonla     ","3500","295bbd113b32dd341389b8eae61e097b-29477370-4555-4814-8330-550ef05ed0fe"],
];

for(let i = 0; i < values.length; i++)
{
for(let j = 0; j < values[i].length; j++)

var xa = values [i] [(2-2)];
var xb = values [i] [(2-1)];
var xc = values [i] [(2-0)];

request
(
'https://wyyxd.api.infobip.com/account/1/balance',{method: 'GET',headers: {'Authorization': `App ${xc}`,'Accept': 'application/json',},},
(error, response, body) =>
{
if (!error && response.statusCode === 200)
{
let data = JSON.parse(body);
//let datetime1 = new Date().getTime();
//let datetime2 = datetime1+100;//DELAY
//while(datetime1<datetime2) {datetime1 = new Date().getTime();}
console.log('AccBalAdd-',(values [i] [(2-2)]),':',(values [i] [(2-1)]),'-',data.balance,'=',(values [i] [(2-1)])-data.balance);
} 
}
);


}
}
accBalance()