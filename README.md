# 🛡️ Portfólio Profissional - Ewerton Santana

> **Engenheiro de Software | DevOps | Cibersegurança**  
> Plataforma moderna, altamente responsiva e segura construída com **Python (Flask REST API)**, **JavaScript (ES6+)** e **CSS3 Moderno**.

---

## 🚀 Destaques da Arquitetura & Novas Funcionalidades

- **💻 DevSecOps Interactive CLI:** Terminal interativo embutido no navegador permitindo comandos como `help`, `skills`, `projects`, `audit`, `contact` e diagnóstico em tempo real via `curl /api/health`.
- **⚡ Backend REST API em Python (`app.py`):**
  - `GET /api/health`: Health check e observabilidade em tempo real com métricas de sistema e uptime.
  - `GET /api/projects`: Endpoint para entrega dinâmica de projetos e filtros.
  - `POST /api/contact`: Formulário seguro com sanitização rigorosa de inputs, validação RFC de e-mail e armadilha honeypot anti-spam.
- **🌐 Internacionalização Nativa (PT-BR / EN):** Alternador instantâneo de idiomas com persistência em `localStorage`.
- **🌙 Suporte a Tema Dark / Light:** Alternador de tema suave com respeito às preferências do sistema operacional (`prefers-color-scheme`).
- **📱 100% Responsivo:** Menu gaveta lateral com blur, fechamento por toque/esc e layout fluido adaptável para smartphones, tablets e desktops.
- **🏗️ Blueprint Corporativo de Arquitetura:** Página dedicada com modelo em 4 camadas (Edge/WAF, API Gateway, Dados/Cache e DevOps/Containers).
- **🐳 Pronto para Containerização:** `Dockerfile` e `.dockerignore` configurados com usuário non-root para demonstrar boas práticas de DevSecOps.

---

## 📂 Estrutura de Arquivos

```
.
├── app.py                # Servidor Backend em Python (Flask) com API REST
├── requirements.txt      # Dependências Python
├── Dockerfile            # Imagem de produção DevSecOps
├── .dockerignore         # Filtro de build Docker
├── index.html            # Página inicial com Hero, KPIs, Terminal e Techs
├── projetos.html         # Catálogo de projetos com filtro dinâmico
├── arquitetura.html      # Blueprint interativo em camadas de sistemas
├── sobre.html            # Trajetória profissional e pilares de atuação
├── contatos.html         # Formulário com feedback por Toasts e canais diretos
├── script.js             # Lógica JS: Terminal, i18n, Dark/Light, Validações
├── style.css             # Design System moderno, Glassmorphism e Breakpoints
├── data/                 # Armazenamento de mensagens e logs do backend
└── img/                  # Assets visuais (logo, foto de perfil, etc.)
```

---

## 📬 Contato

- **LinkedIn:** [/in/ewerton-sousa2406](https://www.linkedin.com/in/ewerton-sousa2406)
- **GitHub:** [@Ewerton-ux](https://github.com/Ewerton-ux)
- **E-mail:** [ewerton.santana.dev@gmail.com](mailto:ewertonsantana891@gmail.com)
