const fs = require('fs')
const args = process.argv.slice(2)
const fileName = args[0]

fs.readFile(fileName, 'UTF8', (error, data) => {
  if (error) throw error

  fs.writeFile(fileName + '_Uppercase', data.toUpperCase(), (error) => {
    if (error) throw error
    console.log('Arquivo gerado com sucesso')
  })
})

// Script para ler um arquivo e transformalo em uppercase
