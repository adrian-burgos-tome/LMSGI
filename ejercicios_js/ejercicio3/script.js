const mensaje = document.getElementById('mensaje')
const toggle = document.getElementById('toggle')

toggle.addEventListener('click', HideText)

function HideText(){
    if(mensaje.style.display === "block"){
        mensaje.style.display= "none"
    }else{
        mensaje.style.display = "block"
    }
}