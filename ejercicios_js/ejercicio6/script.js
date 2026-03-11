const valor = document.getElementById('valor');
const sumar = document.getElementById('aumentar');
const restar = document.getElementById('disminuir');
const reset = document.getElementById('resetear');

let cuenta=0;

sumar.addEventListener('click', btnAumentar);
reset.addEventListener('click', btnResetear);
restar.addEventListener('click', btnDisminuir);

function btnAumentar(){
    cuenta++;
    valor.textContent = cuenta;
}

function btnDisminuir(){
    cuenta--;
    valor.textContent = cuenta;
}

function btnResetear(){
    cuenta=0;
    valor.textContent = cuenta;
}