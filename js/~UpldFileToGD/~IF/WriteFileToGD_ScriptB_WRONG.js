const axios = require('axios');

function gdgenatbyrt() 
{

let data = JSON.stringify({
  "client_id": "642359879068-gkkjc97ent0sbov5puf29fnoao9fcaft.apps.googleusercontent.com",
  "client_secret": "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",
  "refresh_token": "1//04hGtJXu2mBFRCgYIARAAGAQSNwF-L9IrjPA_lDSAPKKq4kIWKFDfDpl5_i7lVMeYiizsmyg40G12KFVJfwt0MkWTIFcw1KBIQd8",
  "grant_type": "refresh_token"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://www.googleapis.com/oauth2/v4/token',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
 console.log(JSON.stringify(response.data));	
let atA= JSON.stringify(response.data);
let atB= JSON.parse(atA);
let x  = atB.access_token;
console.log('x:',x);
  
})
.catch((error) => {
  console.log(error);
});


return 'done';

}


module.exports = {gdgenatbyrt: gdgenatbyrt};