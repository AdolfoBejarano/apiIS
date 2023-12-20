let axios = require('axios');
let filePath = 'C:/API/FilesToUpload/';
let fileName = 'FileTest02.csv';
let fs = require('fs').promises;
function writefiletoPC() 
{
if (index > arrayL-2)
{
console.log('Going thru if!');
let datetime1 = new Date().getTime();
let datetime2 = datetime1+5000;//DELAY
while(datetime1<datetime2) {datetime1 = new Date().getTime();}
async function openFile()
{
  try {
    let csvHeaders = 'itemName'
    await fs.writeFile(`${fileName}`, csvHeaders);
} catch (error)
{console.error(`Got an error trying to write to a file: ${error.message}`);}
}
async function addFileItem(itemName)
{
try{let csvLine = `\n${itemName}`
await fs.writeFile(`${filePath}${fileName}`, csvLine, { flag: 'a' });}
catch (error) {console.error(`Got an error trying to write to a file: ${error.message}`);}
}
(async function () {await openFile();await addFileItem(`${content}`);})();

//console.log('File has been wrote to PC!');
//===>

}
else{return 'Going thru else';}

//let sharedC = require('./WriteFileToGD_ScriptC.js');
//console.log('FinalOutcome:',i,arrayL-2,sharedC.uploadfiletoGD());

//return 'Done like dinner, file has been wrote to PC!!!';
return '!!!';
}
//let sharedC = require('./WriteFileToGD_ScriptC.js');
//console.log('FinalOutcomeC:',sharedC.uploadfiletoGD());

module.exports = {writefiletoPC: writefiletoPC};