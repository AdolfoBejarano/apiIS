//import { parse } from 'json2csv';
//import fs from 'fs'
let fs = require('fs')
let request = require('request'); 

//IsAccBalCur+CalcAccBalAddValue: AccsAllOn

let FilePath = 'C:/API/apiIS/js/ForLoopWriteCsvFile/results'
let options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
let today  = new Date();
let HH = String(today.getHours()).padStart(2, '0');
let MM = String(today.getMinutes()).padStart(2, '0');
let SS = String(today.getSeconds()).padStart(2, '0');
let HHMMSS = HH+''+MM+''+SS;

async function accBalance() 
{
let entryValues =
[
["tonla     ","3500","295bbd113b32dd341389b8eae61e097b-29477370-4555-4814-8330-550ef05ed0fe"],
["trda      ","15000","61da9fe19d7d8ba6bcbcf08cd9f71f0e-1cd48e34-68dc-4821-b414-7726e0760244"],
["vendty    ","60000","7ab8f3790633c87017519cba390ccc08-f9a753e0-cb03-4f4e-a894-435b0a5d8a2c"],
];
for(let i = 0; i < entryValues.length; i++)
{
for(let j = 0; j < entryValues[i].length; j++)
var xa = entryValues [i] [(2-2)];
var xb = entryValues [i] [(2-1)];
var xc = entryValues [i] [(2-0)];

request
(
'https://wyyxd.api.infobip.com/account/1/balance', 
{
    method: 'GET',
    headers: {
      'Authorization': `App ${xc}`,
      'Accept': 'application/json',
    },
},
(error, response, body) =>
{
if (!error && response.statusCode === 200)
{ 
let data = JSON.parse(body);
console.log('AccBalAdd-',(entryValues [i] [(2-2)]),':',(entryValues [i] [(2-1)]),'-',data.balance,'=',(entryValues [i] [(2-1)])-data.balance);

let FileName = `${(new Date().toJSON().slice(0,10))}.${HHMMSS}_IsAccBal-IsAcssOn.csv`
let fs = require('fs').promises;

async function openFile() 
{
  try {
    let csvHeaders = 'AccName,AccBalDate,AccBalRec,AccBalCur,AccBalAdd,Currency,FilePath,FileName'
	await fs.writeFile(`${FilePath}/${FileName}`, csvHeaders);
	} catch (error) {
    console.error(`Got an error trying to write to a file: ${error.message}`);
  }
}
async function addBalanceItem (AccName,AccBalDate,AccBalRec,AccBalCur,AccBalAdd,Currency,FilePath,FileName)
{
  try {
let xd = (values [i] [(2-1)])-data.balance;
    let csvLine = `\n${values [i] [(2-2)]},${today},${values [i] [(2-1)]},${data.balance},${xd},${data.currency},${FilePath},${FileName}`
	
	await fs.writeFile(`${FilePath}/${FileName}`, csvLine, { flag: 'a' });
	} catch (error) {
    console.error('Got an error trying to write to a file: ${error.message}');
  }
}

(
async function ()
{
  await openFile();
  await addBalanceItem ((entryValues [i] [(2-2)]),today,(entryValues [i] [(2-1)]),data.balance,(entryValues [i] [(2-1)])-data.balance,data.currency,FilePath,FileName);
}
)
();

let AccBalAdd = xb-data.balance;
console.log('\n');
console.log('FilePath/Name       :', FilePath,'/',FileName);
console.log('AccBal-Currency     :', data);
console.log('AccName             :', (entryValues [i] [(2-2)]));
console.log('AccBalHHMMSS        :', HHMMSS); // 👉️ 195225
console.log('AccBalDate          :', today.toLocaleDateString("en-US"));
console.log('AccBalDateTime      :', today.toLocaleDateString("en-US", options));
console.log('AccBalance-Recurrent:', (entryValues [i] [(2-1)]));
console.log('AccBalance-Current  :', data.balance);
console.log('AccBalance-ToBeAdded:', ((entryValues [i] [(2-1)])-data.balance));
console.log('AccCurrency         :', data.currency);

} 
}
);
}
}
accBalance()