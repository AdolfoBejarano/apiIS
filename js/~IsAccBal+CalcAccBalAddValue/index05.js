
async function accBalance() 
{
var array =
[
['A','Place01',95050],
['B','Place02',48222],
['C','Place03',02199],
];

for(var i = 0; i < array.length; i++)
{
for(var j = 0; j < array[i].length; j++)

var xa = array [i] [(j-2)];
var xb = array [i] [(j-2)];
var xc = array [i] [(j-1)];
console.log(i+1,xa,xb,xc);
//script
      var settings = {
	   "async": true,
      "crossDomain": true,
      "url": "https://api.openweathermap.org/data/2.5/weather?zip=95050&units=imperial&appid=be417c3b44cc9e2672e8c404c1e3c29b",
      "method": "GET",
      "timeout": 0,
      };

      //$.ajax(settings).done(function (response) {
      //console.log(response);
	  //console.log("wind speed: " + response.wind.speed);
      var content = response.wind.speed;
      $("#windSpeed").append(content);
      //});
//script
}
}
accBalance()