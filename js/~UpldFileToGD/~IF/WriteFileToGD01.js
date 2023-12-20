let axios = require('axios');
let FileName = `IsAccBalAllOnAccs.csv`;
let message = 'text01';
let content = 'bandeja paisa, caviar, arroz chino, sancocho, arepa huevo, sushi';
let owner = 'AdolfoBejarano';
let repo = 'IsAccBalFiles';
let path = 'IsAccBalAllOnAccs.csv';
let auth = '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';

async function uploadFile()
{
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
}