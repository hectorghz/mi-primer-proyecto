function mostrarMensajeBienvenida(){
    alert("Bienvenido a mi pagina web");
}

window.onload = mostrarMensajeBienvenida;

document.querySelector(".hover-button").addEventListener("click", function() {
    alert("gracias por hacer clic en el boton");
});

//obtener el boton de añadir parrafo y añadir un evento de click 
document.getElementById("add-paragraph").addEventListener("click", function() {
    //crear nuevo parrafo
    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "este es un nuevo parrafo dinamicamente.";
    //añadir el nuevo parrafo a la seccion sobre mi 
    document.querySelector(".sobre-mi").appendChild(nuevoParrafo);
});

//obtener el oboton eliminar ultimo parrafo y añadir un evento de click

document.getElementById("remove-paragraph").addEventListener("click", function() {
    const seccionSobreMi = document.querySelector(".sobre-mi");
    const ultimoParrafo = seccionSobreMi.querySelector("p:last-child");

    if (ultimoParrafo){
        seccionSobreMi.removeChild(ultimoParrafo);
    }
});