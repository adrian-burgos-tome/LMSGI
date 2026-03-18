const entrada = document.getElementById('nombre')
const boton = document.getElementById('b')


boton= addEventListener('click', comprobar)

function comprobar(evento) {
    evento.preventDefault()
    if(entrada.value === ""){
        alert("Campo vacio")
    }
}