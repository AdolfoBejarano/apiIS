// PUT request using fetch with set headers
// IsAccOnOff-Pizpepi
const requestOptions = {
    method: 'PUT',
    headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'App e78daed38b750ddf0c327d699948264d-5b7945bf-0f0c-43b9-8065-b08d038619b8',
    },
    body: JSON.stringify({ "enabled": true })
};
fetch('https://wyyxd.api.infobip.com/settings/1/accounts/268B6C0830287744C198D70C5D837122', requestOptions)
	.then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
	
	
