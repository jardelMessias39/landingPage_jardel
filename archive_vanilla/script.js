// --- CONFIGURAÇÃO DA ENGINE MATEMÁTICA (MATH PARTICLES) ---
const canvas = document.getElementById('math-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
let opCount = 0;
const MAX_OPS = 50;
let mouse = { x: -1000, y: -1000 };

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});
resize();

class Particle {
    constructor(type, value = null) {
        this.reset(type, value);
    }

    reset(type, value = null) {
        this.type = type; // 'num' ou 'op'
        this.value = value !== null ? value : (type === 'num' ? Math.floor(Math.random() * 9) + 1 : ['+', '-', '*', '/'][Math.floor(Math.random() * 4)]);
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        this.radius = 20;
        this.alpha = 1;
        this.glow = 0;
        this.isDragged = false;
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.isDragged ? 0.9 : (this.type === 'num' ? 0.4 : 0.6);
        ctx.fillStyle = (this.glow > 0 || this.isDragged) ? '#c8935f' : '#ffffff';
        ctx.shadowBlur = this.isDragged ? 15 : this.glow;
        ctx.shadowColor = '#c8935f';
        ctx.font = `${this.isDragged ? '28px' : (this.type === 'num' ? '16px' : '22px')} Inter`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.value, this.x, this.y);
        ctx.restore();
        if (this.glow > 0) this.glow -= 0.5;
    }

    update() {
        let dx = this.x - mouse.x;
        let dy = this.y - mouse.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 100) {
            this.isDragged = true;
            this.x -= (this.x - mouse.x) * 0.1;
            this.y -= (this.y - mouse.y) * 0.1;
            this.vx = (Math.random() - 0.5) * 2;
            this.vy = (Math.random() - 0.5) * 2;
        } else {
            this.isDragged = false;
            this.x += this.vx;
            this.y += this.vy;
        }

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }
}

function initParticles() {
    particles = [];
    opCount = 0;
    for (let i = 0; i < 60; i++) particles.push(new Particle('num'));
    for (let i = 0; i < 22; i++) particles.push(new Particle('op'));
}

function handleCollisions() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            let p1 = particles[i];
            let p2 = particles[j];
            let dx = p1.x - p2.x;
            let dy = p1.y - p2.y;
            let dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 30) {
                if (p1.type === 'num' && p2.type === 'num') {
                    p1.value = Math.min(999, p1.value + p2.value);
                    p1.glow = 20;
                    particles.splice(j, 1);
                    opCount++;
                } else if ((p1.type === 'op' && p2.type === 'num') || (p2.type === 'op' && p1.type === 'num')) {
                    let op = p1.type === 'op' ? p1 : p2;
                    let num = p1.type === 'num' ? p1 : p2;
                    let nearest = null;
                    let minDist = 1000;
                    particles.forEach(p => {
                        if (p.type === 'num' && p !== num) {
                            let d = Math.sqrt(Math.pow(p.x - op.x, 2) + Math.pow(p.y - op.y, 2));
                            if (d < minDist) { minDist = d; nearest = p; }
                        }
                    });
                    if (nearest && minDist < 100) {
                        let res;
                        if (op.value === '+') res = num.value + nearest.value;
                        if (op.value === '-') res = Math.abs(num.value - nearest.value);
                        if (op.value === '*') res = num.value * nearest.value;
                        if (op.value === '/') res = Math.floor(num.value / (nearest.value || 1));
                        num.value = Math.min(999, res || 1);
                        num.glow = 30;
                        particles = particles.filter(p => p !== op && p !== nearest);
                        opCount++;
                    }
                }
            }
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    handleCollisions();
    if (opCount > MAX_OPS || particles.filter(p => p.type === 'num').length < 5) initParticles();
    requestAnimationFrame(animate);
}

initParticles();
animate();

// --- MENU MOBILE E ANIMAÇÕES DE SCROLL ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('active'));
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// --- LÓGICA DO FAQ (ACORDEÃO) ---
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        faqItem.classList.toggle('active');
    });
});

// --- EFEITO 3D TILT (INCLINAÇÃO) ---
const tiltElements = document.querySelectorAll('.service-card, .portfolio-item, .price-card');

tiltElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });

    el.addEventListener('mouseleave', () => {
        el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
});

// --- FORMULÁRIO DE CONTATO (GOOGLE SHEETS) ---
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast show ${type}`;
    setTimeout(() => toast.classList.remove('show'), 5000);
}

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const data = {
            name: this.name.value,
            email: this.email.value,
            phone: this.phone.value,
            service: this.service.value,
            message: this.message.value
        };
        fetch('https://script.google.com/macros/s/AKfycbyDYCpQ4mRHp5okCyZ9qNH-974bbvD7MGOE2Eygnulg3DUyUmsfFb2DzOkq0zdGm4kp/exec', {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(() => {
            showToast('Mensagem enviada com sucesso! Entrarei em contato em breve.');
            this.reset();
        }).catch(() => {
            showToast('Erro ao enviar. Tente novamente ou me chame no WhatsApp.', 'error');
        });
    });
}
