// fetch()

const url = "https://jsonplaceholder.typicode.com/todos";
const options =
{
  method: "POST",
  headers: 
{
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
},
  body: JSON.stringify({a: 11,b: 250, id: 100,}),
};
fetch(url, options)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });