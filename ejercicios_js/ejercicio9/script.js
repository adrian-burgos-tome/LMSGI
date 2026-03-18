let input = document.getElementById('input')
let lista = document.getElementById('lista')
let boton = document.getElementById('boton')

boton.addEventListener('click', agregar)

function agregar() {
    let tarea = document.createElement('li')
    tarea.textContent = input.value + ' '
    
    let buttonBorrar = document.createElement('button')
    // Le ponemos un texto al boton
    buttonBorrar.textContent = 'x'
    buttonBorrar.addEventListener('click', borrar)

    // Creamos un input de tipo checkbox
    let hecho = document.createElement('input')
    hecho.type = 'checkbox'

    tarea.appendChild(hecho)
    tarea.appendChild(buttonBorrar)
    lista.appendChild(tarea)

}

function borrar() {
    this.parentElement.remove()
}