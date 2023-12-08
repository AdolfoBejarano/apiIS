let request = require('request'); 

//IsAccBalCur+CalcAccBalAddValue: auda
let FilePath = 'C:/API/apiIS/ap/IStasks/~IsAccBal+CalcAccBalAddValue/results'
let AccName = 'auda';
let AccBalRec = 5000;
let options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
let today  = new Date();
let HH = String(today.getHours()).padStart(2, '0');
let MM = String(today.getMinutes()).padStart(2, '0');
let SS = String(today.getSeconds()).padStart(2, '0');
let HHMMSS = HH+''+MM+''+SS;

// my_task.airplane.ts
import airplane from "airplane";

export default airplane.task
(
//START ApTask configuration
  {
    slug: "isaccbal_auda_calcaccbaladdvalue",
    name: "isaccbal_auda_calcaccbaladdvalue",
    description: "This is my task defined entirely in TypeScript!",
  },

//START ApTask implementation
  async () => 
{

async function accBalance() 
{
//fetch('https://api.github.com/users')
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

let data = JSON.parse(body);
let FileName = `${(new Date().toJSON().slice(0,10))}.${HHMMSS}_IsAccBal-${AccName}.csv`
let fs = require('fs').promises;

async function openFile() {
  try {
    let csvHeaders = 'AccName,AccBalDate,AccBalRec,AccBalCur,AccBalAdd,Currency,FilePath,FileName'
	await fs.writeFile(`${FilePath}/${FileName}`, csvHeaders);
	} catch (error) {
    console.error(`Got an error trying to write to a file: ${error.message}`);
  }
}

async function addBalanceItem (AccName,AccBalDate,AccBalRec,AccBalCur,AccBalAdd,Currency,FilePath,FileName) {
  try {
    let csvLine = `\n${AccName},${today},${AccBalRec},${data.balance},${AccBalAdd},${data.currency},${FilePath},${FileName}`
	await fs.writeFile(`${FilePath}/${FileName}`, csvLine, { flag: 'a' });
	} catch (error) {
    console.error('Got an error trying to write to a file: ${error.message}');
  }
}

(
async function () {
  await openFile();
  await addBalanceItem (AccName,today,AccBalRec,data.balance,AccBalAdd,data.currency,FilePath,FileName);
    
})();

let AccBalAdd = AccBalRec-data.balance;
console.log('\n');
console.log('FilePath/Name       :', FilePath,'/',FileName);
console.log('AccBal-Currency     :', data);
console.log('AccName             :', AccName);
console.log('AccBalHHMMSS        :', HHMMSS); // 👉️ 195225
console.log('AccBalDate          :', today.toLocaleDateString("en-US"));
console.log('AccBalDateTime      :', today.toLocaleDateString("en-US", options));
console.log('AccBalance-Recurrent:', AccBalRec);
console.log('AccBalance-Current  :', data.balance);
console.log('AccBalance-ToBeAdded:', AccBalAdd);
console.log('AccCurrency         :', data.currency);

} 
}
);
}
accBalance()	

},
//END ApTask implementation

);
//END ApTask configuration