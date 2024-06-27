// Paso 1: Declarar variables

const acordeon = document.querySelector(".acordeon");
const caja = document.querySelectorAll(".cajaindice");
const indice = document.querySelectorAll(".indice");
const indice__info = document.querySelectorAll(".indice__informacion");

// Paso 2: Funciones
indice.forEach(elemento => {
    elemento.addEventListener("click", () => {
        const item = indice.closest(".indice");

        cerrarTodos();

        item.classList.toggle("active");
    })
});


// Paso 3: Ejecutar código

indice[0].click();
function cerrarTodos() {
    indice.forEach(elemento=> {
        elemento.classList.remove("active");
    })
}