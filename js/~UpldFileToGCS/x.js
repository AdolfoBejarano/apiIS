/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
// The ID of your GCS bucket
// const bucketName = 'your-unique-bucket-name';

// The contents that you want to upload
// const contents = 'these are my contents';

// The new ID for your GCS file
// const destFileName = 'your-new-file-name';

// Imports the Google Cloud Node.js client library
const {Storage} = require('@google-cloud/storage');

// Creates a client
const storage = new Storage();

async function uploadFromMemory() {
  await storage.bucket(bucketName).file(destFileName).save(contents);

  console.log(
    `${destFileName} with contents ${contents} uploaded to ${bucketName}.`
  );
}

uploadFromMemory().catch(console.error);