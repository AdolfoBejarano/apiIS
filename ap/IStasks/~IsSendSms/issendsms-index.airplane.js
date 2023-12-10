// my_task.airplane.ts
import airplane from "airplane";

export default airplane.task
(
// Task configuration
{slug: "sendsms",name: "sendsms",description: "This is my task defined entirely in TypeScript!",},
// Task implementation
// This is your task's entrypoint. When your task is executed, this function will be called
async () =>
{
let sendSms = require('./issendsms.js');
let config = {domain: 'wyyxd.api.infobip.com',apiKey: 'e78daed38b750ddf0c327d699948264d-5b7945bf-0f0c-43b9-8065-b08d038619b8'}
sendSms(config,'573174277789', `hello world v10 at ${new Date()}`)
.then(result => console.log(result));
},
);