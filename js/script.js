var modal = document.getElementById("modalReglas");
var btn = document.getElementById("miBoton");
var span = document.getElementsByClassName("close-modal")[0];

// Al tocar el botón abre las reglas
btn.onclick = function() {
    modal.style.display = "block";
}

// Al tocar la X se cierra
span.onclick = function() {
    modal.style.display = "none";
}

// Si tocan fuera del cuadro también se cierra
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}





// CÓDIGO PARA EL MENÚ HAMBURGUESA
const menuBtn = document.querySelector('#mobile-menu');
const navMenu = document.querySelector('.nav-menu');
const dropdowns = document.querySelectorAll('.dropdown');

// Abrir/Cerrar menú principal
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('is-active');
    navMenu.classList.toggle('active');
});

// Abrir submenús (Juegos, etc) en el celular y cerrar los otros
// SOLUCIÓN DEFINITIVA PARA CIERRE DE SUBMENÚS
dropdowns.forEach(drop => {
    // Buscamos el enlace (INICIO, REDES, etc.)
    const link = drop.querySelector('.dropbtn');
    
    link.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault(); // Detiene el comportamiento del link
            e.stopPropagation(); // Detiene que el click suba al menú principal

            const content = this.nextElementSibling; // El div dropdown-content
            const isOpen = content.classList.contains('active-mobile');

            // 1. Cerramos todos los submenús primero
            document.querySelectorAll('.dropdown-content').forEach(el => {
                el.classList.remove('active-mobile');
            });

            // 2. Si NO estaba abierto, lo abrimos
            // (Si estaba abierto, se queda cerrado por el paso 1)
            if (!isOpen) {
                content.classList.add('active-mobile');
            }
        }
    });
});