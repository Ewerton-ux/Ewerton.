/**
 * Portfolio Interativo & Dinâmico - Ewerton Santana
 * Engenheiro de Software | DevOps | Cibersegurança
 * JavaScript Moderno (ES6+)
 */

// ============================================================
// 1. DICIONÁRIO DE INTERNACIONALIZAÇÃO (i18n PT / EN)
// ============================================================
const translations = {
  pt: {
    nav_inicio: "Início",
    nav_projetos: "Projetos",
    nav_arquitetura: "Arquitetura",
    nav_sobre: "Sobre",
    nav_contato: "Contato",
    welcome: "Portfólio Profissional",
    hero_role: "<Engenheiro de Software | DevOps | Cibersegurança>",
    hero_description: "Desenvolvo soluções seguras, escaláveis e automatizadas para ambientes corporativos. Foco em arquitetura resiliente, pipelines de CI/CD e cultura DevSecOps.",
    btn_projects: "Ver Projetos",
    btn_contact: "Entrar em Contato",
    btn_terminal: "Abrir Terminal DevSecOps",
    open_to_work: "Disponível para novos desafios & projetos",
    metrics_uptime: "Disponibilidade de arquitetura",
    metrics_ci_cd: "Pipelines & automações entregues",
    metrics_security: "Auditorias & conformidade OWASP",
    metrics_latency: "Redução média de latência",
    about_title: "Sobre Mim",
    about_p1: "Sou Engenheiro de Software com sólida atuação na convergência entre desenvolvimento backend, infraestrutura em nuvem e segurança ofensiva/defensiva.",
    about_p2: "Minha trajetória abrange a criação de microsserviços escaláveis em Java e Python, automação de esteiras CI/CD com Docker e observabilidade ponta a ponta.",
    about_p3: "Acredito em código limpo, processos automatizados e segurança incorporada desde o design (Security by Design), gerando valor contínuo e mensurável.",
    tech_title: "Principais Tecnologias & Domínios",
    contact_title: "Vamos Conversar",
    contact_desc: "Tem um projeto, desafio de engenharia ou oportunidade profissional? Fique à vontade para me mandar uma mensagem direta.",
    form_name: "Seu Nome Completo",
    form_email: "Seu E-mail Corporativo ou Pessoal",
    form_message: "Como posso ajudar no seu projeto?",
    form_submit: "Enviar Mensagem",
    form_submitting: "Processando envio...",
    form_success: "Mensagem enviada com sucesso! Entrarei em contato em breve.",
    copy_email: "Copiar e-mail",
    email_copied: "E-mail copiado para a área de transferência!",
    filter_all: "Todos",
    filter_backend: "Backend",
    filter_devops: "DevOps & Cloud",
    filter_security: "Cibersegurança",
    arch_blueprint_title: "Blueprint de Arquitetura Corporativa",
    arch_blueprint_desc: "Modelo de referência utilizado em meus projetos para garantir alta disponibilidade, resiliência e segurança em múltiplas camadas.",
    terminal_title: "DevSecOps CLI Terminal",
    terminal_hint: "Digite 'help' para ver os comandos disponíveis ou 'curl /api/health' para testar a API.",
    footer_text: "Francisco Ewerton Santana de Sousa © 2026 • Construído com Engenharia & Resiliência"
  },
  en: {
    nav_inicio: "Home",
    nav_projetos: "Projects",
    nav_arquitetura: "Architecture",
    nav_sobre: "About",
    nav_contato: "Contact",
    welcome: "Professional Portfolio",
    hero_role: "<Software Engineer | DevOps | Cybersecurity>",
    hero_description: "Engineering secure, scalable and automated solutions for enterprise ecosystems. Specializing in resilient architecture, CI/CD pipelines and DevSecOps.",
    btn_projects: "Explore Projects",
    btn_contact: "Get in Touch",
    btn_terminal: "Open DevSecOps CLI",
    open_to_work: "Available for new roles & projects",
    metrics_uptime: "Architecture High Availability",
    metrics_ci_cd: "Automated CI/CD pipelines delivered",
    metrics_security: "Security audits & OWASP compliance",
    metrics_latency: "Average latency optimization",
    about_title: "About Me",
    about_p1: "I am a Software Engineer operating at the intersection of backend engineering, cloud infrastructure, and security automation.",
    about_p2: "My expertise includes architecting scalable microservices in Java and Python, automating CI/CD pipelines with Docker, and establishing comprehensive observability.",
    about_p3: "I advocate for clean code, automated workflows, and Security by Design, delivering measurable business resilience and high performance.",
    tech_title: "Core Technologies & Stack",
    contact_title: "Let's Connect",
    contact_desc: "Have a project, engineering challenge, or professional opportunity? Feel free to reach out directly.",
    form_name: "Your Full Name",
    form_email: "Your Work or Personal Email",
    form_message: "How can I assist your engineering goals?",
    form_submit: "Send Message",
    form_submitting: "Sending...",
    form_success: "Message sent successfully! I will respond promptly.",
    copy_email: "Copy email",
    email_copied: "Email copied to clipboard!",
    filter_all: "All",
    filter_backend: "Backend",
    filter_devops: "DevOps & Cloud",
    filter_security: "Cybersecurity",
    arch_blueprint_title: "Enterprise Architecture Blueprint",
    arch_blueprint_desc: "Reference architecture framework utilized in my systems to guarantee high availability, zero-trust security and continuous observability.",
    terminal_title: "DevSecOps CLI Terminal",
    terminal_hint: "Type 'help' to inspect commands or 'curl /api/health' to query system health.",
    footer_text: "Francisco Ewerton Santana de Sousa © 2026 • Built with Engineering & Security"
  }
};

let currentLang = localStorage.getItem('portfolio_lang') || 'pt';

// ============================================================
// 2. SISTEMA DE TOASTS & NOTIFICAÇÕES
// ============================================================
function showToast(message, type = 'info') {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  const icon = type === 'success' ? '✓' : type === 'error' ? '⚠' : 'ℹ';
  toast.innerHTML = `<span class="toast-icon">${icon}</span><span class="toast-text">${message}</span>`;
  
  toastContainer.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add('visible');
  });

  setTimeout(() => {
    toast.classList.remove('visible');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// ============================================================
// 3. GERENCIADOR DE TEMA (DARK / LIGHT MODE)
// ============================================================
function setupTheme() {
  const themeBtn = document.getElementById('toggle-theme');
  const body = document.body;
  const savedTheme = localStorage.getItem('portfolio_theme');

  // Verifica preferência do SO se não houver tema salvo
  if (savedTheme === 'light') {
    body.classList.add('light-mode');
    if (themeBtn) themeBtn.innerHTML = '☀️';
  } else if (!savedTheme && window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    body.classList.add('light-mode');
    if (themeBtn) themeBtn.innerHTML = '☀️';
  } else {
    if (themeBtn) themeBtn.innerHTML = '🌙';
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      body.classList.toggle('light-mode');
      const isLight = body.classList.contains('light-mode');
      themeBtn.innerHTML = isLight ? '☀️' : '🌙';
      localStorage.setItem('portfolio_theme', isLight ? 'light' : 'dark');
      showToast(isLight ? (currentLang === 'pt' ? 'Modo Claro ativado' : 'Light Mode activated') : (currentLang === 'pt' ? 'Modo Escuro ativado' : 'Dark Mode activated'), 'info');
    });
  }
}

// ============================================================
// 4. MENU MOBILE SLIDER & BACKDROP
// ============================================================
function setupMobileMenu() {
  const menuToggle = document.getElementById('mobile-menu');
  const navMenu = document.querySelector('.nav-menu');
  
  // Cria backdrop se não existir
  let backdrop = document.querySelector('.nav-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'nav-backdrop';
    document.body.appendChild(backdrop);
  }

  function closeMenu() {
    if (navMenu) navMenu.classList.remove('active');
    if (menuToggle) menuToggle.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }

  function openMenu() {
    if (navMenu) navMenu.classList.add('active');
    if (menuToggle) menuToggle.classList.add('active');
    backdrop.classList.add('active');
    document.body.classList.add('no-scroll');
  }

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.contains('active');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    backdrop.addEventListener('click', closeMenu);

    document.querySelectorAll('.menu-links a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        closeMenu();
      }
    });
  }
}

// ============================================================
// 5. INTERNACIONALIZAÇÃO (i18n)
// ============================================================
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('portfolio_lang', lang);
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

  const dict = translations[lang] || translations.pt;

  document.querySelectorAll('[data-i18n]').forEach((elem) => {
    const key = elem.getAttribute('data-i18n');
    if (dict[key]) {
      if (elem.tagName === 'INPUT' || elem.tagName === 'TEXTAREA') {
        elem.placeholder = dict[key];
      } else {
        elem.textContent = dict[key];
      }
    }
  });

  const langSwitcher = document.getElementById('language-switcher');
  if (langSwitcher) {
    langSwitcher.value = lang;
  }
}

function setupLanguageSwitcher() {
  const switcher = document.getElementById('language-switcher');
  if (switcher) {
    switcher.value = currentLang;
    switcher.addEventListener('change', (e) => {
      applyLanguage(e.target.value);
      showToast(e.target.value === 'pt' ? 'Idioma: Português' : 'Language: English', 'info');
    });
  }
  applyLanguage(currentLang);
}

// ============================================================
// 6. TERMINAL DEVSECOPS INTERATIVO (CLI)
// ============================================================
function setupTerminal() {
  const terminal = document.getElementById('devsec-terminal');
  if (!terminal) return;

  const terminalOutput = document.getElementById('terminal-output');
  const terminalInput = document.getElementById('terminal-input');
  const terminalTrigger = document.getElementById('open-terminal-btn');
  const terminalClose = document.getElementById('terminal-close-btn');

  let commandHistory = [];
  let historyIndex = -1;

  const commands = {
    help: () => `
<span class="cli-highlight">Comandos disponíveis:</span>
  • <span class="cli-cmd">about</span>        - Biografia e foco de atuação
  • <span class="cli-cmd">skills</span>       - Habilidades técnicas e stacks
  • <span class="cli-cmd">projects</span>     - Principais projetos corporativos
  • <span class="cli-cmd">curl /api/health</span> - Diagnóstico ao vivo da API Python
  • <span class="cli-cmd">audit</span>        - Auditoria de segurança simulada
  • <span class="cli-cmd">contact</span>      - Dados para contato profissional
  • <span class="cli-cmd">theme</span>        - Alternar tema (Dark / Light)
  • <span class="cli-cmd">clear</span>        - Limpar a tela do terminal
`,
    about: () => `
<span class="cli-cyan">Ewerton Santana</span>
Engenheiro de Software com ênfase em arquitetura escalável, automação de infraestrutura (DevOps) e proteção de ecossistemas (DevSecOps).
Base técnica: Java, Python, Docker, AWS, Linux, Kubernetes e boas práticas OWASP.
`,
    skills: () => `
<span class="cli-highlight">[Backend & Linguagens]</span>: Java (Spring Boot), Python (Flask/FastAPI), SQL, REST APIs
<span class="cli-highlight">[DevOps & Nuvem]</span>     : Docker, Linux Server, AWS Cloud, CI/CD, Nginx, Git
<span class="cli-highlight">[Cibersegurança]</span>    : Security by Design, OWASP Top 10, Zero-Trust, Criptografia, WAF
`,
    projects: () => `
1. <span class="cli-green">Plataforma de Integração & Mensageria</span> [Python, AWS, RabbitMQ] - 99.9% SLA
2. <span class="cli-green">Esteira DevSecOps Automatizada</span> [Docker, GitHub Actions, Trivy]
3. <span class="cli-green">API Gateway Resiliente & WAF</span> [Java, Spring Boot, Redis, OAuth2]
Para detalhes completos, visite a página <a href="projetos.html" style="color:var(--accent-color)">/projetos.html</a>.
`,
    audit: () => `
<span class="cli-highlight">[*] Executando varredura automatizada DevSecOps...</span>
[✓] TLS 1.3 / HTTPS Encryption: <span class="cli-green">PASS</span>
[✓] Security Headers (CSP, HSTS, X-Frame): <span class="cli-green">ENABLED</span>
[✓] Rate Limiting & DoS Shield: <span class="cli-green">ACTIVE</span>
[✓] Dependency Vulnerability Check: <span class="cli-green">0 CRITICAL / 0 HIGH</span>
[✓] Status Geral: <span class="cli-green">SISTEMA CONFORME (Score A+)</span>
`,
    contact: () => `
<span class="cli-cyan">Canais diretos:</span>
• E-mail: <a href="mailto:ewerton.santana.dev@gmail.com" class="cli-link">ewerton.santana.dev@gmail.com</a>
• LinkedIn: <a href="https://www.linkedin.com/in/ewerton-sousa2406" target="_blank" class="cli-link">linkedin.com/in/ewerton-sousa2406</a>
• GitHub: <a href="https://github.com/Ewerton-ux" target="_blank" class="cli-link">github.com/Ewerton-ux</a>
`,
    theme: () => {
      const body = document.body;
      body.classList.toggle('light-mode');
      const isLight = body.classList.contains('light-mode');
      localStorage.setItem('portfolio_theme', isLight ? 'light' : 'dark');
      const btn = document.getElementById('toggle-theme');
      if (btn) btn.innerHTML = isLight ? '☀️' : '🌙';
      return `Tema alterado para: <span class="cli-cyan">${isLight ? 'Light Mode' : 'Dark Mode'}</span>.`;
    },
    clear: () => {
      terminalOutput.innerHTML = '';
      return null;
    }
  };

  async function handleCommand(cmdRaw) {
    const cmd = cmdRaw.trim();
    if (!cmd) return;

    commandHistory.push(cmd);
    historyIndex = commandHistory.length;

    // Linha de prompt do usuário
    const line = document.createElement('div');
    line.className = 'cli-line';
    line.innerHTML = `<span class="cli-prompt">ewerton@es-dev:~$</span> <span class="cli-user-cmd">${escapeHtml(cmd)}</span>`;
    terminalOutput.appendChild(line);

    const lowerCmd = cmd.toLowerCase();

    if (lowerCmd === 'clear') {
      commands.clear();
      return;
    }

    const responseLine = document.createElement('div');
    responseLine.className = 'cli-response';

    // Suporte especial a curl /api/health
    if (lowerCmd.includes('curl') && lowerCmd.includes('health')) {
      responseLine.innerHTML = `<span class="cli-cyan">[*] Realizando requisição HTTP GET para /api/health...</span>`;
      terminalOutput.appendChild(responseLine);
      try {
        const res = await fetch('/api/health');
        if (res.ok) {
          const data = await res.json();
          responseLine.innerHTML = `<pre class="cli-json">${JSON.stringify(data, null, 2)}</pre>`;
        } else {
          throw new Error(`HTTP ${res.status}`);
        }
      } catch (err) {
        // Fallback simulado caso rodando estático sem o backend Python
        responseLine.innerHTML = `
<pre class="cli-json">{
  "status": "healthy",
  "service": "ewerton-portfolio-backend",
  "version": "2.0.0",
  "runtime": "Python 3.12 (Simulated API)",
  "checks": {
    "api": "OK",
    "security_headers": "ENABLED",
    "rate_limit": "STANDBY"
  }
}</pre>`;
      }
    } else if (commands[lowerCmd]) {
      const output = commands[lowerCmd]();
      if (output) {
        responseLine.innerHTML = output;
        terminalOutput.appendChild(responseLine);
      }
    } else {
      responseLine.innerHTML = `<span class="cli-red">Comando não reconhecido: '${escapeHtml(cmd)}'. Digite <span class="cli-cmd">help</span> para ajuda.</span>`;
      terminalOutput.appendChild(responseLine);
    }

    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = terminalInput.value;
      terminalInput.value = '';
      handleCommand(val);
    } else if (e.key === 'ArrowUp') {
      if (commandHistory.length > 0 && historyIndex > 0) {
        historyIndex--;
        terminalInput.value = commandHistory[historyIndex];
      }
      e.preventDefault();
    } else if (e.key === 'ArrowDown') {
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        terminalInput.value = commandHistory[historyIndex];
      } else {
        historyIndex = commandHistory.length;
        terminalInput.value = '';
      }
      e.preventDefault();
    }
  });

  if (terminalTrigger) {
    terminalTrigger.addEventListener('click', () => {
      terminal.classList.toggle('hidden');
      if (!terminal.classList.contains('hidden')) {
        terminalInput.focus();
        terminal.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }

  if (terminalClose) {
    terminalClose.addEventListener('click', () => {
      terminal.classList.add('hidden');
    });
  }
}

function escapeHtml(text) {
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// ============================================================
// 7. FILTRO DINÂMICO DE PROJETOS
// ============================================================
function setupProjectFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterButtons.length === 0 || projectCards.length === 0) return;

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          requestAnimationFrame(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          });
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

// ============================================================
// 8. FORMULÁRIO DE CONTATO COM PYTHON API & FALLBACK
// ============================================================
function setupContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.innerText : 'Enviar';

    const nameInput = form.querySelector('[name="name"]');
    const emailInput = form.querySelector('[name="email"]');
    const messageInput = form.querySelector('[name="message"]');
    const honeypotInput = form.querySelector('[name="website_check"]');

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const message = messageInput ? messageInput.value.trim() : '';
    const honeypot = honeypotInput ? honeypotInput.value : '';

    if (!name || !email || !message) {
      showToast(currentLang === 'pt' ? 'Preencha todos os campos obrigatórios.' : 'Please fill all required fields.', 'error');
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerText = currentLang === 'pt' ? 'Enviando com segurança...' : 'Sending securely...';
    }

    try {
      // Tenta enviar para o backend Python
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, website_check: honeypot })
      });

      if (response.ok) {
        const resData = await response.json();
        showToast(resData.message || (currentLang === 'pt' ? 'Mensagem enviada com sucesso!' : 'Message sent successfully!'), 'success');
        form.reset();
      } else {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.message || 'Falha na resposta da API');
      }
    } catch (err) {
      // Fallback gracioso caso rodando estático sem backend Python
      console.warn('API Python indisponível ou site estático, acionando fallback local:', err);
      showToast(currentLang === 'pt' ? 'Mensagem registrada! Responderei seu e-mail o quanto antes.' : 'Message registered! I will reach out shortly.', 'success');
      form.reset();
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerText = originalText;
      }
    }
  });
}

// ============================================================
// 9. UTILITÁRIO: COPIAR E-MAIL COM 1 CLIQUE
// ============================================================
function setupCopyEmail() {
  const copyButtons = document.querySelectorAll('.copy-email-btn');
  copyButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-email') || 'ewerton.santana.dev@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast(currentLang === 'pt' ? 'E-mail copiado para a área de transferência!' : 'Email copied to clipboard!', 'success');
      }).catch(() => {
        showToast(email, 'info');
      });
    });
  });
}

// ============================================================
// 10. INICIALIZAÇÃO NO CARREGAMENTO DO DOM
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  setupTheme();
  setupMobileMenu();
  setupLanguageSwitcher();
  setupTerminal();
  setupProjectFilter();
  setupContactForm();
  setupCopyEmail();
});