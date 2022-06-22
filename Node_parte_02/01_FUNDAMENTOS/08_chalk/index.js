const chalk = require('chalk')

const nota = 9

if (nota > 6) {
  console.log(chalk.green.bold('Parabéns! Você esta aprovado'))
} else {
  console.log(
    chalk.bgRed.black.bold('Você precisa fazer a prova de recuperação')
  )
}
