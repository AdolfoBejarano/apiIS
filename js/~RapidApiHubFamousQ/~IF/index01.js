fetch
(
URL, 
{
method: "POST", // "GET/POST"
headers: 
{
"Content-Type": "application/json"
},
body: JSON.stringify(data)
}
)
.then(r => r.json())
.then(r => {
   console.log('Response', r) // You will get JSON response here.
}).catch(error => console.error('Error', error))