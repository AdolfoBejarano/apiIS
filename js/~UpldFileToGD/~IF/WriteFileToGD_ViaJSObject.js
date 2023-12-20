const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

let data = new FormData();
data.append('metadata', fs.createReadStream('C:/API/apiIS/js/~WriteFileToGD/metadata.json'));
data.append('', fs.createReadStream('G:/My Drive/~DHUBmag/Bancos_Extr_BanCol 6070/2023.02_BanCol 6070_MAG_EXTR.pdf'));

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart',
  headers: { 
    'Content-type': 'application/json', 
    'Authorization': 'Bearer ya29.a0AfB_byBZ6zmfnsySMfEgVIwEZIEIaJtmMxymIHwyYyKqMpB3r0ILwadIwQuSv9sJeIfAxjKCztZa4Zq9adtW-9YU64hyjgaCZ2iRM5Xu2zw_Vulao3LWFO6gRxfKplFN9Tw6GEWbSh4D1pPRjzn3OcXubTBqRoy-fOeiJQaCgYKAZUSARESFQHGX2MimwyxOX5sRzFFBG2bNCZ1WA0173',
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