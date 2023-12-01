const http = require('http');
const https = require('https');

const getChunkedData = () => {
return new Promise((resolve, reject) => {

const DATA_URL = "https://magravis.free.beeceptor.com";

let data = "";

https.get(DATA_URL, (resp) => {
resp.on("data", (chunk) => {
//***//console.log("chunk.length:", chunk.length);
//***//console.log("chunk:", chunk);

data = data + chunk;
});

resp.on("end", () => {
	resolve(data);
	console.log(data);
	console.log(data.[1]);
	
});
});
});
};

getChunkedData().then((result) => {
	//console.log("Complete Data", result.length);
	//console.log("Complete Data", result);
});