const http = require('http')
const parse = require('url-parse')
const fs = require('fs')

function handleFile(req, res, callback) {
  let path = parse(req.url).pathname
  let fileName = '.' + path

  fs.readFile(fileName, (error, data) => {
    if (error) {
      if (callback) {
        if (!callback(req, res)) {
          res.writeHead('404', { 'Content-Type': 'text/html;charset=utf-8' })
          res.end('<h1>Página não encontrada</h1>')
        }
      }
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(data)
      res.end()
    }
  })
}

function handleRequest(req, res) {
  let path = parse(req.url).pathname

  if (path == '/teste') {
    res.end('Teste')
    return true
  }

  return false
}

http
  .createServer((request, response) => {
    handleFile(request, response, handleRequest)
  })
  .listen(3000, (error) => {
    if (error) console.log(error)
    else console.log('Servidor Rodando na porta 3000')
  })
