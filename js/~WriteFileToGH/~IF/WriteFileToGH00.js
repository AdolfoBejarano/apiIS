async function upload()
{
let message = 'text01';
let content = 'pechiblanco,azulejo,loro,aguila';
let owner = 'AdolfoBejarano';
let repo = 'IsAccBalFiles';
let path = 'FileTest01.txt';
let auth = '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';
//let filesha = '7ab5a011d6d31f7a19865f04f2c3b5d63c440ca5';

let existingFile = await
(
    await fetch
(
    `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
    {method: 'GET',headers:{Accept: 'application/vnd.github+json',Authorization: `Bearer ${auth}`}}
)
).json();

  await 
(
await fetch
(
    `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
{
	method: 'PUT',headers:{Accept: 'application/vnd.github+json',Authorization: `Bearer ${auth}`},
    body: JSON.stringify({message: message,content: btoa(content),sha: existingFile.sha,}),
}
)
).json();
}