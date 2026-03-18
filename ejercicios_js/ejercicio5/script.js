const botones = document.querySelectorAll('.borrar');
const listatareas = document.getElementById('lista');
const entrada = document.getElementById('entrada');
const button = document.getElementById('agregar');

button.addEventListener('click', agregar);




function agregar() {
    //Si el input esta facio, o lleno con solamente espacios, este if transformara "     " en ""
    //De manera que con return, para el programa
    if (entrada.value.trim() === "") return; 

    const litarea = document.createElement("li");
    const node = document.createTextNode(entrada.value + " ");
    litarea.appendChild(node);

    
    const nuevoBoton = document.createElement("button");
    nuevoBoton.innerText = "X";
    nuevoBoton.classList.add("borrar");

    
    nuevoBoton.addEventListener('click', borrarElemento);

    
    litarea.appendChild(nuevoBoton);
    listatareas.appendChild(litarea);
    //borrar contenido automaticamente
    entrada.value = ""; 
}

function borrarElemento() {

    const li = this.parentElement; 
    li.remove();
    
}