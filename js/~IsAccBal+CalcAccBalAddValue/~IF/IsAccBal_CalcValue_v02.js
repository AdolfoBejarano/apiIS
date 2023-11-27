let request = require('request'); 

//IsAccBalCur-auda
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
console.log('\n');
console.log('AccBal-Currency     :', data);

let FileName = `${(new Date().toJSON().slice(0,10))}_IsAccBal-auda.csv`
console.log('FileName            :', FileName);
let fs = require('fs').promises;

async function openFile() {
  try {
    let csvHeaders = 'AccName,AccBalDate,AccBalRec,AccBalCur,AccBalAdd,Currency'
    //await fs.writeFile('results/${FileName}', csvHeaders);
	await fs.createWriteStream('results/${FileName}', csvHeaders);
  } catch (error) {
    console.error(`Got an error trying to write to a file: ${error.message}`);
  }
}

async function addBalanceItem(AccName,AccBalDate,AccBalRec,AccBalCur,AccBalAdd,Currency) {
  try {
    let csvLine = '\n${AccName},${AccBalDate},${AccBalRec},${AccBalCur},${AccBalAdd},${Currency}'
	//await fs.writeFile('results/${FileName}', csvLine, { flag: 'a' });
	await fs.createWriteStream('results/${FileName}', csvLine, { flag: 'a' });
  } catch (error) {
    console.error('Got an error trying to write to a file: ${error.message}');
  }
}

(async function () {
  await openFile();
  await addBalanceItem(AccName,today,AccBalRec,data.balance,AccBalAdd,data.currency);
})();

let AccName = 'auda';
let options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
let today  = new Date();
let AccBalRec = 5000;
let AccBalAdd = AccBalRec-data.balance;

console.log('AccName             :', AccName);
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