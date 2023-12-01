fetch('https://famous-quotes4.p.rapidapi.com/random?category=all&count=1',
{
method: 'GET',
headers: {
'X-RapidAPI-Key': '443c1212admshcd8b8cf31932797p136430jsn3a168fe964c1',
'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
},
//body: JSON.stringify(body)
}
)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));