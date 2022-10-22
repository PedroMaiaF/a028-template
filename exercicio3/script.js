// Prática guiada 3
// function checarBotaoShift (event){
//     const inputTexto = document.getElementById("textoInput")
//     console.log(inputTexto.value)
// // Outra forma:
//     const inputTextoEvento = event.target
//     console.log(inputTextoEvento)
// }

function checarBotaoShift(event) {
    console.log(event.shiftKey)
    const paragrafo = document.getElementById("mensagem")
    
    if(event.shiftKey){
        paragrafo.innerHTML = "ATENÇÃO: SEGURANDO A TECLA SHIFT"
    } else {
    paragrafo.innerHTML = ""
    }
}