const boton = document.getElementById('btn')
const texto= document.getElementById('texto')

boton.addEventListener('click', modText)

function modText(){
    texto.textContent= "Texto cambiado con JavaScript"
}