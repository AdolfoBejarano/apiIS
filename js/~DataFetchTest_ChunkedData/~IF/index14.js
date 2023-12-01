var myHeaders = new Headers();
myHeaders.append("X-RapidAPI-Key", "443c1212admshcd8b8cf31932797p136430jsn3a168fe964c1");
myHeaders.append("X-RapidAPI-Host", "famous-quotes4.p.rapidapi.com");

var requestOptions = 
{
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch('https://famous-quotes4.p.rapidapi.com/random?category=all&count=1',requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();
  })
  .then(text => {
    console.log(text);
	console.log('text:',text.id);
	//console.log('id:',data.id);
	//console.log('categ:',data.category);
	//console.log('author:',data.author);
	
	
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });