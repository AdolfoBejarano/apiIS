const fs = require('fs')
const http = require('http')

var url = 'http://rubycp.me/'

var file = fs.createWriteStream('file01.json')

http.get
(
  url, response => 
{
  // list that will hold all received chunks
  var result = []
  response
    .on
    (
      'data', chunk => result.push(chunk)
    ) // add received chunk to list
    .on
    ('end', () => 
    {
      file.write(JSON.stringify(Buffer.concat(result).toString())) // when all chunks are received concat, stringify and write it to the file
    }
    )
}
)