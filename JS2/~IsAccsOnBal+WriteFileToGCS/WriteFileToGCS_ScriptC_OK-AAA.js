let bucketName = bknameB2;
let destFileName = fnameB2;
let contents = (JSON.stringify(contentsB2));
let {Storage} = require('@google-cloud/storage');

function writefiletoGCS() 
{
let storage = new Storage();
async function uploadFromMemory() 
{
  await storage.bucket(bucketName).file(destFileName).save(contents);

  console.log(
    `${destFileName} with contents ${contents} uploaded to ${bucketName}.`
  );
}
uploadFromMemory().catch(console.error);
return 'File has been wrote to GCS!!!';
}
module.exports ={writefiletoGCS: writefiletoGCS};