var nameElement = document.getElementById('name');
var genderElement = document.getElementById('gender');


var request = require('request');

var options = {
  'method': 'GET',
  'url': 'https://www.anapioficeandfire.com/api/characters/100',
  'headers': {
    'Cookie': 'ARRAffinity=9abdbcfad433a99aa777f5f46c9ac1ec56d3922ec86c98e20238d61e2aeab0e8; ARRAffinitySameSite=9abdbcfad433a99aa777f5f46c9ac1ec56d3922ec86c98e20238d61e2aeab0e8'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  
  promise1.then(function(value) {
  nameElement.textContent = value.name;
  genderElement.textContent = value.gender;
});
});