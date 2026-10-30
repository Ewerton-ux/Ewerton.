# Imagem base oficial do Python (versão slim para segurança e menor footprint)
FROM python:3.12-slim

# Metadados
LABEL maintainer="Ewerton Santana <ewerton.santana.dev@gmail.com>"
LABEL description="Portfólio Profissional - Engenheiro de Software & DevOps"

# Define variáveis de ambiente
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PORT=5000

# Define diretório de trabalho
WORKDIR /app

# Cria usuário não-root por segurança (Best practice DevSecOps)
RUN addgroup --system appgroup && adduser --system --group appuser

# Copia requisitos e instala dependências
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copia o restante do código
COPY . .

# Altera propriedade dos arquivos para o usuário não-root
RUN chown -R appuser:appgroup /app
USER appuser

# Expõe a porta do serviço
EXPOSE 5000

# Executa o servidor
CMD ["python", "app.py"]
