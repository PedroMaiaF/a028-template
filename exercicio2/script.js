// Prática guiada 2
function escondeSenha(event){
    event.preventDefault
    const inputSenha = document.getElementById("password")
    console.log(inputSenha)
    inputSenha.setAttribute("type", "password")
} 

// Alterar um elemento CSS:
// Esse querySelector pego do CSS exclusivamente
const corFormulario = document.querySelector(".light")
console.log(corFormulario)
// corFormulario.classList.remove("light")
corFormulario.classList.add("dark")

// Obs: esse "event.preventDefault" - evita que a página apague o que foi digitado dentro dos eventos desse button, que está com id="password"






// Exemplo que está no Notion:
// let myInput = document.getElementById("my-input");
// myInput.setAttribute("type", "password");

// //----- adicionando uma classe

// const myDiv = document.getElementById("my-div");
// myDiv.setAttribute("class", "my-class");