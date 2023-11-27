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
console.log(data);

const fs = require('fs').promises;

async function openFile() {
  try {
    const csvHeaders = 'balance,currency'
    await fs.writeFile('balance.csv', csvHeaders);
  } catch (error) {
    console.error(`Got an error trying to write to a file: ${error.message}`);
  }
}

async function addBalanceItem(balance, currency) {
  try {
    const csvLine = `\n${balance},${currency}`
    await fs.writeFile('balance.csv', csvLine, { flag: 'a' });
  } catch (error) {
    console.error(`Got an error trying to write to a file: ${error.message}`);
  }
}

(async function () {
  await openFile();
  await addBalanceItem(data.balance, data.currency);
})();

//let bal = data.balance;
let accbalrec = 5000;
let accbaladd = accbalrec-data.balance;

console.log(accbalrec);
console.log(data.balance);
console.log(accbaladd);

} 
}
);
}
accBalance()