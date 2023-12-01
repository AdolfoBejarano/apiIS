//let pick = require('lodash.pick');
//let request = require('request');
let fetch = require('fetch');
let url = 
{
  'method': 'GET',
  'url': 'https://famous-quotes4.p.rapidapi.com/random?category=all&count=1',
  'headers': 
  {
    'X-RapidAPI-Key': '443c1212admshcd8b8cf31932797p136430jsn3a168fe964c1',
    'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
  }
//body: JSON.stringify({texto: xxx, categoria: yyy, autor: zzz, id: 1,}),
};
fetch(url, function (error, body) {
  if (error) throw new Error(error);



  //const data = JSON.parse(body);
  //console.log(data.author);
    
  //let data = JSON.parse(response.body);
  //let resp = response.map(i => _pick(i, ['id', 'author', 'category', 'text']))
  //console.log(response.map(i => ({'d': i.id,'author': i.author})));	

	//let auth = (data, undefined, 2);
	//console.log(response.body);
	//console.log(data.author);
	
	//console.log(JSON.stringify(data));
	//console.log(JSON.stringify(data, undefined, 4));
	//console.log(data.pick.1);
});