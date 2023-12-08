let FileName = `FileTest01.txt`;
const message = 'text01';
const content = 'color,raton,rosa,boligrafo,oso';
const owner = 'AdolfoBejarano';
const repo = 'IsAccBalFiles';
const path = 'FileTest01.txt';
const auth = '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';
//const filesha = '77eb3f874c0ac1632734ed05b365deb8bba9d1b0';

const axios = require('axios');
let data = '';
let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: `https://api.github.com/repos/${owner}/${repo}/contents/${FileName}`,
  headers: { 
    'Accept': 'application/vnd.github+json', 
    'Authorization': `Bearer ${auth}`
  },
  data : data
};

axios.request(config)
.then((response) => {
  //console.log(JSON.stringify(response.data));
  let filesha = JSON.stringify(response.data.sha);
  //console.log('FileSha:',FileSha);
})
.catch((error) => {
  console.log(error);
});


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
  //console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});