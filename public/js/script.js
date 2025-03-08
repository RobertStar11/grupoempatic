let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function moveSlide(step) {
    slides[currentIndex].classList.remove("active");

    currentIndex += step;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }

    slides[currentIndex].classList.add("active");
}

// Cambio automático cada 5 segundos
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

document.addEventListener("DOMContentLoaded", function () {
    const configChart = (canvasId, labels, colors) => {
        let ctx = document.getElementById(canvasId).getContext("2d");

        return new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: labels,
                datasets: [{
                    data: [33.3, 33.3, 33.3],
                    backgroundColor: colors,
                    hoverOffset: 10
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function (tooltipItem) {
                                return `${tooltipItem.label}: ${tooltipItem.raw}%`;
                            }
                        }
                    }
                }
            }
        });
    };

    // Gráfico: Áreas Estratégicas
    configChart("areasEstrategicas",
        ["Sostenibilidad", "Financiamiento", "Tecnología"],
        ["#00a8a8", "#f1c40f", "#008080"]
    );

    // Gráfico: Fases de Crecimiento
    configChart("fasesCrecimiento",
        ["Diagnóstico Estratégico", "Plan de Acción", "Implementación"],
        ["#00a8a8", "#f1c40f", "#008080"]
    );
});