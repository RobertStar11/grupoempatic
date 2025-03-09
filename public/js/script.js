document.addEventListener("DOMContentLoaded", function () {
    // Verificar si Chart.js está cargado
    if (typeof Chart === "undefined") {
        console.error("Chart.js no está cargado. Verifica la referencia en tu HTML.");
        return;
    }

    // Gráfico de Áreas Estratégicas
    const canvas1 = document.getElementById("areasEstrategicas");
    if (canvas1) {
        const ctx1 = canvas1.getContext("2d");
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
    } else {
        console.warn("No se encontró el canvas #areasEstrategicas.");
    }

    // Gráfico de Fases de Crecimiento
    const canvas2 = document.getElementById("fasesCrecimiento");
    if (canvas2) {
        const ctx2 = canvas2.getContext("2d");
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
    } else {
        console.warn("No se encontró el canvas #fasesCrecimiento.");
    }
});