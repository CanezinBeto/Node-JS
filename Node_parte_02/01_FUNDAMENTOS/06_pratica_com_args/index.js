// Módulo externo
const minimist = require('minimist')
const args = minimist(process.argv.slice(2))

// Módulo interno
const { soma } = require('./soma')

const a = parseInt(args['a'])
const b = parseInt(args['b'])

soma(a, b)

// Passar como argumento no terminal ( --a=10 --b=30 )
