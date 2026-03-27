document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.main-header');
    const navLinks = document.querySelectorAll('.main-header li');
    const hamburger = document.getElementById('hamburger');
    const navList = document.querySelector('.nav-links');
    const closeMenu = document.getElementById('close-menu');

    // Toggle Menú Móvil
    hamburger.addEventListener('click', () => {
    const toggleMenu = () => {
        hamburger.classList.toggle('active');
        navList.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });
    };

    // Abrir menú
    hamburger.addEventListener('click', toggleMenu);

    // Cerrar menú desde el botón interno
    if (closeMenu) {
        closeMenu.addEventListener('click', toggleMenu);
    }

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navList.classList.remove('active');
        document.body.classList.remove('menu-open');
    }));

    // Animación de entrada para los elementos del menú
    navLinks.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            link.style.transition = 'all 0.5s ease';
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 100 * index);
    });

    // Efecto de scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});