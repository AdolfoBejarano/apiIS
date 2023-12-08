let FileName = `FileTest01.txt`;
let message = 'text01';
let content = 'via,camion,taxi,bus';
let owner = 'AdolfoBejarano';
let repo = 'IsAccBalFiles';
let path = 'FileTest01.txt';
let auth = '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';
let filesha = 'f153952e04cce980ac2453fe60c53040b457896b';

let axios = require('axios');
let dataB = JSON.stringify
(
{message: message,content: btoa(content),sha: filesha,}
);

let configB = 
{
  method: 'put',
  maxBodyLength: Infinity,
  url: `https://api.github.com/repos/${owner}/${repo}/contents/${FileName}`,
  headers: {'Accept': 'application/vnd.github+json','Authorization': `Bearer ${auth}`,'Content-Type': 'application/json'},
  data : dataB
};

axios.request(configB)
.then(
(response) => 
{
//  console.log(JSON.stringify(response.data));
}
)
.catch((error) => {console.log(error);});