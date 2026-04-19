FROM python:3.11-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
	PYTHONUNBUFFERED=1 \
	PIP_NO_CACHE_DIR=1

WORKDIR /app

RUN apt-get update \
	&& apt-get install -y --no-install-recommends build-essential gcc libgomp1 \
	&& rm -rf /var/lib/apt/lists/*

COPY pyproject.toml ./
COPY main.py ./main.py
COPY api ./api
COPY config ./config
COPY core ./core
COPY models ./models
COPY scripts ./scripts
COPY services ./services
COPY tools ./tools
COPY utils ./utils

RUN pip install --upgrade pip \
	&& pip install fastapi google-genai numpy openai pandas seaborn streamlit tensorflow

CMD ["python", "main.py"]
