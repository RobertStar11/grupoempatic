document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("areasEstrategicas")) {
        const ctx1 = document.getElementById("areasEstrategicas").getContext("2d");
        new Chart(ctx1, {
            type: "pie",
            data: {
                labels: ["Sostenibilidad", "Tecnología", "Financiamiento"],
                datasets: [{
                    data: [33.3, 33.3, 33.3],
                    backgroundColor: ["#00a8a8", "#f1c40f", "#d4ac0d"],
                    borderWidth: 2,
                    borderColor: "#000"
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,  // 🔹 Ajusta el gráfico al div contenedor
                plugins: {
                    legend: {
                        display: false  // ❌ Oculta la leyenda
                    },
                    tooltip: {
                        enabled: false  // ❌ Desactiva tooltips al pasar el mouse
                    },
                    datalabels: {
                        color: 'white',
                        font: {
                            size: 12,
                            weight: 'bold'
                        },
                        formatter: (value, ctx) => {
                            let label = ctx.chart.data.labels[ctx.dataIndex];
                            return label + "\n" + value + "%";
                        },
                        anchor: 'end',
                        align: 'start'
                    }
                }
            }
        });
    }

    if (document.getElementById("fasesCrecimiento")) {
        const ctx2 = document.getElementById("fasesCrecimiento").getContext("2d");
        new Chart(ctx2, {
            type: "doughnut",
            data: {
                labels: ["Diagnóstico Estratégico", "Plan de Acción", "Implementación"],
                datasets: [{
                    data: [33.3, 33.3, 33.3],
                    backgroundColor: ["#00a8a8", "#f1c40f", "#d4ac0d"],
                    borderWidth: 2,
                    borderColor: "#000"
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,  // 🔹 Ajusta el gráfico al div contenedor
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false
                    },
                    datalabels: {
                        color: 'white',
                        font: {
                            size: 12,
                            weight: 'bold'
                        },
                        formatter: (value, ctx) => {
                            let label = ctx.chart.data.labels[ctx.dataIndex];
                            return label + "\n" + value + "%";
                        },
                        anchor: 'end',
                        align: 'start'
                    }
                }
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar todas las tarjetas de estrategia
    const strategyCards = document.querySelectorAll(".strategy-card");

    strategyCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.backgroundColor = "#00a8a8"; // Color turquesa al pasar el cursor
            card.style.transition = "background 0.3s ease-in-out";
        });

        card.addEventListener("mouseleave", () => {
            card.style.backgroundColor = "#181818"; // Color original al quitar el cursor
        });

        card.addEventListener("click", () => {
            const url = card.getAttribute("data-url");
            if (url) {
                window.location.href = url; // Redirigir a la sección correspondiente
            }
        });
    });
});