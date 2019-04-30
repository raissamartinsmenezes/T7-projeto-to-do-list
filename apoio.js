const inputUm = document.getElementById('num1')
const inputDois = document.getElementById('num2')
const form = document.getElementById('form')
const resultado = document.getElementById('resultado')

function soma(a, b) {
  return a + b
}

form.addEventListener('submit', function(evento){
  evento.preventDefault()

  let resultadoSoma = document.createElement("p")

  resultadoSoma.innerHTML = soma(parseInt(inputUm.value), parseInt(inputDois.value))

  resultadoSoma.classList = "resultado"

  resultado.appendChild(resultadoSoma)
})