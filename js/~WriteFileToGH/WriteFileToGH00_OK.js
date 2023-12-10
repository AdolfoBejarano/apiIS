let FileName = `FileTest01.txt`;
//let message = 'text01';
let content = 'bandeja paisa, caviar, arroz chino, sancocho, arepa huevo, sushi';
let owner = 'AdolfoBejarano';
let repo = 'IsAccBalFiles';
let path = 'FileTest01.txt';
let auth = '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';
let fileshaA;

let axios = require('axios');
let configA = 
{
  method: 'get',
  maxBodyLength: Infinity,
  url: `https://api.github.com/repos/${owner}/${repo}/contents/${FileName}`,
  headers:{'Accept': 'application/vnd.github+json','Authorization': `Bearer ${auth}`},
};

axios.request(configA)
.then(
(response) => 

{
fileshaA=response.data.sha;
uploadFile();
}

)
.catch((error) => {console.log(error);});



async function uploadFile()
{
let fileshaB = fileshaA;
console.log('globalVariable:',fileshaB);
let dataB = JSON.stringify
(
{message: 'text01',content: btoa(content),sha: fileshaB,}
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