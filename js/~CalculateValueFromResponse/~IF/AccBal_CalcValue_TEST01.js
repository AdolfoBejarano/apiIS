  //IsAccBal-auda
async function accBalance() {
            let response = await fetch('https://api.github.com/users')
            let Balance = await response.json()
            console.log(Balance)
    }

accBalance()

/* fetch('https://wyyxd.api.infobip.com/account/1/balance', {
    method: 'GET',
    headers: {
      'Authorization': 'App da7810b58fe70bbf8df333621bd57257-d71fb15a-b1a8-4267-a9dd-6b0ac5a39c6e',
      'Accept': 'application/json',
    },
  }) */

   /* .then(response => response.json())
    .then(response => console.log(response))
	.catch(err => console.error(err));
	*/