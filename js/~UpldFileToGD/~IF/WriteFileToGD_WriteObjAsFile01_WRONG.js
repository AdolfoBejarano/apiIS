let accessToken = `ya29.a0AfB_byDnB4F4XKNJmIQVa-FL9kX_bq7Fsj8oJzIaBWqeaIMSY31CF9oqQAHlVOT2QHJBBKj2w2hpyJCP52mhEpsul0C9YXL5aXQvLXoYaZiFZFBV-ARhsavdC1oisOvzGnjfs1-zHhi9DrHCEmYEsGCB99Mzs15LT3mCkAaCgYKASASARESFQHGX2Mi6-vJC9jYrO2AbpJUSHEnHQ0173`;
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
let data = new FormData();

let metadata = 
{
"name": "2023-12-13_GD_Magravis_WriteFileTest-03.pdf",
"description": "This is an uploading file test",
"parents": ["1eRsxHCzE5H0TgyEEZBvUAU1DVPAji0t-"]
}
let content = [1,2,3,4,5,6,7];

data.append('metadata', metadata);
data.append('fileData', content);

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