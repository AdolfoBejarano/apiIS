//FetchIsAccBalCur+CalcAccBalAddValue+Delay+WriteFileCSV: AccsAllOn
let request = require('request'); 

let FilePath = 'C:/API/apiIS/js/~ForLoop+Delay+WriteFileCSV/results'
let options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
let today  = new Date();
let HH = String(today.getHours()).padStart(2, '0');
let MM = String(today.getMinutes()).padStart(2, '0');
let SS = String(today.getSeconds()).padStart(2, '0');
let HHMMSS = HH+''+MM+''+SS;
let values =
[
['centercit',500000,'9be9047d3222264adc927aa271cf7e88-913d0d0c-4341-4459-b44b-2efb130f83e5'],
['hisweb',10000,'f86c2f95a9c4289fb19499d9636b59ff-443cf089-2d67-4793-91fb-40efcfb57e8e'],
['tgrp',3000,'14194def9d7947aac69b29e3a689c865-1530de3e-37d2-46b8-94a7-21b619e431ac'],
];
let isaccsonBal = values.slice();

async function accBalance() 
{

for(let i = 0; i < values.length; i++)
{
for(let j = 0; j < values[i].length; j++)

var xa = values [i] [(2-2)];
var xb = values [i] [(2-1)];
var xc = values [i] [(2-0)];
let xd = xb+1;
//isaccsonBal.push(xd);

let datetime1 = new Date().getTime();
let datetime2 = datetime1+1000;//DELAY
while(datetime1<datetime2) {datetime1 = new Date().getTime();}

}
}
accBalance()

console.log('IsAccsOnBal:',{isaccsonBal});