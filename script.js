function mostrarMensajeBienbenida(){
    alert("Bienvenido a mi pagina web");
}

window.onload = mostrarMensajeBienbenida;

document.querySelector(".hover-button").addEventListener("click", function() {
    alert("gracias por hacer clic en el boton");
});