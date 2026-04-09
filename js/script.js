// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
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

// Contact form submission
// document.querySelector('.contact-form').addEventListener('submit', function(e) {
//     e.preventDefault();
//     alert('Thank you for your message! We will contact you soon.');
//     this.reset();
// });

// ================= HERO SLIDER =================
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".nav-dot");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentSlide = 0;

// Show Slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (dots[i]) dots[i].classList.remove("active");
    });

    slides[index].classList.add("active");
    if (dots[index]) dots[index].classList.add("active");
}

// Next Slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Previous Slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Auto Slide
setInterval(nextSlide, 4000);

// Arrow Controls
if (nextBtn) nextBtn.addEventListener("click", nextSlide);
if (prevBtn) prevBtn.addEventListener("click", prevSlide);

// Dot Controls
dots.forEach(dot => {
    dot.addEventListener("click", (e) => {
        currentSlide = parseInt(e.target.dataset.slide);
        showSlide(currentSlide);
    });
});


// ================= COUNTER ANIMATION =================
const counters = document.querySelectorAll(".stat-number");

const runCounter = (counter) => {
    const target = +counter.getAttribute("data-target");
    let count = 0;

    const update = () => {
        const increment = target / 100;

        if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count);
            setTimeout(update, 20);
        } else {
            counter.innerText = target;
        }
    };

    update();
};

// Trigger counter on scroll
let started = false;

window.addEventListener("scroll", () => {
    const section = document.querySelector(".stats-section");

    if (section && !started && window.scrollY > section.offsetTop - 300) {
        counters.forEach(counter => runCounter(counter));
        started = true;
    }
});


// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#fff';
        navbar.style.backdropFilter = 'none';
    }
});