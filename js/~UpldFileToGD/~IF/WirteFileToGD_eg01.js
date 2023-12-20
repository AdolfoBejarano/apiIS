var fileContent = 'sample text'; // As a sample, upload a text file.
var file = new Blob([fileContent], {type: 'text/plain'});
var metadata = {
    'name': 'sampleName', // Filename at Google Drive
    'mimeType': 'text/plain', // mimeType at Google Drive
    'parents': '1eRsxHCzE5H0TgyEEZBvUAU1DVPAji0t-', // Folder ID at Google Drive
};

var accessToken = gapi.auth.getToken().access_token; // Here gapi is used for retrieving the access token.
var form = new FormData();
form.append('metadata', new Blob([JSON.stringify(metadata)], {type: 'application/json'}));
form.append('file', file);

var xhr = new XMLHttpRequest();
xhr.open('post', 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id');
xhr.setRequestHeader('Authorization', 'Bearer ' + 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);
xhr.responseType = 'json';
xhr.onload = () => {
    console.log(xhr.response.id); // Retrieve uploaded file ID.
};
xhr.send(form);