let axios = require('axios');
let FileName = `FileTest01.txt`;
let message = 'text01';
let content = 'rojo,azul,verde,celeste,anaranjado';
let owner = 'AdolfoBejarano';
let repo = 'IsAccBalFiles';
let path = 'FileTest01.txt';
let auth = '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';
let fileshaA;

let dataB = JSON.stringify
(
{message: message,content: btoa(content),}
);
let configB = 
{  
  method: 'put',
  maxBodyLength: Infinity,
  url: `https://api.github.com/repos/${owner}/${repo}/contents/${FileName}`,
  headers:{'Accept': 'application/vnd.github+json','Authorization': `Bearer ${auth}`,'Content-Type': 'application/json'},
  data : dataB
};

axios.request(configB)
.then((response) =>
{
console.log(JSON.stringify(response.data));
}
)
.catch((error) => {console.log(error);});