const botones = document.querySelectorAll('.borrar');

botones.forEach(boton => {
    
    boton.addEventListener('click', borrarElemento);

});

function borrarElemento() {
    
    const li = this.parentElement; 
    li.remove();

}