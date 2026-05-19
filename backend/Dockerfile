FROM python:3.11-slim

WORKDIR /app

# Install dependencies for mysqlclient on Windows/WSL
RUN apt-get update && apt-get install -y \
    gcc \
    default-libmysqlclient-dev \
    pkg-config \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Set environment variables for Windows compatibility
ENV PYTHONUNBUFFERED=1

CMD ["python", "app.py"]