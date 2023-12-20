let axios = require('axios');
let fs = require('fs').promises;
let atokenB = atokenA;
let fpathB = fpathA;
let fnameB = fnameA;
console.log('at@B:',atokenB);
console.log('fpath@B:',fpathB);
console.log('fnam@B:',fnameB);

function writefiletoPC() 
{
if (index > arrayL-2)
{
let datetime1 = new Date().getTime();
let datetime2 = datetime1+5000;//DELAY
while(datetime1<datetime2) {datetime1 = new Date().getTime();}

async function openFile()
{
  try {
    let csvHeaders = 'itemName'
    await fs.writeFile(`${fnameB}`, csvHeaders);
} catch (error)
{console.error(`Got an error trying to write to a file: ${error.message}`);}

console.log('Going thru if!');

atokenB2 = atokenB;
fpathB2  = fpathB;
fnameB2  = fnameB;
let sharedC = require('./UpldFileToGD_ScriptC_OK-AAA.js');
console.log(sharedC.uploadfiletoGD());

}
async function addFileItem(itemName)
{
try{let csvLine = `\n${itemName}`
await fs.writeFile(`${fpathB}/${fnameB}`, csvLine, { flag: 'a' });}
catch (error) {console.error(`Got an error trying to write to a file: ${error.message}`);}
}
(async function () {await openFile();await addFileItem(`${content}`);})();
}
else{return 'Going thru else';}
return 'File has been wrote to PC!';
}
module.exports = {writefiletoPC: writefiletoPC};