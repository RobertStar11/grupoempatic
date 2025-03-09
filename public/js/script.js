import Chart from 'chart.js/auto';

document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("areasEstrategicas")) {
        const ctx1 = document.getElementById("areasEstrategicas").getContext("2d");
        new Chart(ctx1, {
            type: "pie",
            data: {
                labels: ["Sostenibilidad", "Tecnología", "Financiamiento"],
                datasets: [{
                    data: [33.3, 33.3, 33.3],
                    backgroundColor: ["#00a8a8", "#f1c40f", "#d4ac0d"]
                }]
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
                    backgroundColor: ["#00a8a8", "#f1c40f", "#d4ac0d"]
                }]
            }
        });
    }
});