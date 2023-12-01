fetch(
'https://famous-quotes4.p.rapidapi.com/random?category=all&count=1',
{
method: 'GET',
headers:
{
'X-RapidAPI-Key': '443c1212admshcd8b8cf31932797p136430jsn3a168fe964c1',
'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
},
body: JSON.stringify(data)
}
)
.then(r => r.json())
.then(r =>
{
console.log('Response', r) // You will get JSON response here.
}
)
.catch(error => console.error('Error', error))