let request = require('request');

async function accBalance() 
{
let values =
[
["centercit ","500000","9be9047d3222264adc927aa271cf7e88-913d0d0c-4341-4459-b44b-2efb130f83e5"],
["hisweb    ","10000","f86c2f95a9c4289fb19499d9636b59ff-443cf089-2d67-4793-91fb-40efcfb57e8e"],
["tgrp      ","3000","14194def9d7947aac69b29e3a689c865-1530de3e-37d2-46b8-94a7-21b619e431ac"],
];

for (let i = 0; i < values.length; i++) 
{
for(let j = 0; j < values[i].length; j++)
//var xa = values [i] [(2-2)];
//var xb = values [i] [(2-1)];
var xc = values [i] [(2-0)];

request
(
'https://wyyxd.api.infobip.com/account/1/balance', 
{
    method: 'GET',
    headers: 
{
      'Authorization': `App ${xc}`,
      'Accept': 'application/json',
},
},
(error, response, body) =>
{
if (!error && response.statusCode === 200)
{ 
let data = JSON.parse(body);
//***//
let fs = require('fs').promises;

async function openFile() {
  try {
    let csvHeaders = 'xa,xb,xd'
    await fs.writeFile('qresp.csv', csvHeaders);
  } catch (error) {
    console.error(`Got an error trying to write to a file: ${error.message}`);
  }
}
async function addRespItem(xa,xb,xd)
{
//let xd = (values [i] [(2-1)])-data.balance;	
  try {
    let csvLine = `\n${values [i] [(2-2)]},${values [i] [(2-1)]}, ${data.balance}`
    await fs.writeFile('qresp.csv', csvLine, { flag: 'a' });
  } catch (error) {
    console.error(`Got an error trying to write to a file: ${error.message}`);
  }
}

(
async function ()
{
  await openFile();
  await addRespItem((values [i] [(2-2)]),(values [i] [(2-1)]),data.balance);
}
)
();
//***//

//console.log('AccBalAdd-',(values [i] [(2-2)]),':',(values [i] [(2-1)]),'-',(data.balance),'=',(values [i] [(2-1)])-data.balance);
} 
}
);
}
}
accBalance()