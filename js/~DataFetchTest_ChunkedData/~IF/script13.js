var myHeaders = new Headers();
myHeaders.append("X-RapidAPI-Key", "443c1212admshcd8b8cf31932797p136430jsn3a168fe964c1");
myHeaders.append("X-RapidAPI-Host", "famous-quotes4.p.rapidapi.com");

var requestOptions = 
{
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

// api url
const api_url = 'https://famous-quotes4.p.rapidapi.com/random?category=all&count=1';

// Defining async function
async function getapi(url) {

	// Storing response
	const response = await fetch(url,requestOptions);

	// Storing data in form of JSON
	var data = await response.json();
//***//console.log(data);

	if (response) {
		hideloader();
	}
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
//***//document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
	let tab = 
		`<tr>
		<th>Name</th>
		<th>Office</th>
		<th>Position</th>
		<th>Salary</th>
		</tr>`;

	// Loop to access all rows 
	for (let r of data.list) {
		tab += `<tr> 
	<td>${r.name} </td>
	<td>${r.office}</td>
	<td>${r.position}</td> 
	<td>${r.salary}</td>		 
</tr>`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("employees").innerHTML = tab;
}
