// Paso 1: Declarar variables

const indice = document.querySelectorAll(".indice");
const indice__info = document.querySelectorAll(".indice__informacion");

// Paso 2: Funciones
indice.forEach(elemento => {
    elemento.addEventListener("click", () => {
        //const item = elemento.closest(".indice__informacion");
        let item = elemento.nextElementSibling;

        cerrarTodos();

        item.style = "height: 3em";
    })
});


// Paso 3: Ejecutar código
function cerrarTodos() {
    indice__info.forEach(index => {
        index.style = "height: 0px";
    })

}