// ============================================
// ABOUT PAGE JAVASCRIPT - Vertex Industries Inc
// ============================================

// 1. Counter Animation for Stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                if (current > target) current = target;
                
                const isThousand = target >= 1000;
                const displayValue = isThousand ? 
                    (Math.floor(current / 1000) + 'k') : 
                    (Math.floor(current) + '+');
                
                counter.textContent = displayValue;
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = isThousand ? (target/1000 + 'k') : (target + '+');
            }
        };
        
        updateCounter();
    };
    
    counters.forEach(counter => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(counter);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.7 });
        
        observer.observe(counter);
    });
}

// 2. Timeline Animation
function animateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    });
    
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = `all 0.6s ease ${index * 0.2}s`;
        observer.observe(item);
    });
}

// 3. Feature Cards Hover Animation
function animateFeatureCards() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// 4. Team Members Animation
function animateTeamMembers() {
    const teamMembers = document.querySelectorAll('.team-member');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    teamMembers.forEach((member, index) => {
        member.style.opacity = '0';
        member.style.transform = 'translateY(30px)';
        member.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(member);
    });
}

// 5. Smooth Scroll for Internal Links
function smoothScroll() {
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
}

// 6. Navbar Active State
function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// 7. Mobile Navigation (Enhanced)
function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-container')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }
}

// 8. Navbar Scroll Effect
function navbarScrollEffect() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.backdropFilter = 'blur(20px)';
            navbar.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = '#fff';
            navbar.style.backdropFilter = 'none';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });
}

// ============================================
// INITIALIZE ALL FUNCTIONS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Core functionality
    setActiveNav();
    initMobileNav();
    navbarScrollEffect();
    smoothScroll();
    
    // About page specific animations
    animateCounters();
    animateTimeline();
    animateFeatureCards();
    animateTeamMembers();
    
    // Hero effects
    parallaxHero();
    
    // Window resize handler
    window.addEventListener('resize', () => {
        setActiveNav();
    });
});

// ============================================
// PERFORMANCE OPTIMIZATIONS
// ============================================

// Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Preload critical images
function preloadImages() {
    const images = [
        'images/about-hero.jpg',
        'images/about-hero-bg.jpg'
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize optimizations
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        lazyLoadImages();
        preloadImages();
    });
} else {
    lazyLoadImages();
    preloadImages();
}

const tags = document.querySelectorAll('.cap-tags span');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.querySelector('.close-btn');

tags.forEach(tag => {
    tag.addEventListener('click', () => {
        const imgSrc = tag.getAttribute('data-img');
        modalImg.src = imgSrc;
        modal.classList.add('active');
    });
});

// Close button
closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Close on outside click
modal.addEventListener('click', (e) => {
    if (e.target !== modalImg) {
        modal.classList.remove('active');
    }
});