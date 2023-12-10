let axios = require('axios');
let validateNotEmpty = (value, fieldName) => {if (!value) {throw `${fieldName} parameter is mandatory`;}}
let buildUrl = (domain) =>{return `https://${domain}/sms/2/text/advanced`;}
let buildHeaders = (apiKey) => {return {'Content-Type': 'application/json','Authorization': `App ${apiKey}`};}
let buildAxiosConfig = (apiKey) => {return {headers: buildHeaders(apiKey)};}
let buildRequestBody = (destinationNumber, message) => {let destinationObject = {to: destinationNumber};
let messageObject = {destinations: [destinationObject],text: message};return {messages: [messageObject]}}
let parseSuccessResponse = (axiosResponse) =>
{
let responseBody = axiosResponse.data;
let singleMessageResponse = responseBody.messages[0];return {success: true,'messageId': singleMessageResponse.messageId,'status': singleMessageResponse.status.name,'category': singleMessageResponse.status.groupName};
}
let parseFailedResponse = (axiosError) => 
{
if (axiosError.response)
{
let responseBody = axiosError.response.data;return {success: false,errorMessage: responseBody.requestError.serviceException.text,errorDetails: responseBody};
}return {success: false,errorMessage: axiosError.message};
}
let sendSms = (config, destinationNumber, message) => 
{
validateNotEmpty(config.domain, 'config.domain');validateNotEmpty(config.apiKey, 'config.apiKey');validateNotEmpty(destinationNumber, 'destinationNumber');validateNotEmpty(message, 'message');
let url = buildUrl(config.domain);
let requestBody = buildRequestBody(destinationNumber, message);
let axiosConfig = buildAxiosConfig(config.apiKey);
//console.log('POST ', url, ' body ', JSON.stringify(requestBody, null, 2));
return axios.post(url, requestBody, axiosConfig).then(res => parseSuccessResponse(res)).catch(err => parseFailedResponse(err));
}
module.exports = sendSms;