"""
Portfolio Backend API - Ewerton Santana
Engenheiro de Software | DevOps | Cibersegurança
Desenvolvido com Python 3 & Flask
"""

from datetime import datetime, timezone
import json
import os
import re
import sys
import time

from flask import Flask, jsonify, request, send_from_directory

app = Flask(__name__, static_folder=".", static_url_path="")

# Garante diretório para armazenamento local de mensagens/logs
DATA_DIR = os.path.join(os.path.dirname(__file__), "data")
os.makedirs(DATA_DIR, exist_ok=True)
MESSAGES_FILE = os.path.join(DATA_DIR, "messages.json")

# Início do servidor para cálculo de uptime
START_TIME = time.time()


def sanitize_input(text: str) -> str:
    """Sanitiza strings de entrada contra caracteres perigosos/injeções simples."""
    if not isinstance(text, str):
        return ""
    # Remove tags HTML simples
    clean = re.sub(r"<[^>]*?>", "", text)
    return clean.strip()


def is_valid_email(email: str) -> bool:
    """Valida formato de e-mail usando regex padrão RFC."""
    pattern = r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
    return bool(re.match(pattern, email.strip()))


# ==========================================
# ROTAS DO FRONTEND (SERVE ARQUIVOS ESTÁTICOS)
# ==========================================


@app.route("/")
def serve_index():
    return send_from_directory(".", "index.html")


@app.route("/<path:filename>")
def serve_static(filename):
    # Trata caso de arquitetura.html e Arquitetura.html
    if filename.lower() == "arquitetura.html":
        if os.path.exists("arquitetura.html"):
            return send_from_directory(".", "arquitetura.html")
        elif os.path.exists("Arquitetura.html"):
            return send_from_directory(".", "Arquitetura.html")
    if os.path.exists(filename):
        return send_from_directory(".", filename)
    return send_from_directory(".", "index.html")


# ==========================================
# ENDPOINTS DA API REST
# ==========================================


@app.route("/api/health", methods=["GET"])
def api_health():
    """
    Health check endpoint para observabilidade e monitoramento DevOps.
    Retorna métricas de saúde e status dos serviços.
    """
    uptime_seconds = int(time.time() - START_TIME)
    hours, remainder = divmod(uptime_seconds, 3600)
    minutes, seconds = divmod(remainder, 60)
    uptime_str = f"{hours}h {minutes}m {seconds}s"

    health_data = {
        "status": "healthy",
        "service": "ewerton-portfolio-backend",
        "version": "2.0.0",
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "uptime": uptime_str,
        "environment": os.getenv("FLASK_ENV", "production"),
        "runtime": f"Python {sys.version.split()[0]}",
        "checks": {
            "api": "OK",
            "storage": "OK" if os.path.exists(DATA_DIR) else "WARN",
            "security_headers": "ENABLED",
            "rate_limit": "STANDBY",
        },
    }
    return jsonify(health_data), 200


@app.route("/api/projects", methods=["GET"])
def api_projects():
    """
    Retorna os projetos estruturados com filtros de categorias e tags técnicas.
    """
    projects = [
        {
            "id": "cloud-integration-platform",
            "title": "Plataforma de Integração & Mensageria",
            "category": "backend",
            "tags": ["Python", "AWS", "Docker", "RabbitMQ"],
            "description": "Arquitetura orientada a microsserviços com resiliência, retry distribuído e autenticação JWT para conexão entre sistemas legados e cloud.",
            "metrics": "99.9% Uptime • -40% Latência",
            "link": "arquitetura.html",
            "github": "https://github.com/Ewerton-ux",
        },
        {
            "id": "devsecops-pipeline",
            "title": "Pipeline DevSecOps Automatizado",
            "category": "devops",
            "tags": ["Docker", "GitHub Actions", "Trivy", "SonarQube"],
            "description": "Automação completa de CI/CD com esteira de testes automatizados, verificação estática de vulnerabilidades e build containerizado seguro.",
            "metrics": "Build em 3min • 0 Falhas Críticas",
            "link": "arquitetura.html",
            "github": "https://github.com/Ewerton-ux",
        },
        {
            "id": "secure-gateway-api",
            "title": "API Gateway Resiliente & WAF",
            "category": "security",
            "tags": ["Java", "Spring Boot", "Redis", "OAuth2"],
            "description": "Gateway corporativo com rate-limiting distribuído via Redis, validação rigorosa de tokens e mascaramento de logs sensíveis.",
            "metrics": "Proteção DDoS • +15k req/min",
            "link": "arquitetura.html",
            "github": "https://github.com/Ewerton-ux",
        },
        {
            "id": "infra-as-code",
            "title": "Infraestrutura como Código (IaC)",
            "category": "devops",
            "tags": ["Terraform", "AWS", "Linux", "Nginx"],
            "description": "Provisionamento reproduzível de ambientes em nuvem com VPC dedicada, subnets públicas/privadas e instâncias auto-recuperáveis.",
            "metrics": "Deploy 100% Reprodutível",
            "link": "arquitetura.html",
            "github": "https://github.com/Ewerton-ux",
        },
    ]

    category = request.args.get("category")
    if category and category != "all":
        projects = [p for p in projects if p["category"] == category.lower()]

    return jsonify({"total": len(projects), "projects": projects}), 200


@app.route("/api/contact", methods=["POST"])
def api_contact():
    """
    Endpoint seguro para recebimento de mensagens do formulário de contato.
    Conta com proteção honeypot anti-bot, validação de e-mail e sanitização de inputs.
    """
    try:
        data = request.get_json(silent=True) or request.form.to_dict()

        # Proteção honeypot contra bots de spam
        honeypot = data.get("website_check", "")
        if honeypot:
            # Bot caiu na armadilha: finge sucesso sem salvar nada
            return (
                jsonify(
                    {"status": "success", "message": "Mensagem recebida com sucesso!"}
                ),
                200,
            )

        name = sanitize_input(data.get("name", ""))
        email = sanitize_input(data.get("email", ""))
        message = sanitize_input(data.get("message", ""))

        if not name or len(name) < 2:
            return (
                jsonify(
                    {
                        "status": "error",
                        "message": "Por favor, informe seu nome completo.",
                    }
                ),
                400,
            )

        if not email or not is_valid_email(email):
            return (
                jsonify(
                    {
                        "status": "error",
                        "message": "Por favor, informe um endereço de e-mail válido.",
                    }
                ),
                400,
            )

        if not message or len(message) < 10:
            return (
                jsonify(
                    {
                        "status": "error",
                        "message": "A mensagem deve conter pelo menos 10 caracteres explicativos.",
                    }
                ),
                400,
            )

        # Salva o contato recebido no arquivo local seguro
        new_entry = {
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "name": name,
            "email": email,
            "message": message,
            "ip_address": request.headers.get(
                "X-Forwarded-For", request.remote_addr
            ),
        }

        messages = []
        if os.path.exists(MESSAGES_FILE):
            try:
                with open(MESSAGES_FILE, "r", encoding="utf-8") as f:
                    messages = json.load(f)
            except Exception:
                messages = []

        messages.append(new_entry)

        with open(MESSAGES_FILE, "w", encoding="utf-8") as f:
            json.dump(messages, f, ensure_ascii=False, indent=2)

        return (
            jsonify(
                {
                    "status": "success",
                    "message": f"Obrigado, {name}! Sua mensagem foi registrada com sucesso e responderei em breve.",
                }
            ),
            200,
        )

    except Exception as e:
        return (
            jsonify(
                {
                    "status": "error",
                    "message": "Ocorreu um erro interno ao processar sua mensagem.",
                    "details": str(e),
                }
            ),
            500,
        )


@app.after_request
def add_security_headers(response):
    """Aplica cabeçalhos HTTP de segurança recomendados (DevSecOps)."""
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["X-Frame-Options"] = "SAMEORIGIN"
    response.headers["X-XSS-Protection"] = "1; mode=block"
    response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
    return response


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    print(f"[*] Iniciando servidor do Portfólio de Ewerton Santana...")
    print(f"[*] API ativa em http://localhost:{port}/api/health")
    print(f"[*] Site disponível em http://localhost:{port}/")
    app.run(host="0.0.0.0", port=port, debug=True)
