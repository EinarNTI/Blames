let currentTheme = 'light';

function loadThemeFromStorage() {
    currentTheme = 'light';
}

function initTheme() {
    loadThemeFromStorage();
    document.documentElement.setAttribute('data-theme', currentTheme);
}

function setupResponsiveLayout() {
    const mobileMQ = window.matchMedia('(max-width: 768px)');
    const desktopMQ = window.matchMedia('(min-width: 769px)');

    function updateLayout() {
        if (mobileMQ.matches) {
            document.body.classList.add('mobile');
            document.body.classList.remove('desktop');
        } else {
            document.body.classList.add('desktop');
            document.body.classList.remove('mobile');
        }
    }

    mobileMQ.addListener(updateLayout);
    desktopMQ.addListener(updateLayout);
    updateLayout();
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.3, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.timeline-item').forEach(item => observer.observe(item));

document.querySelector('.scroll-indicator')?.addEventListener('click', () => {
    document.querySelector('.timeline-container').scrollIntoView({ behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    const parallax = document.querySelector('.hero-background');
    parallax.style.transform = `translateY(${window.pageYOffset * 0.5}px)`;
});

initTheme();
setupResponsiveLayout();
window.addEventListener('resize', setupResponsiveLayout);