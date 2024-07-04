// Paso 1: Declarar variables

const botones = document.querySelectorAll(".titulo");
const textos = document.querySelectorAll(".texto");

// Paso 2: Funciones
for (let i = 0; i < botones.length; i++) {

    botones[i].addEventListener("click", () => {
        
        let item = textos[i];

        cerrarTodos();

        item.style = "opacity: 100%";
        botones[i].classList.add("activo");
    })
}


// Paso 3: Ejecutar código
function cerrarTodos() {
    textos.forEach(texto => {
        texto.style = "opacity: 0%";
    })
    botones.forEach(boton => {
        boton.classList.remove("activo");
    })
}