const http = require('http')
const parse = require('url-parse')
const fs = require('fs')

http
  .createServer((request, response) => {
    let path = parse(request.url).pathname

    if (path == '' || path == '/') {
      path = '/index.html'
    }
    let fileName = '.' + path

    fs.readFile(fileName, (error, data) => {
      if (error) {
        response.writeHead('404', { 'Content-Type': 'text/html;charset=utf-8' })
        response.end('<h1>Página não encontrada</h1>')
      } else {
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.write(data)
        response.end()
      }
    })
  })
  .listen(3000, (error) => {
    if (error) console.log(error)
    else console.log('Servidor Rodando na porta 3000')
  })
