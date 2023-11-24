let request = require('request'); 
// sample.cjs
//import * as fs from 'fs';
//const { methodName } = require("fs");

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

// Node.js program to demonstrate 
// the fs.readFile() method 
  
// Include fs module 
let fs = require('fs'); 
  
// Use fs.readFile() method to read the file 
fs.readFile("api-response.json", "utf8", function(err, data){ 
if (err) throw err;      
    // Display the file content 
    //console.log(data); 
}
);
console.log('readFile called');

//let array =JSON.parse(data);

} 
}
);
}
accBalance()