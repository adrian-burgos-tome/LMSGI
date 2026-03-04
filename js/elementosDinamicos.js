const listatareas = document.getElementById('listatareas');
const button = document.getElementById('agregar');
const entrada = document.getElementById('entrada');
const imagen = document.getElementById('imagen');

const bcambiarcolor=document.getElementById('cambiarColor')



button.addEventListener('click', agregar);
bcambiarcolor.addEventListener('click', colorRojo);


function agregar(){

    const litarea=document.createElement("li");

    const node= document.createTextNode(entrada.value);
    litarea.appendChild(node);

    listatareas.appendChild(litarea);

    
}

function colorRojo(){
    const listatareasli = document.querySelectorAll("li");
    for (let i=0; i<listatareasli.length; i++){
        listatareasli[i].style.color="red";
    }
}
