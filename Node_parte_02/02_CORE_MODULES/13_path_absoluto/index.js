const path = require('path')

// Path absoluto
console.log(path.resolve('teste.js'))

// Formar path
const midFolder = 'relatorios'
const fileName = 'alberto.txt'
const finalPath = path.join('/', 'arquivos', midFolder, fileName)

console.log(finalPath)
