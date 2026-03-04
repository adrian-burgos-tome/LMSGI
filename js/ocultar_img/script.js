const imagenes = document.querySelectorAll('.carrusel img');
        const botones = document.querySelectorAll('.botones button');

        function mostrarImagen(indice) {
            for (let i = 0; i < imagenes.length; i++) {
                imagenes[i].style.display = 'none';
            }
            imagenes[indice].style.display = 'block';
        }

        for (let i = 0; i < botones.length; i++) {
            botones[i].addEventListener('click', function () {
                mostrarImagen(i);
            });
        }