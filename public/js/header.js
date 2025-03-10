
        // Manejo de los submenús con clic
        document.querySelectorAll('.menu-btn').forEach(menuBtn => {
            menuBtn.addEventListener('click', function() {
                let submenu = this.nextElementSibling;
                
                // Cierra cualquier otro menú abierto
                document.querySelectorAll('.submenu').forEach(sub => {
                    if (sub !== submenu) {
                        sub.classList.add('hidden');
                    }
                });

                // Alternar el menú seleccionado
                submenu.classList.toggle('hidden');
            });
        });

        // Cerrar menú al hacer clic fuera de él
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.relative')) {
                document.querySelectorAll('.submenu').forEach(submenu => {
                    submenu.classList.add('hidden');
                });
            }
        });

        // Toggle menú móvil
        document.getElementById('menu-toggle').addEventListener('click', function() {
            document.getElementById('nav-links').classList.toggle('hidden');
        });
   
