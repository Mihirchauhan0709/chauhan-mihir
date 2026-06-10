// ============================================
//   MIHIR CHAUHAN — MODEL CARD PORTFOLIO 2026
// ============================================

// ===== DATA =====
const data = {

    // §02 Training run — most recent first (Updated June 2026)
    experience: [
        {
            id: 'RUN-05',
            status: 'running',
            date: 'JAN 2026 — PRESENT',
            role: 'Research Intern',
            org: 'CU Anschutz · LARK Lab, Dept. of Biomedical Informatics',
            loc: 'Aurora, CO',
            points: [
                'Designed rubric-based evaluation pipelines for LLM outputs in clinical annotation workflows, with QA checks and error analysis to surface failure modes and clinical relevance gaps.',
                'Ran systematic prompt-engineering experiments; refined templates, structured outputs, and guardrails to improve reliability of generated clinical artifacts.',
                'Built multi-step LLM pipelines for patient-facing clinical infographic generation (template selection → JSON blueprint → SVG composition) under strict layout constraints.'
            ],
            tags: ['LLM Evaluation', 'Prompt Engineering', 'Clinical NLP', 'Guardrails']
        },
        {
            id: 'RUN-04',
            status: 'complete',
            date: 'SEPT 2025 — DEC 2025',
            role: 'AI Engineer (Capstone)',
            org: 'Honda 99P Labs',
            loc: 'Boulder, CO',
            points: [
                'Designed a multi-agent debate engine with hybrid retrieval, vector databases, and curated evidence packs; improved citation accuracy and response relevance.',
                'Built the FastAPI + Uvicorn backend with advanced RAG and context engineering; deployed on AWS ECS Fargate.',
                'Used AWS Secrets Manager and CloudWatch for secure configuration and observability.'
            ],
            tags: ['Multi-Agent', 'RAG', 'AWS ECS Fargate', 'FastAPI']
        },
        {
            id: 'RUN-03',
            status: 'complete',
            date: 'MAY 2025 — AUG 2025',
            role: 'Junior Data Scientist Intern',
            org: 'Kobeyo',
            loc: 'Boulder, CO',
            points: [
                'Improved production classification accuracy by building an MLOps pipeline for a custom BERT model with human-in-the-loop feedback — continuous fine-tuning and structured retraining cadences that sustained accuracy gains in a live environment.',
                'Cut query time by 50% and expanded business data coverage by 40% by building a full-stack Python ingestion API with async Playwright scraping on a Supabase (PostgreSQL) backend.',
                'Applied LLMs with prompt engineering to automate skill-tagging and structured job-data extraction at scale.'
            ],
            tags: ['MLOps', 'BERT', 'Human-in-the-Loop', 'PostgreSQL']
        },
        {
            id: 'RUN-02',
            status: 'complete',
            date: 'AUG 2023 — SEPT 2023',
            role: 'Data Science Intern',
            org: 'CodSoft',
            loc: 'Remote',
            points: [
                'Completed three applied ML projects end to end: sales prediction, movie prediction, and Titanic survival classification — preprocessing, feature engineering, training, and evaluation.'
            ],
            tags: ['Supervised Learning', 'Feature Engineering']
        }
    ],

    // §03 Evaluations — featured
    featuredProjects: [
        {
            title: 'AgentSquared',
            subtitle: 'No-code AI agent platform · HackCU 2026 → independent project',
            description: 'Lets small businesses spin up a trained AI agent in under 60 seconds from their website and documents. FastAPI + Next.js, async crawling and RAG ingestion, three agent types (support QA, social monitoring via Bluesky AT Protocol with Gemini sentiment analysis, proactive marketing), deployed to a Vultr VPS with Nginx + PM2.',
            metrics: [
                { v: '<60s', k: 'AGENT SPIN-UP' },
                { v: '3', k: 'AGENT TYPES' },
                { v: '24h', k: 'V1 BUILD TIME' }
            ],
            tags: ['FastAPI', 'Next.js', 'RAG', 'Gemini', 'Multi-Agent'],
            links: [
                { name: 'HOW WE BUILT IT — BLOG ↗', url: 'https://medium.com/@mihirchauhan951/we-built-a-no-code-ai-agent-platform-in-24-hours-99c6fffc4010' }
            ]
        },
        {
            title: 'CodeSense',
            subtitle: 'AI-powered code review platform',
            description: 'Automated code analysis and patch suggestions on every push: GitHub webhooks with signature verification, security scanning (Semgrep, Ruff, Bandit, Black), GPT-generated patches, JWT auth, async Redis RQ workers, multi-tenant repos. Cloud architecture provisioned with Terraform on AWS — ECS Fargate, RDS, ElastiCache, S3 + CloudFront.',
            metrics: [
                { v: '4', k: 'SECURITY SCANNERS' },
                { v: 'IaC', k: 'TERRAFORM-PROVISIONED' },
                { v: 'MULTI', k: 'TENANT REPO SUPPORT' }
            ],
            tags: ['FastAPI', 'React 18', 'TypeScript', 'Terraform', 'AWS'],
            video: 'assets/codesense-demo.mp4',
            links: [
                { name: 'FULL DEMO ↗', url: 'https://drive.google.com/file/d/18gwwV5BbdjfJL-JNVAxZo1u_zzwaJxcx/view?usp=sharing' }
            ]
        },
        {
            title: 'AI Interview Coach',
            subtitle: 'LLM interview simulation',
            description: 'Generates job-description-specific interview questions, scores answers against structured rubrics, and returns improvement recommendations. Built with LangChain, Streamlit, and FastAPI — designed around how people actually prepare.',
            metrics: [
                { v: 'JD→Q', k: 'TAILORED QUESTIONS' },
                { v: 'RUBRIC', k: 'STRUCTURED SCORING' }
            ],
            tags: ['LangChain', 'Streamlit', 'FastAPI', 'LLM'],
            links: [
                { name: 'LIVE DEMO ↗', url: 'https://ai-interview-coach-kyz6kd8j8pu4feagzvj5lo.streamlit.app/' },
                { name: 'GITHUB ↗', url: 'https://github.com/Mihirchauhan0709/ai-interview-coach' }
            ]
        },
        {
            title: 'Football Lineup Optimization',
            subtitle: 'Data mining on 4 seasons of La Liga',
            description: 'Cleaned and merged multi-header player/team tables from fbref.com, predicted goals and assists, clustered player archetypes with gradient boosting, generated a Best XI per season, and modeled match win probability from historical and home/away context.',
            metrics: [
                { v: '4', k: 'SEASONS ANALYZED' },
                { v: 'XI×4', k: 'BEST LINEUPS GENERATED' }
            ],
            tags: ['Python', 'Gradient Boosting', 'Clustering'],
            links: [
                { name: 'PROJECT ↗', url: 'https://mihirchauhan0709.github.io/Data_mining_Project/' },
                { name: 'GITHUB ↗', url: 'https://github.com/Mihirchauhan0709/Data_mining_Project' }
            ]
        }
    ],

    // §03 Evaluations — additional runs
    additionalProjects: [
        {
            title: 'Yoga Posture Detection & Correction',
            description: 'Led a team building pose estimation across 12 poses with real-time correction feedback, deployed via TensorFlow.js. 3,600+ images processed; published as a research paper.',
            metric: '96.5% ACCURACY',
            links: [
                { name: 'PAPER ↗', url: 'https://journals.stmjournals.com/joosdt/article=2024/view=161704/' },
                { name: 'GITHUB ↗', url: 'https://github.com/Mihirchauhan0709/Yoga_Pose_Estimation' }
            ]
        },
        {
            title: 'Asteroid Collision Prediction',
            description: 'Classified asteroid risk with PCA, clustering, association rules, decision trees, naïve Bayes, SVMs, and regression — supervised and unsupervised, compared head to head.',
            metric: '7 ML METHODS',
            links: [{ name: 'PROJECT ↗', url: 'https://mihirchauhan0709.github.io/ml-project/' }]
        },
        {
            title: 'Sign Language Recognition',
            description: 'LSTM pipeline translating sign-language gestures into English text, built on self-collected and structured gesture data.',
            metric: '92% ACCURACY',
            links: [{ name: 'GITHUB ↗', url: 'https://github.com/Mihirchauhan0709/sign_language_recognition' }]
        },
        {
            title: 'Job Vacancies Dashboard — Jordan',
            description: 'Hackathon Power BI dashboard targeting youth unemployment: translated an Arabic dataset with Azure Translate + Python, then mapped jobs by district, enterprise size, and role.',
            metric: 'AR→EN PIPELINE',
            links: []
        }
    ],

    // §04 Capabilities
    skills: [
        { group: 'LANGUAGES', items: ['Python', 'SQL', 'JavaScript / TypeScript', 'R', 'Java', 'C / C++'] },
        { group: 'ML / AI', items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'LLM Evaluation', 'Prompt Engineering', 'RAG', 'Multi-Agent Systems', 'LangChain', 'NLP', 'Computer Vision'] },
        { group: 'DATA', items: ['Pandas', 'NumPy', 'Feature Engineering', 'EDA', 'Power BI', 'Tableau'] },
        { group: 'BACKEND & DATABASES', items: ['FastAPI', 'PostgreSQL', 'Redis', 'Supabase', 'MongoDB', 'REST APIs'] },
        { group: 'CLOUD & DEVOPS', items: ['AWS (ECS Fargate, RDS, S3, CloudWatch, Secrets Manager)', 'Docker', 'Terraform', 'GCP', 'Azure', 'CI/CD'] },
        { group: 'WEB', items: ['React', 'Next.js', 'Node.js', 'HTML / CSS'] }
    ]
};

// ===== RENDERERS =====
function renderExperience() {
    const el = document.getElementById('experience-log');
    if (!el) return;
    el.innerHTML = data.experience.map(exp => `
        <li class="log-entry reveal ${exp.status === 'running' ? 'is-running' : ''}">
            <div class="log-rail">
                <span class="log-id mono">${exp.id}</span>
                <span class="log-status mono ${exp.status === 'running' ? 'status-run' : 'status-done'}">
                    ${exp.status === 'running' ? '<span class="dot" aria-hidden="true"></span>RUNNING' : 'COMPLETE'}
                </span>
            </div>
            <div class="log-body">
                <p class="log-date mono">${exp.date} · ${exp.loc}</p>
                <h3 class="log-role">${exp.role}</h3>
                <p class="log-org">${exp.org}</p>
                <ul class="log-points">
                    ${exp.points.map(p => `<li>${p}</li>`).join('')}
                </ul>
                <div class="tag-row">
                    ${exp.tags.map(t => `<span class="tag mono">${t}</span>`).join('')}
                </div>
            </div>
        </li>
    `).join('');
}

function renderFeatured() {
    const el = document.getElementById('featured-projects');
    if (!el) return;
    el.innerHTML = data.featuredProjects.map((p, i) => `
        <article class="eval-card reveal">
            <header class="eval-head">
                <span class="eval-id mono">P-${String(i + 1).padStart(2, '0')}</span>
                <div>
                    <h3 class="eval-title">${p.title}</h3>
                    <p class="eval-sub">${p.subtitle}</p>
                </div>
            </header>
            ${p.video ? `
            <div class="eval-video">
                <video controls muted playsinline preload="metadata" src="${p.video}"
                       aria-label="${p.title} demo video"></video>
                <span class="video-caption mono">PRODUCT DEMO · 3 MIN</span>
            </div>` : ''}
            <p class="eval-desc">${p.description}</p>
            <div class="metric-row">
                ${p.metrics.map(m => `
                    <div class="metric">
                        <span class="metric-v">${m.v}</span>
                        <span class="metric-k mono">${m.k}</span>
                    </div>`).join('')}
            </div>
            <footer class="eval-foot">
                <div class="tag-row">${p.tags.map(t => `<span class="tag mono">${t}</span>`).join('')}</div>
                ${p.links.length ? `<div class="link-row">${p.links.map(l =>
                    `<a class="text-link mono" href="${l.url}" target="_blank" rel="noopener noreferrer">${l.name}</a>`).join('')}</div>` : ''}
            </footer>
        </article>
    `).join('');

    // If a demo file is missing (e.g., not yet copied into assets/),
    // remove the player — the external demo link still works.
    el.querySelectorAll('.eval-video video').forEach(v => {
        v.addEventListener('error', () => {
            const block = v.closest('.eval-video');
            if (block) block.remove();
        });
    });
}

function renderAdditional() {
    const el = document.getElementById('additional-projects');
    if (!el) return;
    el.innerHTML = data.additionalProjects.map(p => `
        <article class="mini-card reveal">
            <span class="mini-metric mono">${p.metric}</span>
            <h4 class="mini-title">${p.title}</h4>
            <p class="mini-desc">${p.description}</p>
            ${p.links.length ? `<div class="link-row">${p.links.map(l =>
                `<a class="text-link mono" href="${l.url}" target="_blank" rel="noopener noreferrer">${l.name}</a>`).join('')}</div>` : ''}
        </article>
    `).join('');
}

function renderSkills() {
    const el = document.getElementById('skills-matrix');
    if (!el) return;
    el.innerHTML = data.skills.map(s => `
        <div class="cap-row reveal">
            <h3 class="cap-group mono">${s.group}</h3>
            <div class="tag-row">
                ${s.items.map(i => `<span class="tag tag-lg mono">${i}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// ===== INTERACTIONS =====
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function setupReveals() {
    const els = document.querySelectorAll('.reveal');
    if (reducedMotion || !('IntersectionObserver' in window)) {
        els.forEach(el => el.classList.add('in'));
        return;
    }
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('in');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    els.forEach(el => obs.observe(el));
}

function setupSpecCard() {
    const rows = document.querySelectorAll('#spec-card .spec-row');
    if (reducedMotion) {
        rows.forEach(r => r.classList.add('in'));
        return;
    }
    rows.forEach((r, i) => setTimeout(() => r.classList.add('in'), 250 + i * 140));
}

function setupCounters() {
    const nums = document.querySelectorAll('[data-count]');
    if (reducedMotion || !('IntersectionObserver' in window)) {
        nums.forEach(n => { n.textContent = n.dataset.count; });
        return;
    }
    const animate = el => {
        const target = parseFloat(el.dataset.count);
        const decimals = parseInt(el.dataset.decimals || '0', 10);
        const dur = 900;
        const t0 = performance.now();
        const tick = now => {
            const p = Math.min((now - t0) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = (target * eased).toFixed(decimals);
            if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    };
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) { animate(e.target); obs.unobserve(e.target); }
        });
    }, { threshold: 0.5 });
    nums.forEach(n => obs.observe(n));
}

function setupNav() {
    const topbar = document.getElementById('topbar');
    const menuBtn = document.getElementById('menu-btn');
    const nav = document.getElementById('topbar-nav');

    window.addEventListener('scroll', () => {
        topbar.classList.toggle('scrolled', window.scrollY > 24);
    }, { passive: true });

    menuBtn.addEventListener('click', () => {
        const open = nav.classList.toggle('open');
        menuBtn.classList.toggle('open', open);
        menuBtn.setAttribute('aria-expanded', String(open));
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
            menuBtn.classList.remove('open');
            menuBtn.setAttribute('aria-expanded', 'false');
        });
    });

    // Active section highlighting
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-link');
    const spy = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                links.forEach(l => l.classList.toggle('active',
                    l.getAttribute('href') === `#${e.target.id}`));
            }
        });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(s => spy.observe(s));
}

function setupForm() {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
    if (!form) return;

    form.addEventListener('submit', async e => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        const original = btn.textContent;
        btn.textContent = 'Sending…';
        btn.disabled = true;
        status.textContent = '';

        try {
            const fd = new FormData(form);
            const payload = {
                from_name: fd.get('name'),
                from_email: fd.get('email'),
                message: fd.get('message')
            };
            const res = await emailjs.send('service_692e32d', 'template_n3h2m8o', payload);
            if (res.status === 200) {
                status.textContent = '✓ MESSAGE SENT — I\'ll get back to you soon.';
                status.className = 'form-status mono ok';
                form.reset();
            } else {
                throw new Error('send failed');
            }
        } catch (err) {
            console.error('Contact form error:', err);
            status.textContent = '✗ SEND FAILED — email me directly at mihirchauhan951@gmail.com';
            status.className = 'form-status mono err';
        } finally {
            btn.textContent = original;
            btn.disabled = false;
        }
    });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    renderExperience();
    renderFeatured();
    renderAdditional();
    renderSkills();
    setupReveals();
    setupSpecCard();
    setupCounters();
    setupNav();
    setupForm();
});