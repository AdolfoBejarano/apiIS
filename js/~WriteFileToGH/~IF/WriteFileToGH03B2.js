let FileName = `FileTest01.txt`;
const message = 'text01';
const content = 'corredor,bicicleta,silla,nevera,puerta';
const owner = 'AdolfoBejarano';
const repo = 'IsAccBalFiles';
const path = 'FileTest01.txt';
const auth = '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';
const filesha = '2a567ea6a7942a32336a9b178993e72a46a048d0';

const axios = require('axios');

let dataB = JSON.stringify
(
{
message: message,
content: btoa(content),
sha: filesha,
}
);

let configB = {
  method: 'put',
  maxBodyLength: Infinity,
  url: `https://api.github.com/repos/${owner}/${repo}/contents/${FileName}`,
  headers: { 
    'Accept': 'application/vnd.github+json', 
    'Authorization': 'Bearer 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', 
    'Content-Type': 'application/json'
  },
  data : dataB
};

axios.request(configB)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});