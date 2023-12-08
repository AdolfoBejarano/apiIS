async function upload() {
  const message = 'amogus';
  const content = 'aaaaa';
  const owner = 'AdolfoBejarano';
  const repo = 'IsAccBalFiles.git';
  const path = 'amogus.html';
  const auth = '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';
  
const existingFile = await (await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${auth}`
      }
    }
  )).json(); 

  await (await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
	{
      method: 'PUT',
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${auth}`
      },
      body: JSON.stringify({
        message: message,
        content: btoa(content),
        sha: existingFile.sha,
      }),
    }
  )).json();
}