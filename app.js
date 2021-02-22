const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('/home/index.html').pipe(res)
})

server.listen(process.env.PORT || 3000)
console.log("PAGESERVER is listening for HTTP requests on port 3000")
