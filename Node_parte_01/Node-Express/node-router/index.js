const express = require('express')
const app = express()
const bodyParse = require('body-parser')
const aluno = require('./routes/aluno')

app.use(bodyParse.urlencoded())

app.use('/aluno', aluno)

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => console.log('Server Rodando'))
