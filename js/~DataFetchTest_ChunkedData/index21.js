//const http = require('http');
const https = require('https');

const getChunkedData = () => {
return new Promise((resolve, reject) => {

const DATA_URL = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";

let data = "";

https.get(DATA_URL, (resp) => {	
resp.on("data", (chunk) => {
//***//console.log("chunk.length:", chunk.length);
//***//console.log("chunk:", chunk);

data = data + chunk;
});

resp.on("end", () => {
	resolve(data);
});
});
});
};

getChunkedData().then((result) => {
//***//	console.log("Complete Data", result.length);
//console.log("Complete Data", result);

const arrayChunks = (array, size) => Array(Math.ceil(array.length / size)).fill()
  .map((entry, index) => index * size)
  .map(begin => array.slice(begin, begin + size));

//const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chunks = arrayChunks(result, 120);

const chunk = chunks[1];

console.log('Created chunks:', chunks);
console.log('A single chunk:', chunk);


});


