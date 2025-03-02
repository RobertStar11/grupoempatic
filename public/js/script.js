let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll(".slide");
    currentIndex += step;

    if (currentIndex >= slides.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }

    document.querySelector(".carousel-container").style.transform = 
        `translateX(-${currentIndex * 100}%)`;
}

setInterval(() => moveSlide(1), 5000);

// ------------------ Menú Desplegable ------------------

document.addEventListener("DOMContentLoaded", function () {
    let dropdowns = document.querySelectorAll(".dropdown > a");

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("click", function (event) {
            event.preventDefault(); // Evita que el enlace redireccione
            let menu = this.nextElementSibling;

            if (menu) {
                menu.classList.toggle("show");
            }
        });
    });

    // Cierra el menú si se hace clic fuera
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".dropdown")) {
            document.querySelectorAll(".dropdown-menu").forEach(menu => {
                menu.classList.remove("show");
            });
        }
    });
});