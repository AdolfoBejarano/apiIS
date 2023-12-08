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
let values =
[
["supal     ","14600","64f2a80c79adee83a5f889264aad6550-181644be-f511-4361-9cec-b1564e0e7f2a"],
["colmtv-f  ","14000","cc535e34f2549d372c742e14a3d65de7-d1daf668-b3ca-489e-9ba0-0de93dc4f6a7"]
];

for(let i = 0; i < values.length; i++)
{
for(let j = 0; j < values[i].length; j++)

var xa = values [i] [(2-2)];
var xb = values [i] [(2-1)];
var xc = values [i] [(2-0)];

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
console.log('AccBalAdd-',(values [i] [(2-2)]),':',(values [i] [(2-1)]),'-',data.balance,'=',(values [i] [(2-1)])-data.balance);

let FileName = `${(new Date().toJSON().slice(0,10))}.${HHMMSS}_IsAccBal-IsAcssOn.csv`
let fs = require('fs').promises;

async function openFile() {
  try {
    let csvHeaders = 'AccName,AccBalDate,AccBalRec,AccBalCur,AccBalAdd,Currency,FilePath,FileName'
	await fs.writeFile(`${FilePath}/${FileName}`, csvHeaders);
	} catch (error) {
    console.error(`Got an error trying to write to a file: ${error.message}`);
  }
}
async function addBalanceItem (AccName,AccBalDate,AccBalRec,AccBalCur,AccBalAdd,Currency,FilePath,FileName)
{
let xd = (values [i] [(2-1)])-data.balance;	
  try {
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
  await addBalanceItem ((values [i] [(2-2)]),today,(values [i] [(2-1)]),data.balance,(values [i] [(2-1)])-data.balance,data.currency,FilePath,FileName);
}
)
();

/****let AccBalAdd = xb-data.balance;
console.log('\n');
console.log('FilePath/Name       :', FilePath,'/',FileName);
console.log('AccBal-Currency     :', data);
console.log('AccName             :', (values [i] [(2-2)]));
console.log('AccBalHHMMSS        :', HHMMSS); // 👉️ 195225
console.log('AccBalDate          :', today.toLocaleDateString("en-US"));
console.log('AccBalDateTime      :', today.toLocaleDateString("en-US", options));
console.log('AccBalance-Recurrent:', (values [i] [(2-1)]));
console.log('AccBalance-Current  :', data.balance);
console.log('AccBalance-ToBeAdded:', ((values [i] [(2-1)])-data.balance));
console.log('AccCurrency         :', data.currency);
******/

} 
}
);
}
}
accBalance()