//const http = require('http');
const https = require('https');

var myHeaders = new Headers();
myHeaders.append("X-RapidAPI-Key", "443c1212admshcd8b8cf31932797p136430jsn3a168fe964c1");
myHeaders.append("X-RapidAPI-Host", "famous-quotes4.p.rapidapi.com");

const requestOptions = {
  host: "https://famous-quotes4.p.rapidapi.com/random?category=all&count=1",
  headers: myHeaders,
  //redirect: 'follow'
};

const getChunkedData = () => {
return new Promise((resolve, reject) => {

//const DATA_URL = "https://famous-quotes4.p.rapidapi.com/random?category=all&count=1";

let data = "";

//***//https.get(DATA_URL[, (resp) => {
https.get(requestOptions, (resp) => {	
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
const chunks = arrayChunks(result, 20);

const chunk = chunks[1];

console.log('Created chunks:', chunks);
console.log('A single chunk:', chunk);


});


