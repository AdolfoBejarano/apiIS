var newMes;
function generateNewQuote() {
fetch('https://api.whatdoestrumpthink.com/api/v1/quotes/random')
       .then(response => response.json())
       .then(data => {
        newMes = data.message;
        // console.log(newMes);
    });
}
generateNewQuote();
setTimeout(function() {console.log(newMes)}, 2000)
console.log(newMes)