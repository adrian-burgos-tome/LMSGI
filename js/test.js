
const pagina = document.getElementById('pagina');

pagina.addEventListener('click', modoOscuro);

function modoOscuro(){
    document.body.style.backgroundColor="#181818";
    document.body.style.color="white";
}

function modoClaro(){
    document.body.style.backgroundColor="white";
    document.body.style.color="black";
}

