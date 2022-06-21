module.exports.area_quadrado = function area_quadrado(lado) {
  return lado * lado
}

module.exports.area_retangulo = function area_retangulo(base, altura) {
  return base * altura
}

module.exports.area_triangulo = function area_triangulo(base, altura) {
  return (base * altura) / 2
}

module.exports.area_circulo = function area_circulo(raio) {
  const pi = 3.1416
  return pi * raio * raio
}
