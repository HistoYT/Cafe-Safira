document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.size-btn');
    const displayImage = document.getElementById('display-image');
    const priceDisplay = document.getElementById('product-price');
    const buyButton = document.getElementById('whatsapp-buy-btn');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // 1. Cambiar estado activo de botones
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // 2. Animación de salida de la imagen
            displayImage.style.opacity = '0';
            displayImage.style.transform = 'scale(0.9) rotate(-5deg)';

            setTimeout(() => {
                // 3. Actualizar contenido
                const newImg = btn.getAttribute('data-img');
                const newPrice = btn.getAttribute('data-price');
                const size = btn.getAttribute('data-size');

                displayImage.src = newImg;
                priceDisplay.textContent = newPrice;
                buyButton.href = `https://wa.me/573167578219?text=Hola! Quiero comprar el Café Safira de ${size}`;

                // 4. Animación de entrada
                displayImage.style.opacity = '1';
                displayImage.style.transform = 'scale(1) rotate(0deg)';
            }, 300);
        });
    });
});
