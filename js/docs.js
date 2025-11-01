document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.sidebar-nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    const sections = document.querySelectorAll('.doc-section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                const correspondingLink = document.querySelector(`.sidebar-nav a[href="#${id}"]`);
                if (correspondingLink) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    correspondingLink.classList.add('active');
                }
            }
        });
    }, {
        rootMargin: '-100px 0px -66% 0px'
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    const docSections = document.querySelectorAll('.doc-section');
    docSections.forEach(section => {
        const h2 = section.querySelector('h2');
        if (h2) {
            h2.style.cursor = 'pointer';
            h2.addEventListener('click', function() {
                section.classList.toggle('collapsed');
            });
        }
    });
});
