let content = 
[
['centercit',500000,'9be9047d3222264adc927aa271cf7e88-913d0d0c-4341-4459-b44b-2efb130f83e5'],
['\nhisweb',10000,'f86c2f95a9c4289fb19499d9636b59ff-443cf089-2d67-4793-91fb-40efcfb57e8e'],
['\ntgrp',3000,'14194def9d7947aac69b29e3a689c865-1530de3e-37d2-46b8-94a7-21b619e431ac'],
];
let FileName = `FileTest01.txt`;
let message = 'text01';
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