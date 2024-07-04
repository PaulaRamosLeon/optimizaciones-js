const primeraimagen = document.getElementById("primeraimagen");
const segundacaja = document.getElementById("segundacaja");
const buttoncerrar = document.getElementById("buttoncerrar");

primeraimagen.addEventListener('click', () => {
    segundacaja.style.zIndex = 20;
    segundacaja.style.opacity = 100;
});

buttoncerrar.addEventListener('click', () => {
    segundacaja.style.zIndex = 1;
    segundacaja.style.opacity = 0;
});