// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const ptLangBtn = document.getElementById('pt-lang');
const enLangBtn = document.getElementById('en-lang');
const ptLangBtnMobile = document.getElementById('pt-lang-mobile');
const enLangBtnMobile = document.getElementById('en-lang-mobile');
const projectCards = document.querySelectorAll('.project-card');
const projectModal = document.getElementById('project-modal');
const closeModal = document.getElementById('close-modal');
const navLinks = document.querySelectorAll('.nav-link');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

// Current year for copyright
document.getElementById('current-year').textContent = new Date().getFullYear();

// Check for saved theme preference or use system preference
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    
    if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Mobile menu toggle
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    
    // Change icon based on menu state
    const icon = mobileMenuButton.querySelector('i');
    if (mobileMenu.classList.contains('hidden')) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    } else {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    }
});

// Close mobile menu when clicking on a link
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        const icon = mobileMenuButton.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Active link state based on scroll position
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    // Get all sections
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Remove active class from all links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            mobileNavLinks.forEach(link => {
                link.classList.remove('active');
            });
            
            // Add active class to current section link
            document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.add('active');
            document.querySelector(`.mobile-nav-link[href="#${sectionId}"]`)?.classList.add('active');
        }
    });
});

// Animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-in');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.slide-in').forEach(el => {
    observer.observe(el);
});

// Language Switcher
const translations = {
    'pt': {
        'home': 'Início',
        'about': 'Sobre',
        'skills': 'Tecnologias',
        'projects': 'Projetos',
        'contact': 'Contato',
        'hero-title': 'Olá, eu sou<br><span class="gradient-text">Danilo Correia</span>',
        'hero-subtitle': 'Desenvolvedor de Software',
        'hero-description': 'Especializado em criar soluções web elegantes e funcionais com foco em experiência do usuário e desempenho.',
        'view-projects': 'Ver Projetos',
        'contact-me': 'Contate-me',
        'about-title': 'Sobre Mim',
        'background-title': 'Minha Trajetória',
        'background-description': 'Sou um Desenvolvedor de Software com formação em Sistemas de Informação pela UPIS (2024). Estou em transição para a área de tecnologia, após 8 anos de experiência nas Forças Armadas - Exército Brasileiro como Cabo.',
        'background-description-2': 'Durante minha carreira militar, desenvolvi competências essenciais como liderança, tomada de decisões sob pressão e trabalho em equipe, sendo reconhecido com distinções como Honra ao Mérito e Referências Elogiosas.',
        'objective-title': 'Objetivo Profissional',
        'objective-description': 'Busco me tornar um desenvolvedor capacitado e versátil, integrando as habilidades adquiridas na carreira militar com conhecimentos em programação para contribuir em projetos desafiadores e de impacto.',
        'objective-description-2': 'Estou comprometido com o aprendizado contínuo de diversas linguagens de programação e tecnologias. No futuro, viso liderar equipes de alto desempenho, promovendo inovação e resultados que impulsionem o crescimento organizacional.',
        'education-title': 'Educação',
        'education-description': 'Bacharel em Sistemas de Informação – UPIS - 2024<br>Múltiplas certificações em desenvolvimento web, Python, JavaScript, Django, IA e mais.',
        'experience-title': 'Experiência',
        'experience-description': 'FORÇAS ARMADAS - EXÉRCITO BRASILEIRO | Graduação (Cabo)<br>8 anos de experiência militar (2016-2024)<br>Experiência prévia como Jovem Aprendiz em vendas e administração',
        'skills-title': 'Habilidades',
        'skills-description': 'Desenvolvimento Web Front-end e Back-end<br>Inglês Avançado<br>Liderança e trabalho em equipe<br>Gestão de projetos',
        'tech-title': 'Tecnologias',
        'tech-description': 'Estas são as tecnologias com as quais trabalho e continuo aprimorando minhas habilidades.',
        'projects-title': 'Meus Projetos',
        'projects-description': 'Aqui estão alguns dos meus projetos recentes. Clique nos cards para mais detalhes.',
        'imovel-facil-description': 'Sistema completo para compra e venda de imóveis e lotes, com chat em tempo real e sistema de pagamento integrado.',
        'ancore-description': 'Sistema de Gerenciamento de Projetos e Obras para empresas de engenharia civil, elétrica e arquitetura.',
        'sge-description': 'Sistema de Gestão de Estoques e Vendas, desenvolvido para pequena empresa de Designer Gráfico.',
        'ia-description': 'Aplicação web de Chat Multimodal com recursos de IA avançados desenvolvido para TCC.',
        'anonymous-description': 'Aplicação web de portfólio e cadastro de pessoas, inspirado pela filosofia do Anonymous.',
        'awax-description': 'Aplicação web de desenvolvimento de Site Corporativo com design moderno.',
        'portfolio-description': 'Portfólio com especificação dos projetos e tecnologias utilizadas.',
        'more-projects': 'Ver mais projetos no GitHub',
        'project-description': 'Descrição',
        'project-features': 'Funcionalidades',
        'project-technologies': 'Tecnologias Utilizadas',
        'view-live': 'Ver ao vivo',
        'view-code': 'Ver código',
        'contact-title': 'Contato',
        'contact-description': 'Interessado em trabalhar juntos? Entre em contato comigo através dos canais abaixo.',
        'contact-info': 'Informações de Contato',
        'email-address': 'Endereço de Email',
        'phone-number': 'Número de Telefone',
        'location': 'Localização',
        'social-profiles': 'Redes Sociais',
        'copyright': '&copy; ' + new Date().getFullYear() + ' Danilo Correia. Todos os direitos reservados.'
    },
    'en': {
        'home': 'Home',
        'about': 'About',
        'skills': 'Skills',
        'projects': 'Projects',
        'contact': 'Contact',
        'hero-title': 'Hello, I\'m<br><span class="gradient-text">Danilo Correia</span>',
        'hero-subtitle': 'Software Developer',
        'hero-description': 'Specialized in creating elegant and functional web solutions with a focus on user experience and performance.',
        'view-projects': 'View Projects',
        'contact-me': 'Contact Me',
        'about-title': 'About Me',
        'background-title': 'My Journey',
        'background-description': 'I\'m a Software Developer with a Bachelor\'s degree in Information Systems from UPIS (2024). I\'m transitioning to the technology field after 8 years of experience in the Brazilian Army as a Corporal.',
        'background-description-2': 'During my military career, I developed essential skills such as leadership, decision-making under pressure, and teamwork, being recognized with distinctions such as Honor of Merit and Commendations.',
        'objective-title': 'Professional Objective',
        'objective-description': 'I aim to become a skilled and versatile developer, integrating the abilities acquired in my military career with programming knowledge to contribute to challenging and impactful projects.',
        'objective-description-2': 'I am committed to continuously learning various programming languages and technologies. In the future, I aim to lead high-performance teams, promoting innovation and results that drive organizational growth.',
        'education-title': 'Education',
        'education-description': 'Bachelor\'s in Information Systems – UPIS - 2024<br>Multiple certifications in web development, Python, JavaScript, Django, AI, and more.',
        'experience-title': 'Experience',
        'experience-description': 'BRAZILIAN ARMY | Corporal<br>8 years of military experience (2016-2024)<br>Previous experience as a Young Apprentice in sales and administration',
        'skills-title': 'Skills',
        'skills-description': 'Front-end and Back-end Web Development<br>Advanced English<br>Leadership and teamwork<br>Project management',
        'tech-title': 'Technologies',
        'tech-description': 'These are the technologies I work with and continue to improve my skills in.',
        'projects-title': 'My Projects',
        'projects-description': 'Here are some of my recent projects. Click on the cards for more details.',
        'imovel-facil-description': 'Complete system for buying and selling real estate and lots, with real-time chat and integrated payment system.',
        'ancore-description': 'Project and Construction Management System for civil engineering, electrical, and architecture companies.',
        'sge-description': 'Inventory and Sales Management System, developed for a small Graphic Designer company.',
        'ia-description': 'Multimodal Chat Web Application with advanced AI features developed for my final project.',
        'anonymous-description': 'Portfolio web application and user registration, inspired by the Anonymous philosophy.',
        'awax-description': 'Corporate Website Development web application with modern design.',
        'portfolio-description': 'Portfolio with specification of projects and technologies used.',
        'more-projects': 'See more projects on GitHub',
        'project-description': 'Description',
        'project-features': 'Features',
        'project-technologies': 'Technologies Used',
        'view-live': 'View Live',
        'view-code': 'View Code',
        'contact-title': 'Contact',
        'contact-description': 'Interested in working together? Contact me through the channels below.',
        'contact-info': 'Contact Information',
        'email-address': 'Email Address',
        'phone-number': 'Phone Number',
        'location': 'Location',
        'social-profiles': 'Social Profiles',
        'copyright': '&copy; ' + new Date().getFullYear() + ' Danilo Correia. All rights reserved.'
    }
};

// Set initial language
let currentLang = localStorage.getItem('language') || 'pt';
setLanguage(currentLang);

// Language switch buttons
[ptLangBtn, ptLangBtnMobile].forEach(btn => {
    btn.addEventListener('click', () => {
        setLanguage('pt');
    });
});

[enLangBtn, enLangBtnMobile].forEach(btn => {
    btn.addEventListener('click', () => {
        setLanguage('en');
    });
});

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update UI language buttons
    if (lang === 'pt') {
        ptLangBtn.classList.remove('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');
        ptLangBtn.classList.add('bg-gray-700', 'dark:bg-gray-900', 'text-gray-100', 'dark:text-gray-300');
        
        enLangBtn.classList.remove('bg-gray-700', 'dark:bg-gray-900', 'text-gray-100', 'dark:text-gray-300');
        enLangBtn.classList.add('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');
        
        ptLangBtnMobile.classList.remove('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');
        ptLangBtnMobile.classList.add('bg-gray-700', 'dark:bg-gray-900', 'text-gray-100', 'dark:text-gray-300');
        
        enLangBtnMobile.classList.remove('bg-gray-700', 'dark:bg-gray-900', 'text-gray-100', 'dark:text-gray-300');
        enLangBtnMobile.classList.add('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');
    } else {
        enLangBtn.classList.remove('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');
        enLangBtn.classList.add('bg-gray-700', 'dark:bg-gray-900', 'text-gray-100', 'dark:text-gray-300');
        
        ptLangBtn.classList.remove('bg-gray-700', 'dark:bg-gray-900', 'text-gray-100', 'dark:text-gray-300');
        ptLangBtn.classList.add('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');
        
        enLangBtnMobile.classList.remove('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');
        enLangBtnMobile.classList.add('bg-gray-700', 'dark:bg-gray-900', 'text-gray-100', 'dark:text-gray-300');
        
        ptLangBtnMobile.classList.remove('bg-gray-700', 'dark:bg-gray-900', 'text-gray-100', 'dark:text-gray-300');
        ptLangBtnMobile.classList.add('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');
    }
    
    // Update all text elements
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (key && translations[lang][key]) {
            if (key.includes('title') || key.includes('description')) {
                el.innerHTML = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
}

// Project data
const projectsData = {
    'imovel-facil': {
        title: 'ImóvelFácil',
        image: 'img/imovelfacil.png',
        description: {
            'pt': 'Sistema completo para compra e venda de imóveis e lotes com funcionalidades avançadas. Inclui sistema de cadastro de usuários, anúncios gratuitos e em destaque (pagos), chat em tempo real entre compradores e vendedores, e dashboard administrativo completo.',
            'en': 'Complete system for buying and selling real estate and lots with advanced features. Includes user registration system, free and featured (paid) listings, real-time chat between buyers and sellers, and comprehensive administrative dashboard.'
        },
        features: {
            'pt': [
                'Cadastro e autenticação de usuários',
                'Sistema de chat em tempo real',
                'Anúncios gratuitos e sistema de destaque pago',
                'Integração com Mercado Pago',
                'Filtragem avançada de imóveis',
                'Dashboard administrativo completo',
                'Design responsivo e moderno',
                'Banco de dados SQLite/MySQL'
            ],
            'en': [
                'User registration and authentication',
                'Real-time chat system',
                'Free listings and paid highlight system',
                'Mercado Pago integration',
                'Advanced property filtering',
                'Complete administrative dashboard',
                'Responsive and modern design',
                'SQLite/MySQL database'
            ]
        },
        technologies: ['HTML', 'CSS', 'TailwindCSS', 'JavaScript', 'Python', 'Django', 'SQLite', 'MySQL', 'Mercado Pago API'],
        liveUrl: '#',
        githubUrl: 'https://github.com/DaniloCorreia1',
        icon: 'fa-house'
    },

    'ancore': {
        title: 'ANCORE',
        image: 'img/ancore.png',
        description: {
            'pt': 'Sistema de Gerenciamento de Projetos e Obras desenvolvido para empresas de engenharia civil, elétrica e arquitetura. Permite gerenciar projetos, equipes, cronogramas, orçamentos e documentos em uma única plataforma integrada.',
            'en': 'Project and Construction Management System developed for civil engineering, electrical, and architecture companies. It allows managing projects, teams, schedules, budgets, and documents in a single integrated platform.'
        },
        features: {
            'pt': [
                'Gerenciamento de projetos e obras',
                'Controle de orçamentos e cronogramas',
                'Gestão de equipes e recursos',
                'Documentação técnica e relatórios',
                'Dashboard com indicadores de desempenho',
                'Sistema de notificações e alertas'
            ],
            'en': [
                'Project and construction management',
                'Budget and schedule control',
                'Team and resource management',
                'Technical documentation and reports',
                'Dashboard with performance indicators',
                'Notification and alert system'
            ]
        },
        technologies: ['HTML', 'CSS', 'Django', 'Python', 'Bootstrap', 'JavaScript', 'MySQL', 'PythonAnywhere'],
        liveUrl: '#',
        githubUrl: 'https://github.com/DaniloCorreia1',
        icon: 'fa-building'
    },
    'sge': {
        title: 'SGE',
        image: 'img/bdsge.png',
        description: {
            'pt': 'Sistema de Gestão de Estoques e Vendas desenvolvido para uma pequena empresa de Designer Gráfico. Permite controlar estoque, gerenciar vendas, gerar relatórios e acompanhar o desempenho do negócio.',
            'en': 'Inventory and Sales Management System developed for a small Graphic Designer company. It allows controlling inventory, managing sales, generating reports, and tracking business performance.'
        },
        features: {
            'pt': [
                'Controle de estoque com alertas de baixo estoque',
                'Gestão de vendas e pedidos',
                'Cadastro de clientes e fornecedores',
                'Relatórios gerenciais e financeiros',
                'Controle de pagamentos e recebimentos',
                'Interface responsiva para acesso em dispositivos móveis'
            ],
            'en': [
                'Inventory control with low stock alerts',
                'Sales and order management',
                'Customer and supplier registration',
                'Management and financial reports',
                'Payment and receipt control',
                'Responsive interface for mobile device access'
            ]
        },
        technologies: ['HTML', 'CSS', 'Django', 'Python', 'Bootstrap', 'JavaScript', 'PostgreSQL', 'AWS EC2'],
        liveUrl: '#',
        githubUrl: 'https://github.com/DaniloCorreia1',
        icon: 'fa-boxes-stacked'
    },
    'ia-assistente': {
        title: 'IA Assistente',
        image: 'img/ia.png',
        description: {
            'pt': 'Aplicação web de Chat Multimodal com recursos de IA avançados desenvolvido para meu TCC. Integra reconhecimento de voz, processamento de linguagem natural e análise de PDFs para criar uma experiência de assistente virtual completa.',
            'en': 'Multimodal Chat Web Application with advanced AI features developed for my final project. It integrates voice recognition, natural language processing, and PDF analysis to create a complete virtual assistant experience.'
        },
        features: {
            'pt': [
                'Reconhecimento de voz para interação por comando de voz',
                'Processamento de Linguagem Natural (PLN)',
                'Conversão de texto para fala (Text-to-Speech)',
                'Análise e extração de conteúdo de arquivos PDF',
                'Interface de chat intuitiva e responsiva',
                'Integração com API OpenAI'
            ],
            'en': [
                'Voice recognition for voice command interaction',
                'Natural Language Processing (NLP)',
                'Text-to-Speech conversion',
                'Analysis and content extraction from PDF files',
                'Intuitive and responsive chat interface',
                'OpenAI API integration'
            ]
        },
        technologies: ['HTML', 'CSS', 'Django', 'Python', 'JavaScript', 'PythonAnywhere', 'OpenAI API', 'NLP', 'Voice Recognition', 'Text-to-Speech', 'PDF Analysis'],
        liveUrl: '#',
        githubUrl: 'https://github.com/DaniloCorreia1',
        icon: 'fa-robot'
    },
    'anonymous': {
        title: 'Anonymous',
        image: 'img/anonymous.png',
        description: {
            'pt': 'Aplicação web de portfólio e cadastro de pessoas, inspirado pela filosofia do Anonymous. Design minimalista e elegante com foco na privacidade e segurança dos usuários.',
            'en': 'Portfolio web application and user registration, inspired by the Anonymous philosophy. Minimalist and elegant design with a focus on user privacy and security.'
        },
        features: {
            'pt': [
                'Design minimalista inspirado no movimento Anonymous',
                'Sistema de cadastro de usuários',
                'Área de portfolio personalizável',
                'Interface responsiva e moderna'
            ],
            'en': [
                'Minimalist design inspired by the Anonymous movement',
                'User registration system',
                'Customizable portfolio area',
                'Responsive and modern interface'
            ]
        },
        technologies: ['HTML', 'CSS'],
        liveUrl: 'https://danilocorreia1.github.io/anonymous/',
        githubUrl: 'https://github.com/DaniloCorreia1/anonymous',
        icon: 'fa-mask'
    },
    'projeto-awax': {
        title: 'Projeto Awax',
        image: 'img/axax.png',
        description: {
            'pt': 'Aplicação web de desenvolvimento de Site Corporativo com design moderno. Template completo para empresas que buscam uma presença online profissional e impactante.',
            'en': 'Corporate Website Development web application with modern design. Complete template for companies looking for a professional and impactful online presence.'
        },
        features: {
            'pt': [
                'Layout moderno e profissional',
                'Seções para apresentação da empresa, serviços e portfolio',
                'Página de contato',
                'Design responsivo para todos os dispositivos',
                'Animações e transições suaves'
            ],
            'en': [
                'Modern and professional layout',
                'Sections for company presentation, services, and portfolio',
                'Contact page',
                'Responsive design for all devices',
                'Smooth animations and transitions'
            ]
        },
        technologies: ['HTML', 'CSS'],
        liveUrl: 'https://danilocorreia1.github.io/Projeto-Awax/',
        githubUrl: 'https://github.com/DaniloCorreia1/Projeto-Awax',
        icon: 'fa-desktop'
    },
};

// Project modal
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        showProjectModal(card.getAttribute('data-project'));
    });
});

// A correção principal está na função de exibição e fechamento do modal

// Função corrigida para mostrar o modal do projeto
function showProjectModal(projectId) {
    const project = projectsData[projectId];
    
    if (project) {
        // Set project data in modal
        document.getElementById('project-modal-title').textContent = project.title;
        document.getElementById('project-modal-description').textContent = project.description[currentLang];
        
        // Set project image
        const modalImg = document.getElementById('project-modal-img');
        if (project.image) {
            modalImg.src = project.image;
            modalImg.alt = project.title;
            modalImg.classList.remove('hidden');
            document.getElementById('project-modal-image').classList.add('bg-black/30');
        } else {
            modalImg.classList.add('hidden');
            document.getElementById('project-modal-image').classList.remove('bg-black/30');
        }
        
        // Set project icon
        const projectIcon = document.querySelector('.project-icon');
        projectIcon.className = '';
        projectIcon.classList.add('fa-solid', project.icon, 'text-8xl', 'text-white/30');
        
        // Clear and populate features list
        const featuresList = document.getElementById('project-modal-features');
        featuresList.innerHTML = '';
        project.features[currentLang].forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
        
        // Clear and populate technologies
        const techContainer = document.getElementById('project-modal-technologies');
        techContainer.innerHTML = '';
        project.technologies.forEach(tech => {
            const span = document.createElement('span');
            span.classList.add('text-sm', 'px-3', 'py-1', 'bg-gray-100', 'dark:bg-gray-800', 'text-gray-700', 'dark:text-gray-300', 'rounded-full');
            span.textContent = tech;
            techContainer.appendChild(span);
        });
        
        // Set links
        const liveBtn = document.getElementById('project-modal-live');
        const githubBtn = document.getElementById('project-modal-github');
        
        liveBtn.href = project.liveUrl;
        githubBtn.href = project.githubUrl;
        
        // Show modal
        projectModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent scrolling of body
        
        // Força um reflow para garantir que as dimensões sejam recalculadas
        window.getComputedStyle(document.querySelector('.modal-content')).getPropertyValue('max-height');
    }
}

// Função corrigida para fechar o modal
function closeProjectModal() {
    projectModal.classList.add('hidden');
    document.body.style.overflow = ''; // Restore scrolling of body
    
    // Remover os event listeners antigos antes de adicionar novos
    projectCards.forEach(card => {
        const projectId = card.getAttribute('data-project');
        card.removeEventListener('click', () => showProjectModal(projectId));
        card.addEventListener('click', () => showProjectModal(projectId));
    });
}

// Reinicialize os event listeners para os cards de projeto
function reinitProjectCards() {
    projectCards.forEach(card => {
        const projectId = card.getAttribute('data-project');
        card.addEventListener('click', () => showProjectModal(projectId));
    });
}

// Inicializar os event listeners dos cards de projeto
reinitProjectCards();

// Close modal button
closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeProjectModal();
});

// Close modal when clicking outside
projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        closeProjectModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !projectModal.classList.contains('hidden')) {
        closeProjectModal();
    }
});