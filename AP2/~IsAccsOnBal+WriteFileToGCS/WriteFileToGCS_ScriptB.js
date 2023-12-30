let axios = require('axios');
let fs = require('fs').promises;
let atokenB = atokenA;
let fpathB = fpathA;
let fnameB = fnameA;
let bknameB = bknameA;
let contentsB = contentsA;

console.log('at@B:',atokenB);
console.log('fpath@B:',fpathB);
console.log('fnam@B:',fnameB);

function writefiletoPC() 
{
if (index > arrayL-2)
{
let datetime1 = new Date().getTime();
let datetime2 = datetime1+20000;//DELAY
while(datetime1<datetime2) {datetime1 = new Date().getTime();}

console.log('Going thru if!');

bknameB2 = bknameB;
fnameB2 = fnameB;
contentsB2 = contentsB;
let sharedC = require('./WriteFileToGCS_ScriptC.js');
console.log('FinalOutcomeFromC:',sharedC.writefiletoGCS());

}

else{return 'Going thru else';}
return 'File has been wrote to PC!';
}
module.exports = {writefiletoPC: writefiletoPC};