const contenedor = document.getElementById('caja')
const boton = document.getElementById('color')

boton.addEventListener('click', modFondo)

function modFondo(){
    contenedor.style.backgroundColor = "blue";
    contenedor.style.color= "white"
}