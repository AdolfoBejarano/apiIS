/**
 * Insert new file.
 *
 * @param {File} fileData File object to read data from.
 * @param {Function} callback Function to call when the request is complete.
 */

content = [1,2,3,4,5,6,7];

function insertFile(fileData, callback) 
{
  const boundary = '-------314159265358979323846';
  const delimiter = "\r\n--" + boundary + "\r\n";
  const close_delim = "\r\n--" + boundary + "--";

  var reader = new FileReader();
  reader.readAsBinaryString(fileData);
  reader.onload = function(e) {
    var contentType = fileData.type || 'application/octet-stream';
    var metadata = 
{
'name': '2023-12-13_GD_Magravis_WriteFileTest-02.pdf',
'description': 'This is an uploading file test',
'parents': ['1eRsxHCzE5H0TgyEEZBvUAU1DVPAji0t-'],
'title': 'fileData.fileName',
'mimeType': 'contentType',
};

    var base64Data = btoa(content);
    var multipartRequestBody =
        delimiter +
        'Content-Type: application/json\r\n\r\n' +
        JSON.stringify(metadata) +
        delimiter +
        'Content-Type: ' + contentType + '\r\n' +
        'Content-Transfer-Encoding: base64\r\n' +
        '\r\n' +
        base64Data +
        close_delim;

    var request = gapi.client.request({
        'path': '/upload/drive/v2/files',
        'method': 'POST',
		'url': `https://www.googleapis.com/upload/drive/v3/files?`,
        'params': {'uploadType': 'multipart'},
        'headers': {
        'Content-Type': 'multipart/mixed; boundary="' + boundary + '"',
		'Authorization': 'Bearer ya29.a0AfB_byD77gaeOQpeZjPuq_whxTA33W0UiqLtG4eoI4zidyQyHaQSZC2nV1hMpFIKLsd44Xg3qZjVe5D2NuaXDQ7a3o7BoJ1HBHFgUy1Qju600ylUU_lRKAieGUhTAfy1B60Ouoc1W9_2mT6eTEhHzT2t-W1aq-mbPpIBBwaCgYKAaISARESFQHGX2MiHZ1BMvIBiAKAJtyLUIhvzw0173',
        },
        'body': multipartRequestBody});
    if (!callback) {
      callback = function(file) {
        console.log(file)
      };
    }
    request.execute(callback);
  }
}