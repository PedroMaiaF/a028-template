// Prática guiada 1:
// Criar uma nova Tag("li")
const itemNovoCriadoDoZero = document.createElement("li")

// Ver todo o documento (DOM):
console.log(document)

// Ver o conteúdo da Tag criada (Não haverá nada, pois até aqui só foi criada a tag):
console.log(itemNovoCriadoDoZero)

// Criando um conteúdo para por dentro da tag que for criada - nesse caso será colocado na tag "li"
const conteudoItemNovoCriadoDoZero = document.createTextNode("item 0")

console.log(conteudoItemNovoCriadoDoZero)

// Colocando o conteúdo criado dentro da Tag criada:
itemNovoCriadoDoZero.appendChild(conteudoItemNovoCriadoDoZero)

// Definir conteudo de referência:
const elementoReferencia1 = document.getElementById("lista")
console.log(elementoReferencia1)

// Adicionar isso na tela após verificação(Adicionar no inicio):
elementoReferencia1.insertAdjacentElement("afterbegin", itemNovoCriadoDoZero)

// Inserindo um item no final:
const itemNovoCriadoDoCinco = document.createElement("li")
console.log(itemNovoCriadoDoCinco)
const conteudoItemNovoCriadoDoCinco = document.createTextNode("item 5")
console.log(conteudoItemNovoCriadoDoCinco)
itemNovoCriadoDoCinco.appendChild(conteudoItemNovoCriadoDoCinco)
// Obs:aqui não precisou chamar a referencia novamente, 
// pois o "item 5" será adicionada dentro da mesma, que no caso, é "lista"
// Adicionar isso na tela após verificação(Adicionado no final):
elementoReferencia1.insertAdjacentElement("beforeend", itemNovoCriadoDoCinco)

















// Exemplo que estava no Notion
// function addElement () {
//     // Criando um elemento Div
//     const newDiv = document.createElement("div");
  
//     // Colocando conteúdo para a div
//     const newContent = document.createTextNode("Oi! Tudo bem?");
  
//     // Adicionando o conteúdo na div
//     newDiv.appendChild(newContent);
  
//     // Buscando a div existente para usar de referência
//     const currentDiv = document.getElementById("div1");
  
//     // Adicionando o elemento no DOM, e consequentemente, na página
//     currentDiv.insertAdjacentElement('beforebegin', newDiv);
//   }
  
//   addElement();
  
//   console.log()