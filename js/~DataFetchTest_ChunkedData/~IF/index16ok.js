const http = require('http');
const https = require('https');

const getChunkedData = () => {
return new Promise((resolve, reject) => {

const DATA_URL = "https://jigsaw.w3.org/HTTP/ChunkedScript";

let data = "";

https.get(DATA_URL, (resp) => {
resp.on("data", (chunk) => {
//console.log("chunk", chunk.length);
console.log("chunk", chunk);
data = data + chunk;
});

resp.on("end", () => {
	resolve(data);
});
});
});
};

getChunkedData().then((result) => {
	//console.log("Complete Data", result.length);
	//console.log("Complete Data", result);
});