let accessToken = `ya29.a0AfB_byDnB4F4XKNJmIQVa-FL9kX_bq7Fsj8oJzIaBWqeaIMSY31CF9oqQAHlVOT2QHJBBKj2w2hpyJCP52mhEpsul0C9YXL5aXQvLXoYaZiFZFBV-ARhsavdC1oisOvzGnjfs1-zHhi9DrHCEmYEsGCB99Mzs15LT3mCkAaCgYKASASARESFQHGX2Mi6-vJC9jYrO2AbpJUSHEnHQ0173`;
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
let data = new FormData();
data.append('metadata', fs.createReadStream('C:/API/apiIS/js/~WriteFileToGD/metadata.json'));
data.append('', fs.createReadStream('G:/My Drive/~DHUBmag/Bancos_Extr_BanCol 6070/2023.03_BanCol 6070_MAG_EXTR.pdf'));

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart',
  headers: { 
    'Content-type': 'application/json', 
    'Authorization': `Bearer ${accessToken}`,
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