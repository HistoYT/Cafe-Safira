document.addEventListener('DOMContentLoaded', () => {
    const prepColumns = document.querySelectorAll('.prep-column');
    
    const prepObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.2
    });

    prepColumns.forEach(col => prepObserver.observe(col));
});