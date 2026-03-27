document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.25, // Se activa cuando el 25% del elemento es visible
        rootMargin: "0px"
    };

    const ancestralObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Una vez animado, dejamos de observar para mejorar rendimiento
                ancestralObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observamos la imagen y el bloque de texto
    const elementsToAnimate = document.querySelectorAll('.reveal-element, .fade-element');
    
    elementsToAnimate.forEach(el => ancestralObserver.observe(el));
});