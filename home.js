// Hero Section Animation
const phrases = ["Think", "Create", "Build"];
let index = 0;
const subtext = document.getElementById("subtext");

function animateText(text) {
    subtext.innerHTML = ""; //clear previous text
    text.split('').forEach(function (char, i) {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.animationDelay = `${i * 100}ms`;
        subtext.appendChild(span);
    });
}

// Initialize and set interval for text animation
animateText(phrases[index]);
setInterval(() => {
    index = (index + 1) % phrases.length;
    animateText(phrases[index]);
}, 3000);

// Stats Counter Animation
const animateValue = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = `${value}+`;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

// Intersection Observer for Stats
const stats = document.querySelectorAll('.stat-card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add fade-in animation
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            
            // Animate the counter
            const numberElement = entry.target.querySelector('.stat-number');
            const targetValue = parseInt(entry.target.dataset.target);
            animateValue(numberElement, 0, targetValue, 2000);
            
            // Stop observing after animation
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

// Start observing stats
stats.forEach(stat => observer.observe(stat));

// Newsletter Form Handling
document.getElementById('newsletterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    alert('Thank you for subscribing! We\'ll keep you updated.');
    this.reset();
});