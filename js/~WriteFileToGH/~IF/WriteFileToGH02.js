let FileName = `FileTest02.csv`;

let axios = require('axios');
let dataA = '';
let configA = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.github.com/repos/AdolfoBejarano/IsAccBalFiles/contents/${FileName}',
  headers: { 
    'Accept': 'application/vnd.github+json', 
    'Authorization': 'Bearer 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'
  },
  dataA : dataA
};

axios.request(configA)
.then((response) => {
  console.log(JSON.stringify(response.dataA));
})
.catch((error) => {
  console.log(error);
});


let dataB = JSON.stringify
(
{
  "message": "Test01",
  "content": "eGJoZyx0dHR0byxoO2xqcyxjYXNhLCBwZXJybyxnYXRvLGRkZGRk",
  "sha": "existingFile.sha"
}
);

let configB = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.github.com/repos/AdolfoBejarano/IsAccBalFiles/contents/${FileName}',
  headers: { 
    'Accept': 'application/vnd.github+json', 
    'Authorization': 'Bearer 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'
  },
  dataB : dataB
};

axios.request(configB)
.then((response) => {
  console.log(JSON.stringify(response.dataB));
})
.catch((error) => {
  console.log(error);
});