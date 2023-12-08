let FileName = `FileTest01.txt`;let message = 'text01';
let content = 'COSA,QUESO,FRUTA,OVILLO,TORNILLO,CERO';
let owner = 'AdolfoBejarano';
let repo = 'IsAccBalFiles';
let path = 'FileTest01.txt';
let auth = `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`;

let axios = require('axios');
let configA = 
{
  method: 'get',
  maxBodyLength: Infinity,
  url: `https://api.github.com/repos/${owner}/${repo}/contents/${FileName}`,
  headers:{'Accept': 'application/vnd.github+json','Authorization': `Bearer ${auth}`},
//let filesha = JSON.stringify(response.data.sha);
//console.log('FileSha:',filesha);
};

axios.request(configA)
.then
(
(response) => 
{
//console.log(JSON.stringify(response.data));
//console.log('SHA:',JSON.stringify(response.data.sha));
let filesha = JSON.stringify(response.data.sha);
console.log('filesha:',filesha);
}
)
.catch((error) => {console.log(error);});