document.addEventListener('DOMContentLoaded', function() {
    const blogCards = document.querySelectorAll('.blog-card');

    blogCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const img = this.querySelector('.blog-image');
            if (img) {
                img.style.transform = 'scale(1.05)';
            }
        });

        card.addEventListener('mouseleave', function() {
            const img = this.querySelector('.blog-image');
            if (img) {
                img.style.transform = 'scale(1)';
            }
        });

        const readMoreLink = card.querySelector('.read-more');
        if (readMoreLink) {
            readMoreLink.addEventListener('click', function(e) {
                e.preventDefault();
                const card = this.closest('.blog-card');
                const title = card.querySelector('h2').textContent;

                alert(`您点击了文章：${title}\n\n这是演示版本，实际应用中会跳转到文章详情页。`);
            });
        }
    });

    const pageLinks = document.querySelectorAll('.page-link');
    pageLinks.forEach(link => {
        if (!link.classList.contains('disabled') && link.textContent.trim() !== '') {
            link.addEventListener('click', function(e) {
                e.preventDefault();

                pageLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');

                alert('这是演示版本，实际应用中会加载对应页面的内容。');
            });
        }
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, observerOptions);

    blogCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        cardObserver.observe(card);
    });
});
