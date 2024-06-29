// Paso 1: Declarar variables

const acordeon = document.querySelector(".acordeon");
const caja = document.querySelectorAll(".cajaindice");
const indice = document.querySelectorAll(".indice");
const indice__info = document.querySelectorAll(".indice__informacion");

// Paso 2: Funciones
indice.forEach(elemento => {
    elemento.addEventListener("click", () => {
        //const item = elemento.closest(".indice__informacion");
        let item = elemento.nextElementSibling;

        cerrarTodos();

        item.style ="display: block";
    })
});


// Paso 3: Ejecutar código
function cerrarTodos(){
    indice__info.forEach(index => {
        index.style = "display: none";
    })
    
}