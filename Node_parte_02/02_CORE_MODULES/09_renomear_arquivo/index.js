const fs = require('fs')

fs.rename('arquivo.txt', 'novo-nome-arquivo.txt', (error) => {
  if (error) {
    console.log(error)
    return
  }

  console.log('Arquivo renomeado')
})
