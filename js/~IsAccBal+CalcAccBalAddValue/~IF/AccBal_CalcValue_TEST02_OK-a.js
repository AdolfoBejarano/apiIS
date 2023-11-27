//const obj = JSON.parse(json);

//responseBody = '{"data": ["balance", "currency"]}'; // API response body as a string 

//IsAccBalCur-auda
async function accBalance() {
            let response = await 
			//fetch('https://api.github.com/users')
fetch('https://wyyxd.api.infobip.com/account/1/balance', {
    method: 'GET',
    headers: {
      'Authorization': 'App da7810b58fe70bbf8df333621bd57257-d71fb15a-b1a8-4267-a9dd-6b0ac5a39c6e',
      'Accept': 'application/json',
    },
})			

try { 
// Parse the JSON string into an object
  const responseObj = JSON.parse(responseBody); 
// Access the array property within the object  
  const dataArray = responseObj.data; 
 
// Output: ???
  console.log(dataArray); 
} catch (error) { 
  console.error('Error parsing API response:', error); 
} 
			
            let Balance = await response.json()
			//console.log(Balance)
			//console.log(balance)
			//console.log(currency)
			
									
    }
accBalance()

