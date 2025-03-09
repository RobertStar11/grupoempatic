// Seleccionar elementos del carrusel
let slides = document.querySelectorAll(".slide");
let currentIndex = 0;

// Función para mostrar un slide específico
function showSlide(index) {
    // Ocultar todas las imágenes
    slides.forEach(slide => slide.classList.remove("active"));
    
    // Mostrar la imagen actual
    slides[index].classList.add("active");
}

// Función para cambiar de slide
function moveSlide(step) {
    currentIndex += step;

    // Volver al primer slide si supera el último
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    // Volver al último slide si retrocede del primero
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }

    showSlide(currentIndex);
}

// Inicializar carrusel
showSlide(currentIndex);

// Cambio automático de slide cada 5 segundos
setInterval(() => {
    moveSlide(1);
}, 5000);
