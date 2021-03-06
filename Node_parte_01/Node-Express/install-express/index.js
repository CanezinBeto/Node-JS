const express = require('express')
const path = require('path')
const bodyParse = require('body-parser')
const app = express()
const PORT = 5000

// Servindo arquivos estáticos
app.use('/meusite', express.static(path.join(__dirname, 'client')))

// Middlewere
const consoleMethod = (req, res, next) => {
  console.log(req.method)
  console.log(req.body)
  next()
}

// Chamando o middlewere em qualquer método
app.use('/', bodyParse.json())
app.use('/', consoleMethod)

// Método GET
app.get('/', (req, res) => {
  res.type('html')
  res.send('<h1>Hello World from GET</h1>')
})

// Método POST
app.post('/', (req, res) => {
  res.type('html')
  res.send('<h1>Hello World from POST</h1>')
})

// Método PUT
app.put('/', (req, res) => {
  res.type('html')
  res.send('<h1>Hello World from PUT</h1>')
})

// Método DELETE
app.delete('/', (req, res) => {
  res.type('html')
  res.send('<h1>Hello World from DELETE</h1>')
})

app.listen(PORT, () => {
  console.log('Server Running on Port: ' + PORT)
})
