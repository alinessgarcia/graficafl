// Inicializar AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 50,
        mirror: false
    });

    // Mostrar banner de cookies
    showCookieBanner();

    // Configurar botão de aceitar cookies
    setupCookieButton();

    // Adicionar efeitos de scroll suave
    setupSmoothScroll();

    // Inicializar navbar e animações extras
    initNavbar();
    setupExtraAnimations();

    // Inicializar após DOM estar completamente pronto
    setTimeout(() => {
        setupServicePopups();
    }, 100);
});

// ===== RESTANTE DAS FUNÇÕES (mantidas iguais) =====

// Função para mostrar o banner de cookies
function showCookieBanner() {
    const cookieBanner = document.getElementById('cookie-banner');
    const cookieAccepted = localStorage.getItem('cookieAccepted');

    if (!cookieAccepted && cookieBanner) {
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 2000);
    }
}

// Função para configurar o botão de aceitar cookies
function setupCookieButton() {
    const cookieButton = document.getElementById('cookie-accept');
    const cookieBanner = document.getElementById('cookie-banner');

    if (cookieButton && cookieBanner) {
        cookieButton.addEventListener('click', function () {
            localStorage.setItem('cookieAccepted', 'true');
            cookieBanner.classList.remove('show');

            setTimeout(() => {
                cookieBanner.style.display = 'none';
            }, 300);
        });
    }
}

// Função para configurar scroll suave
function setupSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navbarHeight = 70; // Altura da navbar
                const elementPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Função para configurar animações extras
function setupExtraAnimations() {
    const whatsappFloat = document.getElementById('whatsapp-float');

    if (whatsappFloat) {
        whatsappFloat.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.1) rotate(10deg)';
        });

        whatsappFloat.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    }

    // Animação dos cards de serviços
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Animação dos cards de depoimentos
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    testimonialCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Função para adicionar efeito de fade no scroll
window.addEventListener('scroll', function () {
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
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('img');

    images.forEach(img => {
        img.addEventListener('load', function () {
            this.style.opacity = '1';
        });

        if (img.complete) {
            img.style.opacity = '1';
        }
    });
});

// Função para otimizar performance em dispositivos móveis
function optimizeForMobile() {
    if (window.innerWidth <= 768) {
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

window.addEventListener('load', optimizeForMobile);
window.addEventListener('resize', optimizeForMobile);

// Adicionar efeito de typing no subtítulo
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

window.addEventListener('load', function () {
    const subtitle = document.querySelector('.hero-subtitle');
    if (subtitle) {
        const originalText = subtitle.textContent;

        setTimeout(() => {
            typeWriter(subtitle, originalText, 30);
        }, 1500);
    }
});

// Funcionalidade do logo
document.addEventListener('DOMContentLoaded', function () {
    const logoLink = document.querySelector('.logo-link');
    const heroHeader = document.querySelector('.hero-header');

    if (logoLink) {
        logoLink.addEventListener('click', function (e) {
            e.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            this.style.transform = 'translateY(5px)';

            setTimeout(() => {
                this.style.transform = 'translateY(0)';
            }, 150);
        });

        logoLink.addEventListener('mouseenter', function () {
            const logo = this.querySelector('.logo');
            if (logo) logo.style.opacity = '0.8';
        });

        logoLink.addEventListener('mouseleave', function () {
            const logo = this.querySelector('.logo');
            if (logo) logo.style.opacity = '1';
        });
    }

    if (heroHeader) {
        window.addEventListener('scroll', function () {
            const scrolled = window.scrollY;

            if (scrolled > 100) {
                heroHeader.classList.add('scrolled');
            } else {
                heroHeader.classList.remove('scrolled');
            }
        });
    }
});

// ===== SISTEMA DE POPUPS DOS SERVIÇOS =====

const servicesData = {
    cpf: {
        title: 'Consultas CPF',
        subtitle: 'Informações completas sobre seu CPF, score de crédito e histórico financeiro',
        icon: 'cpf-gradient',
        features: [
            'Consulta de Score de Crédito atualizado',
            'Histórico de movimentações financeiras',
            'Empresas vinculadas ao seu CPF',
            'Antecedentes criminais e cíveis',
            'Protestos e negativações ativas',
            'Relatório completo impresso',
            'Orientações para limpeza do nome'
        ],
        whatsappMessage: 'Olá! Gostaria de fazer uma consulta de CPF. Podem me ajudar com informações sobre score, empresas vinculadas e histórico?'
    },
    inss: {
        title: 'Atendimento Meu INSS',
        subtitle: 'Serviços completos do INSS: extratos, agendamentos, benefícios e orientações',
        icon: 'inss-gradient',
        features: [
            'Extrato CNIS (Cadastro Nacional de Informações Sociais)',
            'Agendamento de perícia médica',
            'Consulta de benefícios ativos',
            'Simulação de aposentadoria',
            'Auxílio-doença e outros benefícios',
            'Orientações sobre direitos previdenciários',
            'Impressão de documentos oficiais'
        ],
        whatsappMessage: 'Olá! Preciso de ajuda com serviços do INSS. Gostaria de informações sobre extrato CNIS, agendamentos e benefícios.'
    },
    mei: {
        title: 'Serviços MEI',
        subtitle: 'Tudo para seu MEI: abertura, declarações, DAS e alterações cadastrais',
        icon: 'mei-gradient',
        features: [
            'Abertura de MEI completa',
            'Declaração Anual Simplificada (DASN)',
            'Emissão de DAS mensal',
            'Alterações cadastrais (endereço, atividade)',
            'Baixa de MEI quando necessário',
            'Orientações sobre obrigações fiscais',
            'Suporte completo para regularização'
        ],
        whatsappMessage: 'Olá! Preciso de ajuda com meu MEI. Gostaria de informações sobre abertura, declarações e emissão de DAS.'
    },
    design: {
        title: 'Design Gráfico',
        subtitle: 'Criação profissional de materiais gráficos para seu negócio',
        icon: 'design-gradient',
        features: [
            'Cardápios personalizados e plastificados',
            'Panfletos e flyers promocionais',
            'Cartões de visita profissionais',
            'Banners para eventos e promoções',
            'Logotipos e identidade visual',
            'Material para redes sociais',
            'Impressão em alta qualidade'
        ],
        whatsappMessage: 'Olá! Preciso de serviços de design gráfico. Gostaria de um orçamento para cardápios, panfletos ou cartões de visita.'
    },
    print: {
        title: 'Camisas Sublimáticas',
        subtitle: 'Impressão de alta qualidade com arte total e cores vibrantes',
        icon: 'print-gradient',
        features: [
            'Impressão sublimática Ultra HD',
            'Arte total (frente e verso)',
            'Cores vibrantes e duradouras',
            'Tecidos de alta qualidade',
            'Personalização completa',
            'Acabamento profissional',
            'Entrega rápida'
        ],
        whatsappMessage: 'Olá! Gostaria de fazer camisas sublimáticas personalizadas. Podem me passar informações sobre tecidos, cores e prazos?'
    },
    additional: {
        title: 'Serviços Adicionais',
        subtitle: 'Outros serviços digitais e documentais para facilitar sua vida',
        icon: 'additional-gradient',
        features: [
            'RG Digital (Documento de Identidade)',
            'Certidões de nascimento, casamento e óbito',
            'Segunda via de documentos',
            'Consultas de veículos (DETRAN)',
            'Impressões e cópias diversas',
            'Plastificação de documentos',
            'Orientações gerais sobre documentação'
        ],
        whatsappMessage: 'Olá! Preciso de ajuda com serviços adicionais como RG digital, certidões ou segunda via de documentos.'
    }
};

function setupServicePopups() {
    const serviceButtons = document.querySelectorAll('.service-btn-primary');
    const ctaButton = document.querySelector('.cta-button');
    const popupOverlay = document.getElementById('service-popup-overlay');
    const popupClose = document.getElementById('popup-close');
    const popupContent = document.getElementById('popup-content');

    if (!popupOverlay || !popupContent) {
        console.error('Popup elements missing!');
        return;
    }

    serviceButtons.forEach((button, index) => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            const serviceCard = this.closest('.service-card-modern');
            if (!serviceCard) {
                console.error('Service card not found for button', index);
                return;
            }

            const serviceType = serviceCard.getAttribute('data-service');
            openServicePopup(serviceType);
        });
    });

    if (ctaButton) {
        ctaButton.addEventListener('click', function () {
            window.open('http://wa.me/5513988032386?text=Olá! Gostaria de conhecer mais sobre os serviços da Gráfica FL. Podem me ajudar?', '_blank', 'noopener,noreferrer');
        });
    }

    if (popupClose) {
        popupClose.addEventListener('click', closeServicePopup);
    }

    if (popupOverlay) {
        popupOverlay.addEventListener('click', function (e) {
            if (e.target === popupOverlay) {
                closeServicePopup();
            }
        });
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && popupOverlay && popupOverlay.classList.contains('active')) {
            closeServicePopup();
        }
    });
}

let scrollPosition = 0;

function openServicePopup(serviceType) {
    const service = servicesData[serviceType];
    const popupOverlay = document.getElementById('service-popup-overlay');
    const popupContent = document.getElementById('popup-content');

    if (!service || !popupOverlay || !popupContent) {
        console.error('Popup elements not found');
        return;
    }

    scrollPosition = window.pageYOffset;

    const popupHTML = `
        <div class="popup-header ${service.icon}">
            <div class="popup-header-bg-effect"></div>
            <div class="popup-header-content">
                <div class="popup-icon">
                    ${getServiceIcon(serviceType)}
                </div>
                <div>
                    <h3 class="popup-title">${service.title}</h3>
                </div>
            </div>
        </div>
        
        <div class="popup-content">
            <p class="popup-description">${service.subtitle}</p>
            
            <div class="popup-features">
                <h4>O que está incluído:</h4>
                <ul class="features-list">
                    ${service.features.map(feature => `
                        <li>
                            <div class="feature-check ${service.icon}">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="20,6 9,17 4,12"></polyline>
                                </svg>
                            </div>
                            <span class="feature-text">${feature}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
            
            <div class="popup-actions">
                <a href="http://wa.me/5513988032386?text=${encodeURIComponent(service.whatsappMessage)}" 
                   target="_blank" class="popup-btn popup-btn-primary ${service.icon}">
                    <span class="whatsapp-text">Solicitar Orçamento</span>
                </a>
                <a href="http://wa.me/5513988032386?text=${encodeURIComponent(service.whatsappMessage)}" 
                   target="_blank" class="popup-btn popup-btn-secondary">
                    WhatsApp
                </a>
            </div>
        </div>
    `;

    popupContent.innerHTML = popupHTML;
    popupOverlay.classList.add('active');

    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = '100%';
}

function closeServicePopup() {
    const popupOverlay = document.getElementById('service-popup-overlay');
    if (popupOverlay) {
        popupOverlay.classList.remove('active');

        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';

        window.scrollTo(0, scrollPosition);
    }
}

function getServiceIcon(serviceType) {
    const icons = {
        cpf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>',
        inss: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14,2 14,8 20,8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10,9 9,9 8,9" /></svg>',
        mei: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18" /><path d="M5 21V7l8-4v18" /><path d="M19 21V11l-6-4" /></svg>',
        design: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>',
        print: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6,9 6,2 18,2 18,9" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect x="6" y="14" width="12" height="8" /></svg>',
        additional: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>'
    };

    return icons[serviceType] || icons.additional;
}

// ===== NAVBAR FUNCTIONALITY =====
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
    const navbarLinks = document.querySelectorAll('.navbar-link');

    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateNavbar() {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 100) {
            if (currentScrollY < lastScrollY) {
                navbar.classList.add('visible');
            } else {
                navbar.classList.remove('visible');
                navbarMenu.classList.remove('active');
                navbarToggle.classList.remove('active');
            }
        } else {
            navbar.classList.remove('visible');
        }

        lastScrollY = currentScrollY;
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick);

    if (navbarToggle) {
        navbarToggle.addEventListener('click', () => {
            navbarMenu.classList.toggle('active');
            navbarToggle.classList.toggle('active');
        });
    }

    const navbarClose = document.getElementById('navbar-close');
    if (navbarClose) {
        navbarClose.addEventListener('click', () => {
            navbarMenu.classList.remove('active');
            navbarToggle.classList.remove('active');
        });
    }

    navbarLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbarMenu.classList.remove('active');
            navbarToggle.classList.remove('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (navbar && !navbar.contains(e.target)) {
            navbarMenu.classList.remove('active');
            navbarToggle.classList.remove('active');
        }
    });
}