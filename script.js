

function setupTheme() {
  const themeBtn = document.getElementById('toggle-theme');
  const body = document.body;
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'light') {
    body.classList.add('light-mode');
    if (themeBtn) themeBtn.innerText = '☀️';
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      body.classList.toggle('light-mode');
      const theme = body.classList.contains('light') || body.classList.contains('light-mode') ? 'light' : 'dark';
      themeBtn.innerText = theme === 'light' ? '☀️' : '🌙';
      localStorage.setItem('theme', theme);
    });
  }
}

function setupMobileMenu() {
  const menuToggle = document.getElementById('mobile-menu');
  const navMenu = document.querySelector('.nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });

    document.querySelectorAll('.menu-links a').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (typeof getDefaultLanguage === 'function' && typeof translatePage === 'function') {
    const currentLanguage = getDefaultLanguage();
    translatePage(currentLanguage);

    const languageSwitcher = document.getElementById('language-switcher');
    if (languageSwitcher) {
      languageSwitcher.addEventListener('change', (event) => {
        const selected = event.target.value;
        localStorage.setItem('language', selected);
        translatePage(selected);
      });
    }
  }

  setupTheme();
  setupMobileMenu();
});