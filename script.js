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
    nuevoParrafo.setAttribute("contenteditable", "true");
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

//validar el formulario de contacto

document.getElementById("contact-form").addEventListener("submit" , function(event){
    const nombre = document.getElementById("nombre").ariaValueMax;
    const email = document.getElementById("email").ariaValueMax;
    const mensaje = document.getElementById("mensaje").ariaValueMax;

    if (nombre == "" || email === "" || mensaje === ""){
        alert ("Por favor, completa todos los campos antes de enviar el formulario.");
        event.preventDefault();//evita que el formulario se envie
    } else if (!email.includes("@")){
        alert("Por favor, ingresa un email valido");
        event.preventDefault();
    }
})