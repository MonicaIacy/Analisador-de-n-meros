let array = []
let num = document.getElementById("num");
//let numero = Number(num.value)
//let ultimo = array[array.length - 1];
let tab = document.getElementById('seltab');
let res = document.getElementById("res");

function adicionar() {
  let numero = Number(num.value)
  if (numero < 1 || numero > 100 || array.includes(numero) == true) {
    alert("Valor inválido ou já encontado na lista!")
  } else {
      array.push(numero)
      let ultimo = array[array.length - 1];
      let item = document.createElement('option')
      item.text = `Valor ${ultimo} adicionado`
      tab.appendChild(item)

      function limpaInput () {
        num.value = ""
      }

      limpaInput()
  }
}

function finalizar() {
  let max = Math.max(...array)
  let min = Math.min(...array)
  let soma = 0

  for(let i = 0; i < array.length; i++) {
    soma += array[i]
  }

  let media = soma / array.length

  res.innerHTML = `<p>Ao todo temos ${array.length} números cadastrados.</p>`
  res.innerHTML += `<p>O maior valor informado foi ${max}.</p>`
  res.innerHTML += `<p>O menor valor informado foi ${min}.</p>`
  res.innerHTML += `<p>Somando todo os valores temos ${soma}.</p>`
  res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`

  num.addEventListener("click", novo)
  function novo() {
    res.innerHTML = ""
  }
}


