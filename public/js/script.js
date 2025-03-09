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