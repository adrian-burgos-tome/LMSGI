const lista = document.getElementById('lista')
const btn = document.getElementById('agregar')


btn.addEventListener('click', agregarElemento)



function agregarElemento(){
    const elemento = document.createElement('li')
    const node = document.createTextNode("Nuevo")
    elemento.appendChild(node)
    lista.appendChild(elemento)
}