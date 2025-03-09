

// Cargar el Header y Footer dinámicamente
document.addEventListener("DOMContentLoaded", function() {
    fetch("../public/components/header.html")
        .then(response => response.text())
        .then(data => document.getElementById("header-container").innerHTML = data);

    fetch("../public/components/footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer-container").innerHTML = data);
})


