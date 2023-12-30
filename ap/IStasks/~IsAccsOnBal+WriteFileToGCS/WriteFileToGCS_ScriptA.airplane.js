//FetchIsAccBalCur+CalcAccBalAddValue+Delay+WriteFileCSV: AccsAllOn
let fs = require("fs");
let axios = require('axios');
let request = require('request');
let optionsA = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
let today  = new Date();
let HH = String(today.getHours()).padStart(2, '0');
let MM = String(today.getMinutes()).padStart(2, '0');
let SS = String(today.getSeconds()).padStart(2, '0');
let HHMM = HH+''+MM;
let HHMMSS = HH+''+MM+''+SS;
let filePath = `C:/API/FilesToUpload`;
let fnameMD  = `metadata.json`;
let bucketName = 'iscccbalfiles';
let FileName = `${(new Date().toJSON().slice(0,10))}.${HHMMSS}_IsAccBalAllOnAccs.csv`;
let mData ={name: `${FileName}`,description: "IS Accs ON Balance: File uploading to GD",parents: ["1eRsxHCzE5H0TgyEEZBvUAU1DVPAji0t-"]};
let data = JSON.stringify(mData);

fs.writeFile(`${filePath}/${fnameMD}`, data, (error) =>{if (error) {console.error(error);throw error;}console.log("metadata.json written correctly");});

let values =
[

['\ncentercit',500000,'9be9047d3222264adc927aa271cf7e88-913d0d0c-4341-4459-b44b-2efb130f83e5'],
['\nhisweb',10000,'f86c2f95a9c4289fb19499d9636b59ff-443cf089-2d67-4793-91fb-40efcfb57e8e'],

['\ntgrp',3000,'14194def9d7947aac69b29e3a689c865-1530de3e-37d2-46b8-94a7-21b619e431ac'],
['\nauda',5000,'da7810b58fe70bbf8df333621bd57257-d71fb15a-b1a8-4267-a9dd-6b0ac5a39c6e'],

['\ncolmtv-f',14000,'cc535e34f2549d372c742e14a3d65de7-d1daf668-b3ca-489e-9ba0-0de93dc4f6a7'],
['\nfrelle',50000,'f4e005a7eaa1421d99370bd412c02b52-31b562bc-19dd-4498-904d-dc369fc76de0'],
['\njcgmas',10000,'dd134ffa3f36718b4e9813951e5c91b7-9baf2b72-ed3c-4a43-8300-3798bbf76e83'],

//['\nmillero',10000,'6b235563ee1d31cc5180951fd8c23e95-d29a8eb4-7152-4a86-8fec-9e4a694a354d'],
['\nsmtrc',10000,'95e9cd27e947440d2ab857dc780f606c-616cc214-1c09-4b11-9ba7-735d51209ce2'],

['\nsucas',15000,'a38b0157c30c7268221d2042ae45fcc6-df6a2774-fa87-4ec4-a639-d4f04cdf0c2d'],
['\nsupal',14600,'64f2a80c79adee83a5f889264aad6550-181644be-f511-4361-9cec-b1564e0e7f2a'],
['\ntonla',3500,'295bbd113b32dd341389b8eae61e097b-29477370-4555-4814-8330-550ef05ed0fe'],

['\ntrda',15000,'61da9fe19d7d8ba6bcbcf08cd9f71f0e-1cd48e34-68dc-4821-b414-7726e0760244'],
['\nvendty',60000,'7ab8f3790633c87017519cba390ccc08-f9a753e0-cb03-4f4e-a894-435b0a5d8a2c'],

];
let isaccsonBal = JSON.parse(JSON.stringify(values));

// My_Task.airplane.ts
import airplane from "airplane";
export default airplane.task
(
{
  slug: "isaccson_accbalfetch_writefiletogcs_v1",
  name: "isaccson_accbalfetch_writefiletogcs_v1",
  description: "This is my task defined entirely in JS!"
},

//START ApTask implementation
  async () => 
{

/*
var options = {
  'method': 'POST',
  'url': 'https://www.googleapis.com/oauth2/v4/token',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "client_id": "642359879068-gkkjc97ent0sbov5puf29fnoao9fcaft.apps.googleusercontent.com",
    "client_secret": "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",
    "refresh_token": "1//04LtVw8F66P4yCgYIARAAGAQSNwF-L9IruWqboWdVEUOemGNeGev2oXyHm-n8x46U9RnBt5100Q6N1SkaCtehEa3xmYT16dSPLMs",
    "grant_type": "refresh_token"
  })

};
request(options, function (error, response) 
{
  if (error) throw new Error(error);
  console.log(response.body);
  
let dataA = JSON.parse(response.body);
at = (dataA.access_token);
console.log('at:',at);

*/

for(let i = 0; i < values.length; i++)
{
var xa = values [i][0];
var xb = values [i][1];
var xc = values [i][2];
let data = '';
let config = {method: 'get',maxBodyLength: Infinity,url: 'https://wyyxd.api.infobip.com/account/1/balance',headers: {'Authorization': `App ${xc}`,'Accept': 'application/json'},data : data};
axios.request(config).then((response) =>
{
isoutputData = JSON.parse((JSON.stringify(response.data)));
isaccsonBal[i][1] = today;
isaccsonBal[i][2] = 'GCSbucket: '+bucketName;
isaccsonBal[i][3] = FileName;
isaccsonBal[i][4] = isoutputData.currency;
isaccsonBal[i][5] = values [i][1];
isaccsonBal[i][6] = (values [i][1])-isoutputData.balance;
isaccsonBal[i][7] = isoutputData.balance;

content = JSON.parse((JSON.stringify(isaccsonBal)));
console.log(isaccsonBal);

index = i;
arrayL = values.length;
isacc = values [i][0];
//atokenA = at;
fpathA = filePath;
fnameA = FileName;
bknameA = bucketName;
contentsA = isaccsonBal;
let sharedB = require('./WriteFileToGCS_ScriptB.js');
console.log('FinalOutcomeFromB:',sharedB.writefiletoPC());
}
)
.catch((error) => {console.log(error);});
}

//});

},
//END ApTask implementation

);
//END ApTask configuration