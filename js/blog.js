// 博客页面功能
document.addEventListener('DOMContentLoaded', function() {
    // 初始化文章筛选
    initArticleFiltering();

    // 初始化搜索功能
    initSearchFunctionality();

    // 初始化加载更多
    initLoadMore();

    // 初始化订阅功能
    initSubscribeForm();

    // 初始化标签交互
    initTagInteraction();

    // 初始化懒加载
    initLazyLoading();
});

// 文章筛选功能
function initArticleFiltering() {
    const filterButtons = document.querySelectorAll('.tab-btn');
    const articleCards = document.querySelectorAll('.article-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有按钮的active类
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // 给当前按钮添加active类
            this.classList.add('active');

            const selectedCategory = this.getAttribute('data-category');

            // 筛选文章卡片
            articleCards.forEach(card => {
                if (selectedCategory === 'all' || card.getAttribute('data-category') === selectedCategory) {
                    card.style.display = 'block';
                    card.classList.add('visible');
                    card.classList.remove('hidden');
                } else {
                    card.style.display = 'none';
                    card.classList.add('hidden');
                    card.classList.remove('visible');
                }
            });

            // 更新文章计数
            updateArticleCount(selectedCategory);
        });
    });
}

// 更新文章计数
function updateArticleCount(category) {
    const visibleCards = document.querySelectorAll('.article-card.visible');
    const totalCount = document.querySelector('.header-stats .stat-item:first-child .stat-number');

    if (totalCount) {
        if (category === 'all') {
            totalCount.textContent = '50+';
        } else {
            totalCount.textContent = visibleCards.length;
        }
    }
}

// 搜索功能
function initSearchFunctionality() {
    const searchInput = document.getElementById('blog-search');
    const articleCards = document.querySelectorAll('.article-card');

    if (!searchInput) return;

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();

        if (searchTerm === '') {
            // 重置筛选状态
            articleCards.forEach(card => {
                card.style.display = 'block';
                card.classList.add('visible');
                card.classList.remove('hidden');
                clearSearchHighlights(card);
            });
            return;
        }

        let foundCount = 0;
        articleCards.forEach(card => {
            const title = card.querySelector('.article-title a').textContent.toLowerCase();
            const excerpt = card.querySelector('.article-excerpt').textContent.toLowerCase();
            const tags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase()).join(' ');

            if (title.includes(searchTerm) || excerpt.includes(searchTerm) || tags.includes(searchTerm)) {
                card.style.display = 'block';
                card.classList.add('visible');
                card.classList.remove('hidden');
                highlightSearchTerms(card, searchTerm);
                foundCount++;
            } else {
                card.style.display = 'none';
                card.classList.add('hidden');
                card.classList.remove('visible');
            }
        });

        // 显示搜索结果数量
        if (foundCount === 0) {
            showNoResults();
        } else {
            hideNoResults();
        }
    });

    // 清除搜索
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            this.value = '';
            this.dispatchEvent(new Event('input'));
        }
    });
}

// 高亮搜索词
function highlightSearchTerms(element, searchTerm) {
    clearSearchHighlights(element);

    if (searchTerm === '') return;

    const titleElement = element.querySelector('.article-title a');
    const excerptElement = element.querySelector('.article-excerpt');

    highlightText(titleElement, searchTerm);
    highlightText(excerptElement, searchTerm);
}

function highlightText(element, searchTerm) {
    const text = element.textContent;
    const regex = new RegExp(`(${searchTerm})`, 'gi');

    if (regex.test(text)) {
        element.innerHTML = text.replace(regex, '<span class="search-highlight">$1</span>');
    }
}

function clearSearchHighlights(element) {
    const highlights = element.querySelectorAll('.search-highlight');
    highlights.forEach(highlight => {
        const parent = highlight.parentNode;
        parent.replaceChild(document.createTextNode(highlight.textContent), highlight);
        parent.normalize();
    });
}

// 显示无结果提示
function showNoResults() {
    const existingMessage = document.querySelector('.no-results');
    if (!existingMessage) {
        const message = document.createElement('div');
        message.className = 'no-results';
        message.innerHTML = `
            <div class="no-results-content">
                <i class="fas fa-search"></i>
                <h3>未找到相关文章</h3>
                <p>请尝试其他关键词或浏览全部文章</p>
            </div>
        `;
        document.getElementById('articlesGrid').appendChild(message);
    }
}

function hideNoResults() {
    const message = document.querySelector('.no-results');
    if (message) {
        message.remove();
    }
}

// 加载更多功能
function initLoadMore() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (!loadMoreBtn) return;

    loadMoreBtn.addEventListener('click', function() {
        // 显示加载状态
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 加载中...';
        this.disabled = true;

        // 模拟加载更多文章
        setTimeout(() => {
            loadMoreArticles();
            this.innerHTML = '加载更多文章';
            this.disabled = false;
        }, 1500);
    });
}

// 加载更多文章
function loadMoreArticles() {
    const articlesGrid = document.getElementById('articlesGrid');
    const newArticles = generateMockArticles(3); // 生成3篇新文章

    newArticles.forEach((articleData, index) => {
        const articleCard = createArticleCard(articleData);
        articleCard.style.opacity = '0';
        articleCard.style.transform = 'translateY(30px)';

        articlesGrid.appendChild(articleCard);

        // 添加动画效果
        setTimeout(() => {
            articleCard.style.transition = 'all 0.6s ease-out';
            articleCard.style.opacity = '1';
            articleCard.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// 生成模拟文章数据
function generateMockArticles(count) {
    const categories = ['go', 'kubernetes', 'linux', 'ai', 'performance'];
    const titles = [
        'Go语言性能优化技巧分享',
        'Docker容器化最佳实践',
        'Linux系统监控工具详解',
        '机器学习模型优化方法',
        '微服务架构设计原则',
        'DevOps流程自动化实践',
        '数据库性能调优指南',
        '网络安全防护策略'
    ];

    const articles = [];
    for (let i = 0; i < count; i++) {
        articles.push({
            title: titles[Math.floor(Math.random() * titles.length)],
            category: categories[Math.floor(Math.random() * categories.length)],
            excerpt: '这是一篇关于技术实践的精彩文章，包含了丰富的代码示例和实战经验分享。',
            date: '2024年2月' + Math.floor(Math.random() * 28 + 1) + '日',
            readTime: Math.floor(Math.random() * 10 + 5) + '分钟阅读',
            views: Math.floor(Math.random() * 3000 + 500),
            likes: Math.floor(Math.random() * 200 + 50),
            comments: Math.floor(Math.random() * 50 + 5)
        });
    }
    return articles;
}

// 创建文章卡片
function createArticleCard(data) {
    const card = document.createElement('article');
    card.className = 'article-card';
    card.setAttribute('data-category', data.category);

    const categoryNames = {
        'go': 'Go语言',
        'kubernetes': 'Kubernetes',
        'linux': 'Linux',
        'ai': 'AI开发',
        'performance': '性能调优'
    };

    card.innerHTML = `
        <div class="article-image">
            <img src="https://via.placeholder.com/400x250/667eea/ffffff?text=${encodeURIComponent(data.title)}" alt="${data.title}">
            <div class="article-category">${categoryNames[data.category]}</div>
        </div>
        <div class="article-content">
            <div class="article-meta">
                <span class="article-date">${data.date}</span>
                <span class="read-time">${data.readTime}</span>
            </div>
            <h2 class="article-title">
                <a href="#">${data.title}</a>
            </h2>
            <p class="article-excerpt">${data.excerpt}</p>
            <div class="article-tags">
                <span class="tag">技术分享</span>
                <span class="tag">实战经验</span>
            </div>
            <div class="article-footer">
                <div class="author-info">
                    <img src="https://via.placeholder.com/40x40" alt="作者" class="author-avatar">
                    <div class="author-details">
                        <span class="author-name">技术专家</span>
                        <span class="author-title">资深开发者</span>
                    </div>
                </div>
                <div class="article-stats">
                    <span><i class="fas fa-eye"></i> ${data.views}</span>
                    <span><i class="fas fa-heart"></i> ${data.likes}</span>
                    <span><i class="fas fa-comment"></i> ${data.comments}</span>
                </div>
            </div>
        </div>
    `;

    return card;
}

// 订阅功能
function initSubscribeForm() {
    const subscribeForm = document.querySelector('.subscribe-form');
    if (!subscribeForm) return;

    subscribeForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value.trim();

        if (!email) {
            showMessage('请输入有效的邮箱地址', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showMessage('请输入有效的邮箱地址', 'error');
            return;
        }

        // 显示订阅成功消息
        showMessage('订阅成功！感谢您的关注。', 'success');
        emailInput.value = '';

        // 这里可以添加实际的订阅逻辑
        console.log('订阅邮箱:', email);
    });
}

// 邮箱验证
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// 显示消息
function showMessage(message, type) {
    const existingMessage = document.querySelector('.subscribe-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    const messageElement = document.createElement('div');
    messageElement.className = `subscribe-message ${type}`;
    messageElement.textContent = message;

    const subscribeBox = document.querySelector('.subscribe-box');
    subscribeBox.appendChild(messageElement);

    setTimeout(() => {
        messageElement.remove();
    }, 3000);
}

// 标签交互
function initTagInteraction() {
    const tagCloudItems = document.querySelectorAll('.tag-cloud-item');
    const articleTags = document.querySelectorAll('.tag');

    // 标签云点击事件
    tagCloudItems.forEach(tag => {
        tag.addEventListener('click', function() {
            const tagName = this.textContent.trim();
            // 触发搜索
            const searchInput = document.getElementById('blog-search');
            if (searchInput) {
                searchInput.value = tagName;
                searchInput.dispatchEvent(new Event('input'));
            }
        });
    });

    // 文章标签点击事件
    articleTags.forEach(tag => {
        tag.addEventListener('click', function(e) {
            e.stopPropagation();
            const tagName = this.textContent.trim();
            // 触发搜索
            const searchInput = document.getElementById('blog-search');
            if (searchInput) {
                searchInput.value = tagName;
                searchInput.dispatchEvent(new Event('input'));
            }
        });
    });
}

// 懒加载功能
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // 回退方案
        images.forEach(img => {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
        });
    }
}

// 添加键盘快捷键支持
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K 聚焦搜索
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('blog-search');
        if (searchInput) {
            searchInput.focus();
        }
    }

    // ESC 清除搜索
    if (e.key === 'Escape') {
        const searchInput = document.getElementById('blog-search');
        if (searchInput && document.activeElement === searchInput) {
            searchInput.value = '';
            searchInput.dispatchEvent(new Event('input'));
            searchInput.blur();
        }
    }
});

// 添加滚动时的动画效果
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.remove('hidden');
        }
    });
}, observerOptions);

// 观察侧边栏元素
document.addEventListener('DOMContentLoaded', function() {
    const sidebarSections = document.querySelectorAll('.sidebar-section');
    sidebarSections.forEach(section => {
        scrollObserver.observe(section);
    });
});