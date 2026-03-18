const botones = document.querySelectorAll('.borrar');
const listatareas = document.getElementById('lista');
const entrada = document.getElementById('entrada');
const button = document.getElementById('agregar');

button.addEventListener('click', agregar);




function agregar() {
    if (entrada.value.trim() === "") return; 

    const litarea = document.createElement("li");
    const node = document.createTextNode(entrada.value + " ");
    litarea.appendChild(node);

    // Botón Borrar
    const nuevoBoton = document.createElement("button");
    nuevoBoton.innerText = "X";
    nuevoBoton.classList.add("borrar");
    nuevoBoton.addEventListener('click', borrarElemento);

    // Botón Marcar 
    const nuevoBoton2 = document.createElement("button");
    nuevoBoton2.innerText = "Marcar"; 
    nuevoBoton2.classList.add("Marcar");
    nuevoBoton2.addEventListener('click', marcarElemento);
    
    litarea.appendChild(nuevoBoton);
    litarea.appendChild(nuevoBoton2);
    listatareas.appendChild(litarea);

    entrada.value = ""; 
}

function marcarElemento() {
    // 'this' es el botón al que se le hizo clic
    // 'parentElement' es el <li> que contiene el botón
    const li = this.parentElement;
    
    
    li.classList.toggle("completada");
}