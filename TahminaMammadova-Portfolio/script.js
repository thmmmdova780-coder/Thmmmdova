
let isDarkMode = true; 
const body = document.body;
const icon = document.getElementById('theme-icon');
const heroTitle = document.getElementById('animatedText');

function toggleTheme() {
    isDarkMode = !isDarkMode; 
    body.classList.toggle('light-mode');

    if (isDarkMode) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        reanimateText("DARK MOON");
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        reanimateText("SUN BLOOM");
    }

    
    document.querySelectorAll('.particle').forEach(p => p.remove());
}


function reanimateText(text) {
    heroTitle.innerHTML = ''; 
    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        const char = text[i];
        if (char === ' ') { span.classList.add('space'); } 
        else { 
            span.classList.add('letter');
            span.innerText = char;
            span.style.animationDelay = `${i * 0.1}s`;
        }
        heroTitle.appendChild(span);
    }
}
reanimateText("DARK MOON");


const heroSection = document.getElementById('hero-section');

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    if (isDarkMode) {
        particle.classList.add('stardust');
        var size = Math.random() * 5 + 3;
    } else {
        particle.classList.add('petal');
        var size = Math.random() * 10 + 8;
    }

    const startLeft = Math.random() * window.innerWidth;
    const duration = Math.random() * 5 + 3;
    
    particle.style.left = startLeft + 'px';
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.animationDuration = duration + 's';
    
    heroSection.appendChild(particle);
    
    setTimeout(() => { particle.remove(); }, duration * 1000);
}

setInterval(createParticle, 150);


function toggleMenu() {
    const nav = document.getElementById('navMenu');
    const bars = document.querySelectorAll('.bar');
    nav.classList.toggle('active');

    
    if(nav.classList.contains('active')){
        bars[0].style.transform = "rotate(45deg) translate(5px, 6px)";
        bars[1].style.opacity = "0";
        bars[2].style.transform = "rotate(-45deg) translate(5px, -6px)";
    } else {
        bars[0].style.transform = "none";
        bars[1].style.opacity = "1";
        bars[2].style.transform = "none";
    }
}