function a() {
  console.log('Executou a()')
}
function b() {
  console.log('Executou b()')
}
function c() {
  console.log('Executou c()')
  a()
  b()
}

c()

// O event loop garante que a execução do arquivo seja sequêncial de cima para baixo
