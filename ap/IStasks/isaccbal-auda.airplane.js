import airplane from "airplane";

export default airplane.task(
  {
    slug: "isaccbal-auda",
    name: "isaccbal-auda",
    }
  },

// This is your task's entrypoint. When your task is executed, this
  // function will be called.
async () => {

const accBal = require('./isaccbal.js');

const config = {
	domain: 'wyyxd.api.infobip.com',
	apiKey: 'da7810b58fe70bbf8df333621bd57257-d71fb15a-b1a8-4267-a9dd-6b0ac5a39c6e'
}

//sendSms(config,'573174277789', `Este es un mensaje de prueba enviado a Adolfo, pfvr responda 1:si o 2:no at ${new Date()}`).then(result => console.log(result));

  },
);