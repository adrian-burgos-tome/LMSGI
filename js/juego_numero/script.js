const button = document.getElementById('button');
const num = document.getElementById('num');
const numReal = Math.floor(Math.random()*21);
const output= document.createElement("p");
document.body.appendChild(output);
const output2= document.createElement("p");
document.body.appendChild(output2);

const node = document.createTextNode(num.value);

let nint=0;

output.appendChild(node);

button.addEventListener('click', comprobar);

function comprobar(){
    const intento = Number(num.value);
    nint++;

    if (intento === numReal) {
        output.textContent = "¡Has acertado!";
    } else if(numReal > intento){
        output.textContent = "Número incorrecto, aumenta el numero";
    } else if(numReal< intento){
        output.textContent = "Número incorrecto, disminuye el numero";
    }
    output2.textContent="Numero de intentos es: " + nint;
}

