// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 滚动动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 观察所有卡片元素
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.feature-card, .game-card, .tech-item');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});

// 导航栏滚动效果
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});



// Gallery 横向滚动控制
document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    const navLeft = document.querySelector('.gallery-nav-left');
    const navRight = document.querySelector('.gallery-nav-right');

    if (gallery && navLeft && navRight) {
        // 左箭头点击
        navLeft.addEventListener('click', () => {
            gallery.scrollBy({
                left: -350, // 滚动一张图片的宽度 + gap
                behavior: 'smooth'
            });
        });

        // 右箭头点击
        navRight.addEventListener('click', () => {
            gallery.scrollBy({
                left: 350, // 滚动一张图片的宽度 + gap
                behavior: 'smooth'
            });
        });

        // 根据滚动位置显示/隐藏箭头
        function updateNavButtons() {
            const scrollLeft = gallery.scrollLeft;
            const maxScroll = gallery.scrollWidth - gallery.clientWidth;

            // 如果在最左边，隐藏左箭头
            navLeft.style.opacity = scrollLeft <= 0 ? '0.3' : '1';
            navLeft.style.pointerEvents = scrollLeft <= 0 ? 'none' : 'auto';

            // 如果在最右边，隐藏右箭头
            navRight.style.opacity = scrollLeft >= maxScroll - 1 ? '0.3' : '1';
            navRight.style.pointerEvents = scrollLeft >= maxScroll - 1 ? 'none' : 'auto';
        }

        gallery.addEventListener('scroll', updateNavButtons);
        updateNavButtons(); // 初始化
    }
});

// Gallery Lightbox（图片画廊灯箱）
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');

    let currentIndex = 0;
    let galleryItems = [];

    // 初始化画廊项目
    function initGallery() {
        galleryItems = Array.from(document.querySelectorAll('.gallery-item'));

        galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                // 检查是否有实际图片
                const img = item.querySelector('img');
                if (img && img.src && !img.src.includes('placeholder')) {
                    openLightbox(index);
                }
            });
        });
    }

    // 打开灯箱
    function openLightbox(index) {
        currentIndex = index;
        updateLightboxContent();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // 禁止背景滚动
    }

    // 关闭灯箱
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // 恢复滚动
    }

    // 更新灯箱内容
    function updateLightboxContent() {
        const item = galleryItems[currentIndex];
        const img = item.querySelector('img');
        const caption = item.getAttribute('data-caption') || '';

        if (img) {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightboxCaption.textContent = caption;
        }
    }

    // 上一张
    function showPrev() {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        updateLightboxContent();
    }

    // 下一张
    function showNext() {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        updateLightboxContent();
    }

    // 事件监听
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (prevBtn) prevBtn.addEventListener('click', showPrev);
    if (nextBtn) nextBtn.addEventListener('click', showNext);

    // 点击背景关闭
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // 键盘控制
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showPrev();
        if (e.key === 'ArrowRight') showNext();
    });

    // 初始化
    initGallery();
});
