const express = require('express')
const path = require('path')
const app = express()
const PORT = 5000

// Servindo arquivos estáticos
app.use(express.static(path.join(__dirname, 'client')))

app.listen(PORT, () => {
  console.log('Server Running on Port: ' + PORT)
})
