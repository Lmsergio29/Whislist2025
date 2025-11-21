document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los botones de reserva
    const reserveButtons = document.querySelectorAll('.reserve-btn');

    reserveButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const btn = event.target;
            
            // Si el botón ya está reservado, lo liberamos
            if (btn.classList.contains('reserved')) {
                btn.classList.remove('reserved');
                btn.textContent = 'Reservar';
                btn.style.backgroundColor = 'var(--color-primary)';
                btn.parentElement.parentElement.classList.remove('item-reserved');
                alert('¡Regalo liberado! ¡Ya puedes volver a seleccionarlo!');
            } 
            // Si el botón no está reservado, lo reservamos
            else {
                // Confirmación simple para la acción
                const isConfirmed = confirm('¿Estás seguro de que quieres reservar este regalo? ¡Recuerda marcarlo como comprado después!');
                
                if (isConfirmed) {
                    btn.classList.add('reserved');
                    btn.textContent = '¡REGALO RESERVADO! 🔒';
                    // Cambiamos el color para indicar que está reservado (usaremos el color verde)
                    btn.style.backgroundColor = 'var(--color-secondary)'; 
                    // Añadimos una clase al contenedor para cambiar el estilo del ítem
                    btn.parentElement.parentElement.classList.add('item-reserved'); 
                    alert('¡Regalo reservado con éxito! Recuerda no decírselo a nadie 😉');
                }
            }
        });
    });

    // Opcional: Agregar el estilo para el ítem reservado en CSS (agrega esto a styles.css)
    /*
    .wishlist-item.item-reserved {
        border: 2px solid var(--color-secondary);
        opacity: 0.7;
    }
    */
});