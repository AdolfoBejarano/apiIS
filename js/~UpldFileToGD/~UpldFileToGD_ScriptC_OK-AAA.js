let axios = require('axios');
let atokenC = atokenB2;
let fpathC  = fpathB2;
let fnameC  = fnameB2;

function uploadfiletoGD() 
{
let FormData = require('form-data');
let fs = require('fs');
let data = new FormData();
data.append('metadata', fs.createReadStream(`${fpathC}/metadata.json`));
data.append('', fs.createReadStream(`${fpathC}/${fnameC}`));
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart',
  headers: { 
    'Content-type': 'application/json', 
    'Authorization': `Bearer ${atokenC}`,
    ...data.getHeaders()
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
return 'File has been uploaded to GD!!!';
}

module.exports ={uploadfiletoGD: uploadfiletoGD};