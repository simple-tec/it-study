// 课程页面功能
document.addEventListener('DOMContentLoaded', function() {
    // 课程筛选功能
    const filterButtons = document.querySelectorAll('.filter-btn');
    const courseCards = document.querySelectorAll('.course-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有按钮的active类
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // 给当前按钮添加active类
            this.classList.add('active');

            const selectedLevel = this.getAttribute('data-level');

            // 筛选课程卡片
            courseCards.forEach(card => {
                if (selectedLevel === 'all' || card.getAttribute('data-level') === selectedLevel) {
                    card.style.display = 'flex';
                    card.classList.add('visible');
                    card.classList.remove('hidden');
                } else {
                    card.style.display = 'none';
                    card.classList.add('hidden');
                    card.classList.remove('visible');
                }
            });
        });
    });

    // 课程卡片悬停效果增强
    courseCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // 课程链接点击统计（模拟）
    const courseLinks = document.querySelectorAll('.course-footer .btn-primary');
    courseLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const courseTitle = this.closest('.course-card').querySelector('.course-title').textContent;
            console.log(`用户点击了课程: ${courseTitle}`);

            // 这里可以添加实际的分析代码
            // analytics.track('course_click', { course_name: courseTitle });
        });
    });

    // 学习路径卡片交互
    const pathCards = document.querySelectorAll('.path-card');
    pathCards.forEach(card => {
        card.addEventListener('click', function() {
            // 移除所有卡片的选中状态
            pathCards.forEach(c => c.classList.remove('selected'));
            // 添加当前卡片的选中状态
            this.classList.add('selected');
        });
    });

    // 平滑滚动到课程区域
    const scrollToCourses = () => {
        const coursesSection = document.querySelector('.courses-content');
        if (coursesSection) {
            coursesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // 初始化页面时的动画
    const initializeAnimations = () => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    entry.target.classList.remove('hidden');
                }
            });
        }, observerOptions);

        // 观察课程卡片
        courseCards.forEach(card => {
            observer.observe(card);
        });

        // 观察学习路径卡片
        pathCards.forEach(card => {
            observer.observe(card);
        });
    };

    initializeAnimations();

    // 添加键盘导航支持
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // ESC键重置筛选
            const allButton = document.querySelector('.filter-btn[data-level="all"]');
            if (allButton) {
                allButton.click();
            }
        }
    });

    // 课程搜索功能（可选扩展）
    const addSearchFunctionality = () => {
        // 如果需要搜索功能，可以在这里实现
        console.log('课程搜索功能准备就绪');
    };

    addSearchFunctionality();
});

// 添加动态加载效果
window.addEventListener('load', function() {
    // 页面加载完成后的额外动画
    setTimeout(() => {
        document.querySelectorAll('.course-card').forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('loaded');
            }, index * 100);
        });
    }, 500);
});