// Importanto um método do Node
const fs = require('fs')

// Função para criar um arquivo
fs.writeFile('teste.txt', 'Hello World', (error) => {
  if (error) throw error

  console.log('Arquivo criado com sucesso.')
})

// Função para juntar um conteudo a um arquivo ja existente
fs.appendFile('teste.txt', ' - Olá Mundo', (error) => {
  if (error) throw error

  console.log('Arquivo Atualizado')
})

// Função para ler o conteudo do arquivo
fs.readFile('teste.txt', 'UTF8', (error, data) => {
  if (error) throw error

  console.log(data)
})

// Função para apagar um arquivo
/*
fs.unlink('teste.txt', (error) => {
  if (error) throw error

  console.log('Arquivo apagado com sucesso')
})
*/

// Função para renomear um arquivo
/*
fs.rename('teste.txt', 'novoNome.txt' , (error) => {
  if (error) throw error

  console.log('Arquivo renomeado com sucesso')
})
*/
