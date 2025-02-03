document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Form Submission
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            this.reset();
            alert('Message received. We will contact you when needed.');
        });
    }

    // Efeito de Opacidade na Navbar
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('nav');
        if(window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(20, 21, 22, 0.97)';
        } else {
            navbar.style.backgroundColor = 'var(--dark)';
        }
    });
});
