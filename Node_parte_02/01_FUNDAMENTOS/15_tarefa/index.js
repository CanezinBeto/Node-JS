const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer
  .prompt([
    { name: 'nome', message: 'Qual seu nome' },
    { name: 'idade', message: 'Qual sua idade' },
  ])
  .then((res) => {
    if (!res.nome || !res.idade) {
      throw new Error('O nome e a idade tem quem ser preenchidas')
    }
    console.log(
      chalk.bgYellow.black(`Seu nome é ${res.nome} e sua idade é ${res.idade}`)
    )
  })
  .catch((err) => console.log(chalk.red(err)))
