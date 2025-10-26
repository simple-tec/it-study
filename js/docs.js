// 文档页面功能
document.addEventListener('DOMContentLoaded', function() {
    // 初始化文档导航
    initDocsNavigation();

    // 初始化搜索功能
    initSearchFunctionality();

    // 初始化目录生成
    initTableOfContents();

    // 初始化代码复制功能
    initCodeCopy();

    // 初始化滚动监听
    initScrollSpy();

    // 初始化响应式侧边栏
    initResponsiveSidebar();
});

// 文档导航功能
function initDocsNavigation() {
    const navLinks = document.querySelectorAll('.docs-nav .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // 移除所有活动状态
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            // 平滑滚动到目标部分
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 搜索功能
function initSearchFunctionality() {
    const searchInput = document.getElementById('docs-search');
    const sections = document.querySelectorAll('.doc-section');

    if (!searchInput) return;

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();

        if (searchTerm === '') {
            // 清除搜索时显示所有部分
            sections.forEach(section => {
                section.style.display = 'block';
                clearHighlights(section);
            });
            return;
        }

        sections.forEach(section => {
            const text = section.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                section.style.display = 'block';
                highlightText(section, searchTerm);
            } else {
                section.style.display = 'none';
            }
        });

        // 更新导航链接状态
        updateNavLinksVisibility(searchTerm);
    });
}

// 高亮搜索文本
function highlightText(element, searchTerm) {
    clearHighlights(element);

    if (searchTerm === '') return;

    const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );

    const textNodes = [];
    let node;

    while (node = walker.nextNode()) {
        if (node.parentElement.tagName !== 'SCRIPT' &&
            node.parentElement.tagName !== 'STYLE') {
            textNodes.push(node);
        }
    }

    textNodes.forEach(textNode => {
        const text = textNode.textContent;
        const regex = new RegExp(`(${searchTerm})`, 'gi');

        if (regex.test(text)) {
            const span = document.createElement('span');
            span.innerHTML = text.replace(regex, '<span class="search-highlight">$1</span>');
            textNode.parentNode.replaceChild(span, textNode);
        }
    });
}

// 清除高亮
function clearHighlights(element) {
    const highlights = element.querySelectorAll('.search-highlight');
    highlights.forEach(highlight => {
        const parent = highlight.parentNode;
        parent.replaceChild(document.createTextNode(highlight.textContent), highlight);
        parent.normalize();
    });
}

// 更新导航链接可见性
function updateNavLinksVisibility(searchTerm) {
    const navSections = document.querySelectorAll('.nav-section');

    navSections.forEach(section => {
        const links = section.querySelectorAll('.nav-link');
        let hasVisibleContent = false;

        links.forEach(link => {
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection && targetSection.style.display !== 'none') {
                hasVisibleContent = true;
            }
        });

        section.style.display = hasVisibleContent ? 'block' : 'none';
    });
}

// 生成目录
function initTableOfContents() {
    const tocNav = document.getElementById('tableOfContents');
    if (!tocNav) return;

    const headings = document.querySelectorAll('.doc-section h2, .doc-section h3');

    if (headings.length === 0) {
        tocNav.innerHTML = '<p class="text-muted">无目录项</p>';
        return;
    }

    const tocList = document.createElement('ul');

    headings.forEach(heading => {
        const li = document.createElement('li');
        const a = document.createElement('a');

        a.href = `#${heading.id}`;
        a.textContent = heading.textContent;

        if (heading.tagName === 'H3') {
            a.style.paddingLeft = '1.5rem';
            a.style.fontSize = '0.8rem';
        }

        a.addEventListener('click', function(e) {
            e.preventDefault();
            heading.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // 更新目录活动状态
            updateTocActiveState(heading);
        });

        li.appendChild(a);
        tocList.appendChild(li);
    });

    tocNav.appendChild(tocList);
}

// 更新目录活动状态
function updateTocActiveState(activeHeading) {
    const tocLinks = document.querySelectorAll('.toc-nav a');

    tocLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${activeHeading.id}`) {
            link.classList.add('active');
        }
    });
}

// 代码复制功能
function initCodeCopy() {
    const copyButtons = document.querySelectorAll('.copy-btn');

    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const codeText = this.getAttribute('data-clipboard-text');

            navigator.clipboard.writeText(codeText).then(() => {
                // 显示复制成功提示
                const originalHTML = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i>';
                this.style.color = '#48bb78';

                setTimeout(() => {
                    this.innerHTML = originalHTML;
                    this.style.color = '';
                }, 2000);
            }).catch(err => {
                console.error('复制失败:', err);
            });
        });
    });
}

// 滚动监听
function initScrollSpy() {
    const sections = document.querySelectorAll('.doc-section');
    const navLinks = document.querySelectorAll('.docs-nav .nav-link');
    const tocLinks = document.querySelectorAll('.toc-nav a');

    function updateActiveSection() {
        const scrollPosition = window.scrollY + 100;

        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.id;
            }
        });

        // 更新导航活动状态
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });

        // 更新目录活动状态
        tocLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    // 节流函数
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    window.addEventListener('scroll', throttle(updateActiveSection, 100));
    updateActiveSection(); // 初始化
}

// 响应式侧边栏
function initResponsiveSidebar() {
    const sidebar = document.querySelector('.docs-sidebar');
    const navToggle = document.querySelector('.nav-toggle');

    if (!sidebar || !navToggle) return;

    // 移动端菜单切换
    navToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');

        // 动画汉堡菜单
        const spans = this.querySelectorAll('span');
        spans.forEach((span, index) => {
            span.style.transform = sidebar.classList.contains('active')
                ? (index === 0 ? 'rotate(45deg) translateY(8px)' :
                   index === 1 ? 'opacity(0)' :
                   'rotate(-45deg) translateY(-8px)')
                : 'none';
        });
    });

    // 点击外部关闭侧边栏
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(e.target) && !navToggle.contains(e.target)) {
                sidebar.classList.remove('active');

                // 重置汉堡菜单
                const spans = navToggle.querySelectorAll('span');
                spans.forEach(span => {
                    span.style.transform = 'none';
                });
            }
        }
    });

    // 窗口大小变化时重置
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            spans.forEach(span => {
                span.style.transform = 'none';
            });
        }
    });
}

// 添加键盘快捷键支持
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K 聚焦搜索框
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('docs-search');
        if (searchInput) {
            searchInput.focus();
        }
    }

    // ESC 清除搜索
    if (e.key === 'Escape') {
        const searchInput = document.getElementById('docs-search');
        if (searchInput && document.activeElement === searchInput) {
            searchInput.value = '';
            searchInput.dispatchEvent(new Event('input'));
            searchInput.blur();
        }
    }
});

// 打印功能
function printDocument() {
    window.print();
}

// 添加打印样式监听
window.addEventListener('beforeprint', function() {
    document.body.classList.add('printing');
});

window.addEventListener('afterprint', function() {
    document.body.classList.remove('printing');
});