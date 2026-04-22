// --- CONFIGURAÇÃO DAS TRADUÇÕES ---
const resources = {

  pt: {
    translation: {
      // Navegação e Global
      "nav_inicio": "Início",
      "nav_projetos": "Projetos",
      "nav_arquitetura": "Arquitetura",
      "nav_sobre": "Sobre",
      "nav_contato": "Contato",
      "back_home": "← Voltar ao início;",
      "back_terminal": "← cd .. /voltar",
      
      // Home
      "welcome": "Bem-vindo ao meu portfólio",
      "cargo": "<Engenheiro de Software />",
      "tech_titulo": "Tecnologias Principais",
      "proj_titulo": "Meus Projetos",
      
      // Arquitetura
      "arch_title": "Arquitetura de Sistemas",
      "arch_subtitle": "Como eu projeto e escalo aplicações modernas.",
      "arch_l1_title": "Gateway & Segurança",
      "arch_l1_desc": "Implementação de perímetros de segurança utilizando Spring Security e JWT.",
      "arch_l2_title": "Motores Core & Lógica",
      "arch_l2_desc": "Arquitetura baseada em domínios (DDD) com Spring Boot.",
      "arch_l3_title": "Armazenamento & Cache",
      "arch_l3_desc": "Modelagem relacional e estratégias de performance com Redis.",
      "arch_l4_title": "Infraestrutura & Cloud",
      "arch_l4_desc": "Containerização e automação AWS para ambientes escaláveis.",
      "arch_footer": "FIM DO BLUEPRINT - VER 1.0",

      // Contato
      "contact_title": "Enviar_Mensagem ( )",
      "form_name": "Nome / Empresa:",
      "form_email": "Endereço de email:",
      "form_subject": "Assunto:",
      "btn_send": "Enviar",

      // Sobre
      "about_subtitle": "Engenheiro de Software // Back-end // DevOps",
      "about_p1": "Atuo no desenvolvimento de ecossistemas robustos, focando na construção de aplicações escaláveis e de alta disponibilidade. Minha base técnica é consolidada no ecossistema Java com Spring Boot, onde projeto APIs de alta performance.",
      "about_p2": "Minha paixão pela engenharia vai além do código; mergulho na cultura DevOps utilizando Docker e AWS para garantir que a transição entre o desenvolvimento e a produção seja fluida, automatizada e segura.",
      "about_p3": "Acredito que software de qualidade é o equilíbrio entre performance, segurança e legibilidade. Estou sempre em busca de arquiteturas limpas que resolvam problemas complexos de forma elegante."
    }
  },
  en: {
    translation: {
      "nav_inicio": "Home",
      "nav_projetos": "Projects",
      "nav_arquitetura": "Architecture",
      "nav_sobre": "About",
      "nav_contato": "Contact",
      "back_home": "← Back to home;",
      "back_terminal": "← cd .. /back",
      "welcome": "Welcome to my portfolio",
      "cargo": "<Software Engineer />",
      "tech_titulo": "Main Technologies",
      "proj_titulo": "My Projects",
      "arch_title": "System Architecture",
      "arch_subtitle": "How I design and scale modern applications.",
      "arch_l1_title": "Gateway & Security",
      "arch_l1_desc": "Security perimeter implementation using Spring Security and JWT.",
      "arch_l2_title": "Core Engines & Logic",
      "arch_l2_desc": "Domain-Driven Design (DDD) with Spring Boot.",
      "arch_l3_title": "Data Storage & Cache",
      "arch_l3_desc": "Relational modeling and performance strategies with Redis.",
      "arch_l4_title": "Infrastructure & Cloud",
      "arch_l4_desc": "Containerization and AWS automation for scalable environments.",
      "arch_footer": "END OF BLUEPRINT - VER 1.0",
      "contact_title": "Send_Message ( )",
      "form_name": "Name / Company:",
      "form_email": "Email Address:",
      "form_subject": "Subject / Message:",
      "btn_send": "Send",
      "about_subtitle": "Software Engineer // Back-end // DevOps",
      "about_p1": "I work on developing robust ecosystems, focusing on building scalable and high-availability applications. My technical foundation is consolidated in the Java ecosystem with Spring Boot, where I design high-performance APIs.",
      "about_p2": "My passion for engineering goes beyond code; I dive into DevOps culture using Docker and AWS to ensure the transition between development and production is fluid, automated, and secure.",
      "about_p3": "I believe quality software is the balance between performance, security, and readability. I am always looking for clean architectures that solve complex problems elegantly."
    }
  },
  es: {
    translation: {
      "nav_inicio": "Inicio",
      "nav_projetos": "Proyectos",
      "nav_arquitetura": "Arquitectura",
      "nav_sobre": "Sobre mí",
      "nav_contato": "Contacto",
      "back_home": "← Volver al inicio;",
      "back_terminal": "← cd .. /volver",
      "welcome": "Bienvenido a mi portafolio",
      "cargo": "<Ingeniero de Software />",
      "tech_titulo": "Tecnologías Principales",
      "proj_titulo": "Mis Proyectos",
      "arch_title": "Arquitectura de Sistemas",
      "arch_subtitle": "Cómo diseño y escalo aplicaciones modernas.",
      "arch_l1_title": "Gateway y Seguridad",
      "arch_l1_desc": "Implementación de perímetros de seguridad usando Spring Security e JWT.",
      "arch_l2_title": "Motores Core y Lógica",
      "arch_l2_desc": "Arquitectura basada en dominios (DDD) con Spring Boot.",
      "arch_l3_title": "Almacenamiento y Cache",
      "arch_l3_desc": "Modelado relacional y estrategias de rendimiento con Redis.",
      "arch_l4_title": "Infraestructura y Cloud",
      "arch_l4_desc": "Contenedores y automatización de AWS para entornos escalables.",
      "arch_footer": "FIN DEL BLUEPRINT - VER 1.0",
      "contact_title": "Enviar_Mensaje ( )",
      "form_name": "Nombre / Empresa:",
      "form_email": "Correo electrónico:",
      "form_subject": "Asunto:",
      "btn_send": "Enviar",
      "about_subtitle": "Ingeniero de Software // Back-end // DevOps",
      "about_p1": "Trabajo en el desarrollo de ecosistemas robustos, centrándome en la construcción de aplicaciones escalables y de alta disponibilidad. Mi base técnica está consolidada en el ecosistema Java con Spring Boot, donde diseño APIs de alto rendimiento.",
      "about_p2": "Mi pasión por la ingeniería va más allá del código; me sumerjo en la cultura DevOps utilizando Docker y AWS para garantizar que la transición entre el desarrollo y la producción sea fluida, automatizada y segura.",
      "about_p3": "Creo que el software de calidad es el equilibrio entre rendimiento, seguridad y legibilidad. Siempre busco arquitecturas limpias que resuelvan problemas complejos de forma elegante."
    }
  }
};

// --- INICIALIZAÇÃO DO TRADUTOR ---
i18next.init({
  lng: 'pt', // Idioma inicial
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

// Função que o seu <select> chama
window.changeLanguage = function(lang) {
  i18next.changeLanguage(lang, () => {
    atualizarTextos();
    // Salva o idioma escolhido para não resetar ao atualizar a página
    localStorage.setItem('idioma', lang); 
  });
};

// --- LÓGICA DO TEMA (O seu código original melhorado) ---
const themeBtn = document.getElementById('toggle-theme');
const body = document.body;

const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
    body.classList.add('light-mode');
    themeBtn.innerText = '☀️';
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    let theme = body.classList.contains('light-mode') ? 'light' : 'dark';
    themeBtn.innerText = (theme === 'light') ? '☀️' : '🌙';
    localStorage.setItem('theme', theme);
});

// Recuperar idioma salvo ao carregar a página
const idiomaSalvo = localStorage.getItem('idioma');
if (idiomaSalvo) {
    i18next.changeLanguage(idiomaSalvo, atualizarTextos);
}






