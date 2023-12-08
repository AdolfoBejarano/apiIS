let FileName = `FileTest01.txt`;
let message = 'text01';
let content = 'francia,uruguay,brasil,peru,argentina,rusia';
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
{message: message,content: btoa(content),sha: fileshaB,}
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