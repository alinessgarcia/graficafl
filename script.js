// Inicializar AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false,
        offset: 100,
        mirror: true
    });
    
    // Mostrar banner de cookies
    showCookieBanner();
    
    // Configurar botão de aceitar cookies
    setupCookieButton();
    
    // Adicionar efeitos de scroll suave
    setupSmoothScroll();
    
    // Adicionar animações extras
    setupExtraAnimations();
});

// Função para mostrar o banner de cookies
function showCookieBanner() {
    const cookieBanner = document.getElementById('cookie-banner');
    const cookieAccepted = localStorage.getItem('cookieAccepted');
    
    if (!cookieAccepted) {
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 2000);
    }
}

// Função para configurar o botão de aceitar cookies
function setupCookieButton() {
    const cookieButton = document.getElementById('cookie-accept');
    const cookieBanner = document.getElementById('cookie-banner');
    
    cookieButton.addEventListener('click', function() {
        localStorage.setItem('cookieAccepted', 'true');
        cookieBanner.classList.remove('show');
        
        setTimeout(() => {
            cookieBanner.style.display = 'none';
        }, 300);
    });
}

// Função para configurar scroll suave
function setupSmoothScroll() {
    // Adicionar comportamento de scroll suave para links internos
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Função para configurar animações extras
function setupExtraAnimations() {
    // Animação do botão WhatsApp flutuante
    const whatsappFloat = document.getElementById('whatsapp-float');
    
    // Adicionar efeito de hover personalizado
    whatsappFloat.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(10deg)';
    });
    
    whatsappFloat.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
    
    // Animação dos cards de serviços
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Animação dos cards de depoimentos
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    testimonialCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Função para adicionar efeito parallax suave no hero
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && heroContent) {
        const rate = scrolled * -0.5;
        heroContent.style.transform = `translateY(${rate}px)`;
    }
});

// Função para adicionar efeito de fade no scroll
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const elements = document.querySelectorAll('.service-card, .testimonial-card');
    
    elements.forEach(element => {
        const elementTop = element.offsetTop;
        const elementHeight = element.offsetHeight;
        
        if (scrolled + windowHeight > elementTop + elementHeight / 4) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// Adicionar loading state para imagens
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Se a imagem já estiver carregada
        if (img.complete) {
            img.style.opacity = '1';
        }
    });
});

// Função para otimizar performance em dispositivos móveis
function optimizeForMobile() {
    if (window.innerWidth <= 768) {
        // Reduzir animações em dispositivos móveis
        const style = document.createElement('style');
        style.textContent = `
            * {
                animation-duration: 0.5s !important;
                transition-duration: 0.2s !important;
            }
        `;
        document.head.appendChild(style);
    }
}

// Executar otimização no carregamento e redimensionamento
window.addEventListener('load', optimizeForMobile);
window.addEventListener('resize', optimizeForMobile);

// Adicionar efeito de typing no subtítulo (opcional)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Ativar efeito de typing após carregamento
window.addEventListener('load', function() {
    const subtitle = document.querySelector('.hero-subtitle');
    const originalText = subtitle.textContent;
    
    setTimeout(() => {
        typeWriter(subtitle, originalText, 30);
    }, 1500);
});

// Funcionalidade do logo - voltar ao topo
document.addEventListener('DOMContentLoaded', function() {
    const logoLink = document.querySelector('.logo-link');
    
    if (logoLink) {
        logoLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Scroll suave para o topo
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // Efeito visual no logo - afundar mais
            this.style.transform = 'translateY(5px)';
            
            setTimeout(() => {
                this.style.transform = 'translateY(0)';
            }, 150);
        });
        
        // Efeito hover adicional - apenas visual feedback
        logoLink.addEventListener('mouseenter', function() {
            const logo = this.querySelector('.logo');
            logo.style.opacity = '0.8';
        });
        
        logoLink.addEventListener('mouseleave', function() {
            const logo = this.querySelector('.logo');
            logo.style.opacity = '1';
        });
    }
});