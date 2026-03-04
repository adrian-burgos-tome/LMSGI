const imagenes = document.querySelectorAll('.carrusel img');

let diapositivaActual=0;

mostrarCarrusel();

function mostrarCarrusel(){
    for (let i = 0; i < imagenes.length; i++) {
                imagenes[i].style.display = 'none';
            }
            imagenes[diapositivaActual].style.display = 'block';
    
    diapositivaActual++;
    if(diapositivaActual>=3){
        diapositivaActual=0;
    }
    setTimeout (mostrarCarrusel,2000);
}
