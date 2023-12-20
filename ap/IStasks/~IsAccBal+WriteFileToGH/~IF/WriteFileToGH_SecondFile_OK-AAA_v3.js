let b = function() 
{
//console.log('Content @ Shared:',content);
//console.log('opb:',isaccsonBal);

let axios = require('axios');
let FileName = `IsAccBalAllOnAccs.csv`;
let message = 'text01';
//let content = 'pollo,res,cerdo,pescado';
let owner = 'AdolfoBejarano';
let repo = 'IsAccBalFiles';
let path = 'IsAccBalAllOnAccs.csv';
let auth = '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';
let fileshaA;

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
console.log('FileSha:',fileshaB);
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

return 'Done like dinner';
}

module.exports = 
{
b: b
};