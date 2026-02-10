// ===========================
//   MODERN PORTFOLIO - 2026
//   Mihir Chauhan
// ===========================

// ===== PORTFOLIO DATA =====
const portfolioData = {
    // Featured Projects
    featuredProjects: [
        {
            title: 'CloudSense - AI Code Review Platform',
            description: 'End-to-end platform to reduce manual code review with automated checks plus AI recommendations. Built with FastAPI, React 18, TypeScript, PostgreSQL, Redis, Docker, and AWS (ECS Fargate, RDS, ElastiCache). Features JWT auth, webhook signature verification, multi-tenant support, and AI-powered patch suggestions.',
            image: 'Images/cloudsense.jpg',
            tags: ['FastAPI', 'React', 'TypeScript', 'AWS', 'Docker', 'PostgreSQL', 'AI'],
            links: [
                { name: 'View Project', url: '#', icon: 'fas fa-external-link-alt' }
            ]
        },
        {
            title: 'AI Interview Coach',
            description: 'Interview simulation product that generates job-description-specific questions and feedback. Built with LangChain, Streamlit, and FastAPI. Designed workflows for structured scoring and improvement recommendations focused on practical interview preparation.',
            image: 'Images/ai-interview-coach.jpg',
            tags: ['LangChain', 'Streamlit', 'FastAPI', 'LLM', 'NLP'],
            links: [
                { name: 'View Project', url: 'https://ai-interview-coach-kyz6kd8j8pu4feagzvj5lo.streamlit.app/', icon: 'fas fa-external-link-alt' },
                { name: 'GitHub', url: 'https://github.com/Mihirchauhan0709/ai-interview-coach', icon: 'fab fa-github' }
            ]
        },
        {
            title: 'Asteroid Collision Prediction',
            description: 'Analyzed asteroid datasets to classify objects, assess collision risk levels, and explore predictive modeling approaches. Implemented PCA, clustering, classification, and regression models to understand asteroid risk patterns for early warning insights.',
            image: 'Images/asteroid.jpg',
            tags: ['Machine Learning', 'Python', 'Data Science', 'Classification'],
            links: [
                { name: 'View Project', url: 'https://mihirchauhan0709.github.io/ml-project/', icon: 'fas fa-external-link-alt' }
            ]
        },
        {
            title: 'Football Lineup Optimization',
            description: 'Analyzed last 4 La Liga seasons from fbref.com. Built predictive models for goals and assists, clustered players for insights, generated Best XI for each season. Implemented Gradient Boosting classification for player role archetypes and match win probability modeling.',
            image: 'Images/football-lineup.jpg',
            tags: ['Python', 'Data Mining', 'ML', 'Gradient Boosting'],
            links: [
                { name: 'View Project', url: 'https://mihirchauhan0709.github.io/Data_mining_Project/', icon: 'fas fa-external-link-alt' },
                { name: 'GitHub', url: 'https://github.com/Mihirchauhan0709/Data_mining_Project', icon: 'fab fa-github' }
            ]
        }
    ],
    
    // Additional Projects
    additionalProjects: [
        {
            title: 'Job Vacancies Dashboard for Jordan',
            description: 'Built Power BI dashboard to explore job availability by district, enterprise size, and role. Translated Arabic dataset to English using Azure Translate API and Python scripting. Addressed youth unemployment with data visualization.',
            image: 'Images/jobs-dashboard.png',
            tags: ['Power BI', 'Azure', 'Python', 'Data Visualization'],
            links: []
        },
        {
            title: 'Yoga Posture Detection Platform',
            description: 'Led team to build yoga pose estimation model with 96.5% accuracy across 12 poses using neural networks and TensorFlow. Built interactive platform where users track pose duration and compare with friends. Real-time correction feedback.',
            image: 'Images/Yoga.jpg',
            tags: ['TensorFlow', 'Computer Vision', 'Neural Networks'],
            links: [
                { name: 'Paper', url: 'https://journals.stmjournals.com/joosdt/article=2024/view=161704/', icon: 'fas fa-file-alt' },
                { name: 'GitHub', url: 'https://github.com/Mihirchauhan0709/Yoga_Pose_Estimation', icon: 'fab fa-github' }
            ]
        },
        {
            title: 'Sign Language Recognition',
            description: 'Built sign language recognition model translating gestures into English text. Achieved 92% accuracy using LSTM neural network pipeline for improved accessibility for the hearing impaired.',
            image: 'Images/sign-language.jpg',
            tags: ['LSTM', 'Python', 'Deep Learning', 'NLP'],
            links: [
                { name: 'GitHub', url: 'https://github.com/Mihirchauhan0709/sign_language_recognition', icon: 'fab fa-github' }
            ]
        },
        {
            title: 'College Management Chatbot',
            description: 'Developed chatbot to assist new students with department queries and course information. Built interface and intent-response logic using NLP, ANN, JSON, and Tkinter.',
            image: 'Images/chatbot.png',
            tags: ['NLP', 'ANN', 'Python', 'Tkinter'],
            links: []
        }
    ],
    
    // Experience
    experience: [
        {
            title: 'Research Intern',
            company: 'CU Anschutz, LARK Lab (Department of Biomedical Informatics)',
            date: 'Jan 2026 - Present',
            description: 'Working on clinical NLP and LLM-driven systems. Built pipelines for HIV infographic generation using LLM prompting workflows. Exploring bias-mitigation considerations in AI outputs. Prototyped improved infographic pipeline using HTML-first generation and conversion to SVG for layout consistency.'
        },
        {
            title: 'AI / Data Engineering Intern',
            company: 'Kobeyo',
            date: 'May 2025 - Aug 2025',
            description: 'Built large-scale business data pipeline for Los Angeles market. Automated data collection using Google Places API, Apify, Selenium, and Playwright. Implemented AI workflows for skill tagging and email classification. Used GraphRAG-style approach and Supabase for retrieval and structured storage.'
        },
        {
            title: 'Honda 99P Labs Debate Agent',
            company: 'Multi-Agent System (Capstone)',
            date: 'Sept 2025 - Dec 2025',
            description: 'Built multi-agent debate system with retrieval support. Implemented structured reasoning workflows and instrumentation patterns (Graphiti-style).'
        },
        {
            title: 'Data Science Intern',
            company: 'CodSoft',
            date: 'Aug 2023 - Sept 2023',
            description: 'Completed three applied ML projects: Sales Prediction, Movie Prediction, Titanic Survival Prediction. Performed data preprocessing, feature engineering, and model training/evaluation. Built end-to-end notebooks to generate predictions with 90%+ accuracy.'
        }
    ],
    
    // Skills
    skills: {
        languages: ['Python', 'R', 'C', 'C++', 'Java', 'JavaScript', 'SQL'],
        ml: ['Machine Learning', 'Neural Networks', 'Deep Learning', 'NLP', 'Time-Series Analysis', 'Scikit-learn', 'TensorFlow', 'Keras', 'PyTorch', 'LangChain', 'LLMs'],
        data: ['Pandas', 'NumPy', 'Data Visualization', 'Trend Analysis', 'Feature Engineering', 'EDA', 'Power BI', 'Tableau', 'Excel'],
        databases: ['MongoDB', 'PostgreSQL', 'Redis', 'GitHub', 'Linux', 'R Studio', 'Weka'],
        cloud: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Docker', 'Terraform'],
        web: ['HTML', 'CSS', 'Node.js', 'React', 'FastAPI']
    },
    
    // Currently Learning
    currentlyLearning: [
        { name: 'Kubernetes', icon: 'fas fa-dharmachakra' },
        { name: 'MLOps', icon: 'fas fa-robot' },
        { name: 'AI Workflows', icon: 'fas fa-diagram-project' },
        { name: 'AI Coding Tools', icon: 'fas fa-brain' },
        { name: 'LangGraph', icon: 'fas fa-project-diagram' }
    ]
};

// ===== UTILITY FUNCTIONS =====
const utils = {
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    lerp: (start, end, factor) => start + (end - start) * factor,
    
    map: (value, inMin, inMax, outMin, outMax) => {
        return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }
};

// ===== BACK TO TOP BUTTON =====
class BackToTop {
    constructor() {
        this.button = document.getElementById('back-to-top');
        if (this.button) {
            this.init();
        }
    }
    
    init() {
        window.addEventListener('scroll', utils.debounce(() => {
            if (window.scrollY > 500) {
                this.button.classList.add('visible');
            } else {
                this.button.classList.remove('visible');
            }
        }, 100));
        
        this.button.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

// ===== THEME MANAGER =====
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.setTheme(this.theme);
        this.bindEvents();
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.theme = theme;
        localStorage.setItem('theme', theme);
        
        const icon = document.querySelector('#theme-toggle i');
        if (icon) {
            icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }

    toggleTheme() {
        const newTheme = this.theme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }

    bindEvents() {
        const toggleBtn = document.getElementById('theme-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => this.toggleTheme());
        }
    }
}

// ===== CUSTOM CURSOR =====
class CustomCursor {
    constructor() {
        this.dot = document.getElementById('cursor-dot');
        this.outline = document.getElementById('cursor-outline');
        this.mouseX = 0;
        this.mouseY = 0;
        this.dotX = 0;
        this.dotY = 0;
        this.outlineX = 0;
        this.outlineY = 0;
        
        if (this.dot && this.outline && !this.isTouchDevice()) {
            this.init();
        }
    }
    
    isTouchDevice() {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    }
    
    init() {
        document.addEventListener('mousemove', this.handleMouseMove.bind(this));
        this.animate();
    }
    
    handleMouseMove(e) {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
    }
    
    animate() {
        // Smooth follow with lerp
        this.dotX = utils.lerp(this.dotX, this.mouseX, 0.95);
        this.dotY = utils.lerp(this.dotY, this.mouseY, 0.95);
        this.outlineX = utils.lerp(this.outlineX, this.mouseX, 0.3);
        this.outlineY = utils.lerp(this.outlineY, this.mouseY, 0.3);
        
        this.dot.style.left = this.dotX + 'px';
        this.dot.style.top = this.dotY + 'px';
        this.outline.style.left = this.outlineX + 'px';
        this.outline.style.top = this.outlineY + 'px';
        
        requestAnimationFrame(this.animate.bind(this));
    }
}

// ===== PARTICLE SYSTEM =====
class ParticleSystem {
    constructor() {
        this.canvas = document.getElementById('particle-canvas');
        if (!this.canvas || window.innerWidth < 768) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 50;
        this.init();
    }
    
    init() {
        this.resize();
        this.createParticles();
        this.animate();
        
        window.addEventListener('resize', utils.debounce(() => this.resize(), 250));
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    createParticles() {
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1
            });
        }
    }
    
    animate() {
        if (!this.ctx) return;
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Get theme
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const particleColor = isDark ? 'rgba(248, 250, 252, 0.3)' : 'rgba(15, 23, 42, 0.3)';
        const lineColor = isDark ? 'rgba(248, 250, 252, 0.1)' : 'rgba(15, 23, 42, 0.1)';
        
        // Update and draw particles
        this.particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Wrap around edges
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;
            
            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = particleColor;
            this.ctx.fill();
        });
        
        // Draw connections
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.strokeStyle = lineColor;
                    this.ctx.lineWidth = 1;
                    this.ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(this.animate.bind(this));
    }
}

// ===== SCROLL PROGRESS =====
class ScrollProgress {
    constructor() {
        this.progressBar = document.getElementById('scroll-progress');
        if (this.progressBar) {
            this.init();
        }
    }
    
    init() {
        window.addEventListener('scroll', () => this.update());
        this.update();
    }
    
    update() {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        this.progressBar.style.width = scrolled + '%';
    }
}

// ===== TYPING ANIMATION =====
class TypingAnimation {
    constructor(element, text, speed = 50) {
        this.element = element;
        this.text = text;
        this.speed = speed;
        this.index = 0;
        
        if (this.element) {
            this.type();
        }
    }
    
    type() {
        if (this.index < this.text.length) {
            const currentText = this.text.substring(0, this.index + 1);
            this.element.textContent = currentText;
            this.index++;
            setTimeout(() => this.type(), this.speed);
        } else {
            // Remove cursor after typing completes
            setTimeout(() => {
                this.element.style.removeProperty('--cursor');
            }, 1000);
        }
    }
}

// ===== NAVIGATION MANAGER =====
class NavigationManager {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.updateActiveNav();
        this.handleScroll();
    }
    
    bindEvents() {
        // Smooth scrolling
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    const offset = 80;
                    const targetPosition = targetSection.offsetTop - offset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu
                    document.getElementById('hamburger').classList.remove('active');
                    document.getElementById('nav-menu').classList.remove('active');
                }
            });
        });
        
        // Mobile menu toggle
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
        }
        
        // Update on scroll
        window.addEventListener('scroll', utils.debounce(() => {
            this.updateActiveNav();
            this.handleScroll();
        }, 100));
    }
    
    handleScroll() {
        if (window.scrollY > 100) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }
    }
    
    updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
}

// ===== CONTENT LOADER =====
class ContentLoader {
    constructor() {
        this.init();
    }
    
    init() {
        this.loadProjects();
        this.loadExperience();
        this.loadSkills();
        this.loadCurrentlyLearning();
    }
    
    loadProjects() {
        // Featured Projects
        const featuredContainer = document.getElementById('featured-projects');
        if (featuredContainer) {
            featuredContainer.innerHTML = portfolioData.featuredProjects.map(project => 
                this.createProjectCard(project)
            ).join('');
        }
        
        // Additional Projects
        const additionalContainer = document.getElementById('additional-projects');
        if (additionalContainer) {
            additionalContainer.innerHTML = portfolioData.additionalProjects.map(project => 
                this.createProjectCard(project)
            ).join('');
        }
    }
    
    createProjectCard(project) {
        const tags = project.tags.map(tag => 
            `<span class="project-tag">${tag}</span>`
        ).join('');
        
        const links = project.links.length > 0 ? project.links.map(link => 
            `<a href="${link.url}" class="project-link" target="_blank" rel="noopener noreferrer">
                <i class="${link.icon}"></i>
                <span>${link.name}</span>
            </a>`
        ).join('') : '';
        
        return `
            <div class="project-card">
                <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy" onerror="this.src='Images/placeholder.jpg'">
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tags">${tags}</div>
                    ${links ? `<div class="project-links">${links}</div>` : ''}
                </div>
            </div>
        `;
    }
    
    loadExperience() {
        const container = document.getElementById('experience-timeline');
        if (container) {
            container.innerHTML = portfolioData.experience.map(exp => 
                this.createTimelineItem(exp)
            ).join('');
        }
    }
    
    createTimelineItem(exp) {
        return `
            <div class="timeline-item">
                <div class="timeline-content">
                    <h3 class="timeline-title">${exp.title}</h3>
                    <p class="timeline-company">${exp.company}</p>
                    <p class="timeline-date">${exp.date}</p>
                    <p class="timeline-description">${exp.description}</p>
                </div>
            </div>
        `;
    }
    
    loadSkills() {
        this.loadSkillCategory('languages-skills', portfolioData.skills.languages);
        this.loadSkillCategory('ml-skills', portfolioData.skills.ml);
        this.loadSkillCategory('data-skills', portfolioData.skills.data);
        this.loadSkillCategory('database-skills', portfolioData.skills.databases);
        this.loadSkillCategory('cloud-skills', portfolioData.skills.cloud);
        this.loadSkillCategory('web-skills', portfolioData.skills.web);
    }
    
    loadSkillCategory(containerId, skills) {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = skills.map(skill => 
                `<span class="skill-item">${skill}</span>`
            ).join('');
        }
    }
    
    loadCurrentlyLearning() {
        const container = document.getElementById('learning-tags');
        if (container) {
            container.innerHTML = portfolioData.currentlyLearning.map(item => 
                `<span class="learning-tag">
                    <i class="${item.icon}"></i>
                    ${item.name}
                </span>`
            ).join('');
        }
    }
}

// ===== ANIMATION MANAGER =====
class AnimationManager {
    constructor() {
        this.animatedElements = new Set();
        this.init();
    }
    
    init() {
        this.setupIntersectionObserver();
    }
    
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.animatedElements.has(entry.target)) {
                    this.animatedElements.add(entry.target);
                    entry.target.style.opacity = '0';
                    entry.target.style.transform = 'translateY(30px)';
                    
                    setTimeout(() => {
                        entry.target.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, 100);
                }
            });
        }, observerOptions);
        
        // Observe elements
        const elementsToAnimate = document.querySelectorAll('.project-card, .timeline-item, .skill-category, .publication-card, .info-card, .contact-card');
        elementsToAnimate.forEach(el => observer.observe(el));
    }
}

// ===== CARD 3D EFFECT =====
class Card3DEffect {
    constructor() {
        this.init();
    }
    
    init() {
        const cards = document.querySelectorAll('.project-card, .glass-card');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', this.handleMouseMove.bind(this));
            card.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
        });
    }
    
    handleMouseMove(e) {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    }
    
    handleMouseLeave(e) {
        const card = e.currentTarget;
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    }
}

// ===== CONTACT FORM MANAGER =====
class ContactFormManager {
    constructor() {
        this.init();
    }
    
    init() {
        const form = document.getElementById('contact-form');
        if (form) {
            form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }
    
    async handleSubmit(e) {
        e.preventDefault();
        
        const form = e.target;
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalHTML = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Sending...</span>';
        submitBtn.disabled = true;
        
        try {
            const formData = new FormData(form);
            const data = {
                from_name: formData.get('name'),
                from_email: formData.get('email'),
                message: formData.get('message')
            };
            
            const response = await emailjs.send("service_692e32d", "template_n3h2m8o", data);
            
            if (response.status === 200) {
                this.showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                form.reset();
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Contact form error:', error);
            this.showNotification('Failed to send message. Please try again or email me directly.', 'error');
        } finally {
            submitBtn.innerHTML = originalHTML;
            submitBtn.disabled = false;
        }
    }
    
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : '#ef4444'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            z-index: 10000;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            transform: translateX(120%);
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            font-weight: 500;
        `;
        
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(120%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 5000);
    }
}

// ===== LOADING MANAGER =====
class LoadingManager {
    constructor() {
        this.init();
    }
    
    init() {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const loadingScreen = document.getElementById('loading-screen');
                if (loadingScreen) {
                    loadingScreen.classList.add('hidden');
                }
            }, 1000);
        });
    }
}

// ===== MAIN APPLICATION =====
class PortfolioApp {
    constructor() {
        this.themeManager = new ThemeManager();
        this.customCursor = new CustomCursor();
        this.particleSystem = new ParticleSystem();
        this.scrollProgress = new ScrollProgress();
        this.navigationManager = new NavigationManager();
        this.contentLoader = new ContentLoader();
        this.animationManager = new AnimationManager();
        this.card3DEffect = new Card3DEffect();
        this.contactFormManager = new ContactFormManager();
        this.loadingManager = new LoadingManager();
        this.backToTop = new BackToTop();
        
        // Start typing animation after a delay
        setTimeout(() => {
            const taglineElement = document.getElementById('hero-tagline');
            if (taglineElement) {
                new TypingAnimation(taglineElement, 'Building end-to-end AI systems: from data pipelines to deployed products', 40);
            }
        }, 1500);
    }
    
    init() {
        console.log('🚀 Portfolio loaded successfully!');
        console.log('💎 Built with glassmorphism design and modern animations');
        console.log('🎨 Theme: ' + (localStorage.getItem('theme') || 'light'));
        console.log('✨ New features: Resume Download, Back to Top, Currently Learning');
    }
}

// ===== INITIALIZE APPLICATION =====
document.addEventListener('DOMContentLoaded', () => {
    const app = new PortfolioApp();
    app.init();
});
