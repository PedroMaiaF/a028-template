// Pra fixar:



function insereItem(event){
// criar um elemento novo
let elementoNovoCriado = document.createElement("li")
console.log(elementoNovoCriado)

// criar uma variável que guarda os itens novos
let input = document.getElementById("meu-input")
console.log(input)

// colocor item novo no elemento novo
// elementoNovoCriado.appendChild(input.value)
elementoNovoCriado.innerHTML = input.value

let referencia = document.getElementById("lista")

referencia.insertAdjacentElement("beforeend", elementoNovoCriado)

}




