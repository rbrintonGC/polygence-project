FROM python:3.12-slim
LABEL authors="Rocco"

WORKDIR /app

COPY ./requirements.txt .
RUN pip install -r requirements.txt

COPY . /app
ENTRYPOINT ["flask", "run", "--debug", "--host=0.0.0.0", "--port=80"]