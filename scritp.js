// =========================
// TRADUÇÕES
// =========================


// =========================
// TEMA
// =========================

const themeBtn = document.getElementById("toggle-theme");

const body = document.body;

// carregar tema salvo

if (localStorage.getItem("theme") === "light") {

  body.classList.add("light-mode");

  themeBtn.innerText = "☀️";

}

themeBtn.addEventListener("click", () => {

  body.classList.toggle("light-mode");

  const theme = body.classList.contains("light-mode")
    ? "light"
    : "dark";

  themeBtn.innerText = theme === "light"
    ? "☀️"
    : "🌙";

  localStorage.setItem("theme", theme);

});

// =========================
// MENU MOBILE
// =========================

const menuToggle = document.getElementById("mobile-menu");

const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {

  navMenu.classList.toggle("active");

  menuToggle.classList.toggle("active");

});

// fechar menu ao clicar

document.querySelectorAll(".menu-links a").forEach((link) => {

  link.addEventListener("click", () => {

    navMenu.classList.remove("active");

    menuToggle.classList.remove("active");

  });

});