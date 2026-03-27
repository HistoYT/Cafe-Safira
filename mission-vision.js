document.addEventListener('DOMContentLoaded', () => {
    const mvCards = document.querySelectorAll('.mv-card');
    
    const mvObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                mvObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: "0px"
    });

    mvCards.forEach(card => mvObserver.observe(card));
});