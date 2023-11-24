//IsAccBalCur-auda
const axios = require('ajax');
src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"

var settings = {
"async": true,
"crossDomain": true,
"url": 'https://wyyxd.api.infobip.com/account/1/balance', 
method: 'GET',
"timeout": 0,
headers: {
'Authorization': 'App da7810b58fe70bbf8df333621bd57257-d71fb15a-b1a8-4267-a9dd-6b0ac5a39c6e',
'Accept': 'application/json',
},
};

ajax(settings).done(function (response) {
console.log(response);
console.log("balance: " + response.balance);
var content = response.balance;
("#bal").append(content);
});