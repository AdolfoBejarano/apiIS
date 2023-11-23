const sendSms = require('./issendsms.js');

const config = {
	domain: 'wyyxd.api.infobip.com',
	apiKey: 'e78daed38b750ddf0c327d699948264d-5b7945bf-0f0c-43b9-8065-b08d038619b8'
}

sendSms(config,'573174277789', `Hello World at ${new Date()}`).then(result => console.log(result));