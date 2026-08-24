/* (COMANDOS USADOS E FUNCIONALIDADES)
const = diferente da variável que pode ter outros valores. a const tem valor fixo.. (constante)
document = indicando que vai pegar de algum documento..  no caso do "html"
.getElementById(" id definido") = pegar um elemnto por id.
.querySelector("id definido") = pega um elemento solto nesse caso o (<form> </form>)
try
*/

//cotação de moeda atuais
const USD = 4.98
const EUR = 5.84
const GBP = 6.72
const CAD = 3.64

// obtendo elementos de um formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result= document.getElementById("result")


// Manipulando o input amount (moeda) para receber somente numeros
amount.addEventListener("input", () => {
  const Regex = /\D+/g // rejeita todos os caracteres que não são números.
  amount.value = amount.value.replace(Regex, "")
})

// Capturando o evento de submit (enviar) do formulário
form.onsubmit =(event) => {
  event.preventDefault()

  
  // switch é uma estrutura de controle que permite testar uma expressão e executar um bloco de código correspondente ao valor da expressão.
  switch (currency.value){
    case "USD":
      convertCurrency(amount.value, USD, "$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
    case "CAD":
      convertCurrency(amount.value, CAD, "C$")
      break
  }
}

//Função de converter a moeda
function convertCurrency(amount, price, symbol) {
try {
  //exibindo a cotação da moeda selecionada
  description.textContent = `${symbol}1 = ${formatCurrencyBRL(price)}`

// calcula e exibe o total 
  let total = amount*price
total = formatCurrencyBRL(total)

  result.textContent = `${total}`


  // Aplica a classe que exibe o footer com o resultado.
  footer.classList.add("show-result")
} catch (error) {
  // remove a classe do footer ocultando ele da tela
  footer.classList.remove("show-result")

  console.log(error)
  alert("Não foi possível converter, tente novamente")
  }
}

function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
   style: "currency",
   currency: "BRL",
  })
}