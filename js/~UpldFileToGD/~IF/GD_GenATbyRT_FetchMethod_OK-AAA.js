var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://www.googleapis.com/oauth2/v4/token',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "client_id": "642359879068-gkkjc97ent0sbov5puf29fnoao9fcaft.apps.googleusercontent.com",
    "client_secret": "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",
    "refresh_token": "1//04hGtJXu2mBFRCgYIARAAGAQSNwF-L9IrjPA_lDSAPKKq4kIWKFDfDpl5_i7lVMeYiizsmyg40G12KFVJfwt0MkWTIFcw1KBIQd8",
    "grant_type": "refresh_token"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});