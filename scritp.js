// --- CONFIGURAÇÃO DAS TRADUÇÕES ---
const resources = {
  pt: {
    translation: {
      "nav_inicio": "Início",
      "nav_projetos": "Projetos",
      "nav_arquitetura": "Arquitetura",
      "nav_sobre": "Sobre",
      "nav_contato": "Contato",
      "welcome": "Bem-vindo ao meu portfólio",
      "cargo": "<Engenheiro de Software />",
      "tech_titulo": "Tecnologias Principais",
      "proj_titulo": "Meus Projetos",
      "about_p1": "Desenvolvedor focado no ecossistema Java e em soluções de infraestrutura moderna.",
      "nav_contato": "Contato"
    }
  },
  en: {
    translation: {
      "nav_inicio": "Home",
      "nav_projetos": "Projects",
      "nav_arquitetura": "Architecture",
      "nav_sobre": "About",
      "nav_contato": "Contact",
      "welcome": "Welcome to my portfolio",
      "cargo": "<Software Engineer />",
      "tech_titulo": "Main Tech",
      "proj_titulo": "My Projects",
      "about_p1": "Developer focused on the Java ecosystem and modern infrastructure solutions."
    }
  },
  es: {
    translation: {
      "nav_inicio": "Inicio",
      "nav_projetos": "Proyectos",
      "nav_arquitetura": "Arquitectura",
      "nav_sobre": "Sobre mí",
      "nav_contato": "Contacto",
      "welcome": "Bienvenido a mi portafolio",
      "cargo": "<Ingeniero de Software />",
      "tech_titulo": "Tecnologías",
      "proj_titulo": "Mis Proyectos",
      "about_p1": "Desarrollador enfocado en el ecosistema Java y soluciones de infraestructura moderna."
    }
  }
};

// --- INICIALIZAÇÃO DO TRADUTOR ---
i18next.init({
  lng: localStorage.getItem('idioma') || 'pt',
  resources
}, function(err, t) {
  atualizarTextos();
});

function atualizarTextos() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const chave = el.getAttribute('data-i18n');
    el.innerHTML = i18next.t(chave);
  });
}

window.changeLanguage = function(lang) {
  i18next.changeLanguage(lang, () => {
    atualizarTextos();
    localStorage.setItem('idioma', lang); 
  });
};

// --- LÓGICA DO TEMA ---
const themeBtn = document.getElementById('toggle-theme');
const body = document.body;

if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    themeBtn.innerText = '☀️';
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    let theme = body.classList.contains('light-mode') ? 'light' : 'dark';
    themeBtn.innerText = (theme === 'light') ? '☀️' : '🌙';
    localStorage.setItem('theme', theme);
});

// --- LÓGICA DO MENU MOBILE ---
const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

document.querySelectorAll('.menu-links a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});