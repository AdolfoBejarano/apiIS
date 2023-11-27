var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://community-open-weather-map.p.rapidapi.com/weather?q=London%252Cuk");
xhr.setRequestHeader("x-rapidapi-host", "community-open-weather-map.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "be417c3b44cc9e2672e8c404c1e3c29b");

xhr.send(data);